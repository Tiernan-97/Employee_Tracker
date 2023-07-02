USE workers_db;

select employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, role.title, role.salary, role.department_id, department.name, CONCAT(managers.first_name, ' ', managers.last_name) as manager from employee
inner join role on employee.role_id = role.id
inner join department on role.department_id = department.id
left join employee as managers on employee.manager_id = managers.id
Order by employee.id asc;
