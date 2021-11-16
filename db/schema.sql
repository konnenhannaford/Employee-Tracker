DROP DATABASE IF EXISTS employeetracker_db;
CREATE DATABASE employeetracker_db;
USE  employeetracker_db;

CREATE TABLE department(
   department_id INT AUTO_INCREMENT NOT NULL,
   name VARCHAR(30) NOT NULL,
   PRIMARY KEY (department_id)

);
CREATE TABLE roles(
   roles_id INT AUTO_INCREMENT NOT NULL,
   title VARCHAR(30) NOT NULL,
   salary INT,
   department_id INT,
   PRIMARY KEY (roles_id ),
   FOREIGN KEY (department_id)
   REFERENCES department(department_id)
   ON DELETE SET NULL
);
CREATE TABLE employees(
   employees_id INT AUTO_INCREMENT NOT NULL,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT,
   manager_id INT,
   PRIMARY KEY (employees_id),
   FOREIGN KEY (role_id)
   REFERENCES roles(roles_id)
   ON DELETE SET NULL,
   FOREIGN KEY (manager_id)
   REFERENCES employees(employees_id)
   ON DELETE SET NULL

);