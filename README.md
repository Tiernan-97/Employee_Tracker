# 12 SQL: Employee Tracker

## Your Task

Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called **content management systems (CMS)**. Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

Because this Challenge will require the use of the `Inquirer` package, ensure that you install and use Inquirer version 8.2.4. To do so, use the following command in your project folder: `npm i inquirer@8.2.4`.

Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

## User Story

```md
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
```

## Methodology

I started by creating the questions.js file that would conain all of the questions that inquirer would prompt the user.
I left some choices boxed blank so that I could inject them with data to avoid the issue of it being out of date as soon as I add a new department, employee or role. Next, I created the sql files for my schema and seed making sure to use foreign keys to link values together. I came across an issue with having too much code, so I created a queries.js file which would hold some of the longer query strings and I exported them out of that file. Finally, I worked on the index.js file which took a lot of work, however, once I had created the doAddRole function and got that working, the rest were very similar so it was just a case of copying and then refactoring the code.

## Links
Repo: https://github.com/Tiernan-97/Employee_Tracker
Video : https://www.loom.com/share/dd318915932c42eea0c71390bc1592e1?sid=4da73080-703b-486a-9cab-99b144b4a7d1