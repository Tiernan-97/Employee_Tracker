INSERT INTO department (name)
VALUES ("Front-End"),
       ("Back-End"),
       ("UI"),
       ("Admin");


INSERT INTO role (title, salary, department_id)
VALUES ("Head of Front-End", 35000, 1),
       ("Front-End Developer",30000,1),
       ("Head of Back-End", 40000, 2),
       ("Back-End Developer",35000,2),
       ("Head of UI", 25000, 3),
       ("UI Developer",15000,3),
       ("Admin Manager", 25000,4),
       ("Administraor", 20000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Tiernan", "Green", 3,NULL),
        ("Kavan", "Green", 4, 1),
        ("Esme", "Reynolds", 1,NULL),
        ("Ryan", "Young", 2, 3),
        ("Joshua", "Smith", 5,NULL),
        ("Shannon", "Lightworth", 6, 5),
        ("Chelsey", "Small", 7,NULL),
        ("Robert", "James", 8, 7);
       