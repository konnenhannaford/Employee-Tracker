DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;
USE employees_db;

CREATE TABLE department (
--    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   name VARCHAR(30) NOT NULL
);
CREATE TABLE roles (
   id INT AUTO_INCREMENT NOT NULL,
   title VARCHAR(30) NOT NULL,
   salary DECIMAL,
   department_id INT,
   PRIMARY KEY (id)
--    FOREIGN KEY (department_id)
--    REFERENCES department(id)
--    ON DELETE SET NULL
);
CREATE TABLE employees (
   id INT AUTO_INCREMENT NOT NULL,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INT,
   manager_id INT,
   PRIMARY KEY (id)

--    FOREIGN KEY (role_id)
--    REFERENCES roles(id)
--    ON DELETE SET NULL,
--    FOREIGN KEY (manager_id)
--    REFERENCES employee(id)
--    ON DELETE SET NULL

);