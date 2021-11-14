require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Endalkachew23?',
      database: 'employees_db'
    },
    console.log(`Connected to the employees-db`)
  );
  
db.connect(err => {
    if (err) console.log("error in running");
    else console.log("connected");
});


userPrompts = () => {
    inquirer.prompt({
        name: "Employee Database - Begin",
        type: "list",
        message: "Thanks for using the employee tracker, follow promopts to review and update",
        choices: [
        "View All Departments", 
        "View All Roles", 
        "View All Employees", 
        "Add a Department", 
        "Add a Role", 
        "Add an Employee", 
        "Update and Existing Employee"],

    }).then((choices) => {
        if(choices.userChoice === "View all Departments"){
            viewAllDepartments();
        } else if (choices.userChoice === "View Roles"){
            viewAllRoles();
        } else if (choices.userChoice === "View Employees"){
            viewAllEmployees();
        } else if (choices.userChoice === "Add Department"){
            addDepartment();
        } else if (choices.userChoice === "Add role"){
            addRole();
        } else if (choices.userChoice === "Add Employee"){
            addEmployee();
        } else if (choices.userChoice === "Modify Employee"){
            updateEmployee();
        }
        // bonus sect
        else if (choices.userChoice === "View Employees by Manager"){
            // viewAllRoles();
        } else if (choices.userChoice === "View Employees by Department"){
            // viewAllEmployees();
        } else if (choices.userChoice === "Delete a Department"){
            // addDepartment();
        } else if (choices.userChoice === "Delete a Role"){
            // addRole();
        } else if (choices.userChoice === "Delete an Employee"){
            // addEmployee();
        } else if (choices.userChoice === "Modify Employee Manager"){
            // updateEmployee();
        }
    })
};

function init () {
    console.log(`Follow prompts to input data`)

userPrompts();
};

// Deps
viewAllDepartments = () => {
    db.query("Select * from departments") 
        .then (data => {
            console.table(data)
        })
}

// roles
viewAllRoles = () => {
    db.query("Select * from roles") 
        .then (data => {
            console.table(data)
        })
}
// employee
viewAllEmployees = () => {
    db.query("Select * from employees") 
        .then (data => {
            console.table(data)
        })
}

addDepartment = () => {

    const addDepartment = [
        {
            type:"text",
            message:"What Department would you like to add?",
            name: "departmentAdd"
        },
        {
            type:"text",
            message:"What is the Department ID?",
            name: "departmentID"
        }
    ];
    prompt(addDepartment)
    .then((department)=> {
        db.createDepartment(department)
        .then(() => {
            console.log(`Add Department: ${department}`)
        })
        .then(() => {
            userPrompts();
        })
    })

}

addRole = () => {

    const addRole = [
        {
            type:"text",
            message:"What is the ID for the role?",
            name: "roleID"
        },
        {
            type:"text",
            message:"What is the Job role title?",
            name: "roleTitle"
        },
        {
            type:"text",
            message:"What is the salary?",
            name: "roleSalary"
        },
    ]
    prompt(addRole)
    .then((role)=> {
        db.createRole(role)
        .then(() => {
            console.log(`Add role: ${role}`)
        })
        .then(() => {
            userPrompts();
        });
    });
    
}

addEmployee = () => {

    const addEmployee = [
        {
            type:"text",
            message:"What is the ID for the employee?",
            name: "employeeID"
        },
        {
            type:"text",
            message:"Whats the employees name (first)?",
            name: "employeeFirstName"
        },
        {
            type:"text",
            message:"Whats the employees name (last)?",
            name: "employeeLastName"
        },
        {
            type:"text",
            message:"What is the ID for this employee?",
            name: "employeeRoleID"
        },
        {
            type:"text",
            message:"What is the Manager ID for this employee?",
            name: "employeeManagerID"
        }
    ]
    prompt(addEmployee)
    .then((employee)=> {
        db.createRole(employee)
        .then(() => {
            console.log(`Add Employee - ${employee}`)
        })
        .then(() => {
            userPrompts();
        });
    });
}

init();