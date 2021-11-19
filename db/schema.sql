DROP DATABASE IF EXISTS employeesdatabase_db;
CREATE DATABASE employeesdatabase_db;
USE  employeesdatabase_db;

CREATE TABLE department (
  department_id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (department_id)
);

CREATE TABLE roles(
   roles_id INT NOT NULL,
   title VARCHAR(30) NOT NULL,
   salary INT NOT NULL,
   department_id INT,
   PRIMARY KEY (roles_id),
   FOREIGN KEY (department_id)
   REFERENCES department(department_id)
   ON DELETE SET NULL
);

CREATE TABLE employees(
   employees_id INT NOT NULL,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT,
   manager_id INT,
   PRIMARY KEY (employees_id),
   FOREIGN KEY (role_id)
   REFERENCES roles(roles_id)
   ON DELETE SET NULL
   -- FOREIGN KEY (manager_id)
   -- REFERENCES employees(employees_id)
   -- ON DELETE SET NULL
);