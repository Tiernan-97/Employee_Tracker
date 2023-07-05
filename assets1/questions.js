const mainQuestions = [
    {
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
    }
    
]

const addDepartment = {
    type: 'input',
    name: 'name',
    message: 'What is the name of the department you want to add?'
}

const addRole = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of the role you want to add?'
},
{
    type: 'number',
    name: 'salary',
    message: 'What is the salary of the role you want to add?'
},
{
    type: 'list',
    name: 'department_id',
    message: 'What is the department id of the role you want to add?',
    choices: []
}]

const addEmployee = [{
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of the employee you want to add?'
},{
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the employee you want to add?'
},{
    type: 'list',
    name: 'role_id',
    message: 'What is the role id of the employee you want to add?',
    choices: []
},{
    type: 'list',
    name: 'manager_id',
    message: 'Who is the employee\'s manager?',
    choices: []
}]

const updateEmployee = [{
    type: 'list',
    name: 'employee_id',
    message: 'Which Employee would you like to update??',
    choices: []
},{
    type: 'list',
    name: 'employee_role_id',
    message: 'What is the employee\'s new role',
    choices: []
}]

module.exports = {mainQuestions, addDepartment, addRole, addEmployee, updateEmployee};