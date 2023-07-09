const inquirer = require("inquirer");
const [employeeView, roleView, departmentView] = require("./assets/queries.js")
const {mainQuestions, addDepartment, addRole, addEmployee, updateEmployee} = require("./assets/questions.js");
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'MyPassword123!',
      database: 'workers_db'
    },
    console.log(`Connected to the workers_db database.`)
  );

const runMenuQuestions = () => {
    inquirer.prompt(mainQuestions).then((answers) => {
        if (answers.mainMenu === "View all departments") {
            viewAllDepartments();
        } else if (answers.mainMenu === "View all roles") {
            viewAllRoles();
        } else if (answers.mainMenu === "View all employees") {
            viewAllEmployees();
        } else if (answers.mainMenu === "Add a department") {
            doAddDepartment();
        } else if (answers.mainMenu === "Add a role") {
            doAddRole();
        } else if (answers.mainMenu === "Add an employee") {
            doAddEmployee();
        } else if (answers.mainMenu === "Update an employee role") {
            doUpdateEmployee();
        } else {
            console.log("Something went wrong. Please try again.");
            runMenuQuestions();
        }    
}
)
};

const viewAllDepartments = () => {
    db.query(departmentView, (err, res) => {
        if (err) throw err;
        console.table(res);
        runMenuQuestions();
    });
};

const viewAllRoles = () => {
    db.query(roleView, (err, res) => {
        if (err) throw err;
        console.table(res);
        runMenuQuestions();
    });
};

const viewAllEmployees = () => {
    db.query(employeeView, (err, res) => {
        if (err) throw err;
        console.table(res);
        runMenuQuestions();
    });
};

const doAddDepartment = () => {
    inquirer.prompt(addDepartment).then((answers) => {
        db.query("INSERT INTO department SET?", answers, (err, res) => {
            if (err) throw err;
            console.log("Department added successfully!");
            runMenuQuestions();
        });
    });
};

const doAddRole = () => {
    return new Promise((resolve, reject) => {
    db.query("SELECT * FROM department", (err,results) => {
        if (err) {
            reject(err);
        }
        resolve(results);
    });})
        .then((results) => {
        const deptQ = addRole[2];
        results.forEach((dept) => {
            deptQ.choices.push({
                value: dept.id,
                name: dept.name
            })
        })
        })
        .then(() => {
            inquirer.prompt(addRole).then((answers) => {
                db.query("INSERT INTO role SET?", answers, (err, res) => {
                    if (err) throw err;
                    console.log("Role added successfully!");
                    runMenuQuestions();
                });
            });
        })
};

const doAddEmployee = () => {
    return new Promise((resolve, reject) => {
    db.query("SELECT * FROM role", (err,results) => {
        if (err) {
            reject(err);
        }
        resolve(results);
    });})
        .then((results) => {
        const roleQ = addEmployee[2];
        results.forEach((role) => {
            roleQ.choices.push({
                value: role.id,
                name: role.title
            })
        })
        })
        .then(() => {
            return new Promise((resolve, reject) => {
                db.query("SELECT * FROM employee", (err,results) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                })
            });})
            .then((results) => {
                const managerQ = addEmployee[3];
                results.forEach((manager) => {
                    managerQ.choices.push({
                        value: manager.id,
                        name: manager.first_name + " " + manager.last_name
                    })
                });
            })
        .then(() => {
            inquirer.prompt(addEmployee).then((answers) => {
                
                db.query("INSERT INTO employee SET?", answers, (err, res) => {
                    if (err) throw err;
                    console.log("Employee added successfully!");
                    runMenuQuestions();
                });
            });
        })
};

const doUpdateEmployee = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM employee", (err,results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        });})
            .then((results) => {
            const employeeQ = updateEmployee[0];
            results.forEach((employee) => {
                employeeQ.choices.push({
                    value: employee.id,
                    name: employee.first_name + " " + employee.last_name
                })
            })
            })
            .then(() => {
                return new Promise((resolve, reject) => {
                    db.query("SELECT * FROM role", (err,results) => {
                        if (err) {
                            reject(err);
                        }
                        resolve(results);
                    })
                });})
                .then((results) => {
                    const roleQ = updateEmployee[1];
                    results.forEach((role) => {
                        roleQ.choices.push({
                            value: role.id,
                            name: role.title
                        })
                    });
                })
            .then(() => {
                inquirer.prompt(updateEmployee).then((answers) => {
                    console.log(answers);
                    db.query("UPDATE employee SET role_id = ? WHERE id = ?", [answers.employee_role_id, answers.employee_id], (err, res) => {
                        if (err) throw err;
                        runMenuQuestions();
                    });
                });
    
            })
        };

runMenuQuestions();