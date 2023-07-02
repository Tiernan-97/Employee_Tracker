DROP DATABASE IF EXISTS workers_db;

CREATE DATABASE workers_db;

USE workers_db;

CREATE TABLE department (
    id int primary key auto_increment,
    name varchar(30)
);

CREATE TABLE role (
    id int not null primary key auto_increment,
    title varchar(30) not null,
    salary decimal not null,
    department_id int,
    foreign key (department_id)
    references department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id int not null primary key auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int,
    manager_id int ,
    foreign key (role_id)
    references role(id)
    ON DELETE SET NULL,
    foreign key (manager_id)
    references employee(id)
    ON DELETE SET NULL
);