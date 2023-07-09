const employeeView = "select employee.id, employee.first_name, employee.last_name, employee.role_id, role.title, role.salary, role.department_id, department.name, employee.manager_id, CONCAT(managers.first_name, ' ', managers.last_name) as manager from employee inner join role on employee.role_id = role.id inner join department on role.department_id = department.id left join employee as managers on employee.manager_id = managers.id Order by employee.id asc"

const roleView = "select role.id, role.title, role.salary, department.name as department from role inner join department on role.department_id = department.id Order by role.id asc"

const departmentView = "select department.id, department.name from department Order by department.id asc"

module.exports = [employeeView, roleView, departmentView];