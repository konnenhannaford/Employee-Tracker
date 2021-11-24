require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const confirm = require('inquirer-confirm');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Endalkachew23?',
      database: 'employeesdatabase_db'
    },
    console.log(`Connected to the employeesdatabase_db`)
  );
  
const userPrompts = () => {
    inquirer.prompt({
        name: "testing",
        type: "list",
        message: "Thanks for using the employee tracker, follow promopts to review and update",
        choices:[
        "View Departments", 
        "View Roles", 
        "View Employees", 
        "Add a Department", 
        "Add a Role", 
        "Add an Employee" 
        ],

    }).then(choices => {
        console.log (choices)
        if(choices.testing === "View Departments"){
            viewDepartment() 
            console.log ("testing");
        } else if (choices.testing === "View Roles"){
            viewRoles()
            console.log ("testing");
        } else if (choices.testing === "View Employees"){
            viewEmployees()
            console.log ("testing");
        } else if (choices.testing === "Add a Department"){
            addDepartment()
            console.log ("testing");
        } else if (choices.testing === "Add a Role"){
            addRoles()
            console.log ("testing");
        } else if (choices.testing === "Add an Employee"){
            addEmployees()
            console.log ("testing");
        }
    })
};

function init () {
    console.log(`Follow prompts to input data`)

userPrompts();
};

// Deps
viewDepartment = () => {
    db.query("SELECT * FROM department", function (error, res) {
        console.table(res)
        endOrContinue()
    });
}

// roles
viewRoles = () => {
    db.query("SELECT * FROM roles", function (error, res) {
        console.table(res)
        endOrContinue()
        })
}
// employee
viewEmployees = () => {
    db.query("SELECT * FROM employees", function (error, res) {
        console.table(res)
        endOrContinue()
        })
}

addDepartment = () => {

    const addDepartment = [
        {
            type:"text",
            message:"Add Department",
            name: "departmentAdd"
        },
        {
            type:"text",
            message:"Add Department ID?",
            name: "departmentID"
        }
    ];
    inquirer.prompt(addDepartment)
    .then((department)=> {
        const data = {
            department_id: department.departmentID,
            department_name: department.departmentAdd
        }

        db.query("INSERT INTO department SET ?", data, function (error, res) {
            if (error) throw error;
            endOrContinue()
        });
        console.log (department)
    })
}


addRoles = () => {

    const addRole = [
        {
            type:"text",
            message:"Add role ID",
            name: "roleID"
        },
        {
            type:"text",
            message:"Add Job role title",
            name: "roleTitle"
        },
        {
            type:"text",
            message:"Add salary",
            name: "roleSalary"
        },
        {
            type:"text",
            message:"Add Department ID for this role",
            name: "DepartmentID"
        },
    ]
 
    inquirer.prompt(addRole)
    .then((role)=> {
        const data = {
            roles_id: role.roleID,
            title: role.roleTitle,
            salary: role.roleSalary,
            department_id: role.DepartmentID
        }
        db.query("INSERT INTO roles SET ?", data, function (error, res) {
            if (error) throw error;
            endOrContinue()
        });
        console.log (role)
        });    
}

addEmployees = () => {

    const addEmployee = [
        {
            name: "employeeID",
            type:"text",
            message:"What is the ID for the employee?"
            
        },
        {
            name: "employeeFirstName",
            type:"text",
            message:"Whats the employees name (first)?"
            
        },
        {
            name: "employeeLastName",
            type:"text",
            message:"Whats the employees name (last)?"
           
        },
        {
            name: "employeeRoleID",
            type:"text",
            message:"What is the ID for this role?"
            
        },
        {
            name: "employeeManagerID",
            type:"text",
            message:"What is the Manager ID for this employee?"
            
        }
    ]
    inquirer.prompt(addEmployee)
    .then((employees)=> {
    const data = {
        employees_id: employees.employeeID,
        first_name: employees.employeeFirstName,
        last_name: employees.employeeLastName,
        role_id: employees.employeeRoleID,
        manager_id: employees.employeeManagerID
    }
    db.query("INSERT INTO employees SET ?", data, function (error, res) {
        if (error) throw error;
        endOrContinue()
    });
    console.log (employees)
    });
}

const endOrContinue = () => {
    confirm("Do you want to continue?")
        .then(function confirmed() {
           init()
        }, function cancelled() {
        db.end ()
           
        });
};

init();





