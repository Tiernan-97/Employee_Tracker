const MainQuestions = [
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['View all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    }
    
]

const addDepartment = {
    type: 'input',
    name: 'department_name',
    message: 'What is the name of the department you want to add?'
}

const addRole = [{
    type: 'input',
    name: 'role_name',
    message: 'What is the name of the role you want to add?'
},
{
    type: 'number',
    name: 'role_salary',
    message: 'What is the salary of the role you want to add?'
},
{
    type: 'list',
    name: 'role_department_id',
    message: 'What is the department id of the role you want to add?',
    choices: []
}]

const addEmployee = [{
    type: 'input',
    name: 'employee_first',
    message: 'What is the first name of the employee you want to add?'
},{
    type: 'input',
    name: 'employee_last',
    message: 'What is the last name of the employee you want to add?'
},{
    type: 'list',
    name: 'employee_role_id',
    message: 'What is the role id of the employee you want to add?',
    choices: []
},{
    type: 'list',
    name: 'employee_manager',
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