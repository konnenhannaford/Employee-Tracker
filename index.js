require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Endalkachew23?',
      database: 'employeetracker_db'
    },
    console.log(`Connected to the employeetracker_db`)
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
        "Add an Employee", 
        "Update an Existing Employee"],

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
        } else if (choices.testing === "Update an Existing Employee"){
            updateEmployees()
            console.log ("testing");
        }
        // // bonus sect
        // else if (choices.testing === "View Employees by Manager"){
        //     // viewEbyM();
        // } else if (choices.testing === "View Employees by Department"){
        //     // viewEbyD();
        // } else if (choices.testing === "Delete a Department"){
        //     // DeleteDepartment();
        // } else if (choices.testing === "Delete a Role"){
        //     // DeleteRole();
        // } else if (choices.testing === "Delete an Employee"){
        //     // DeleteEmployee();
        // } else if (choices.testing === "Modify Employee Manager"){
        //     // updateEmployeeManager();
        // }
    })
};

function init () {
    console.log(`Follow prompts to input data`)

userPrompts();
};

// Deps
viewDepartment = () => {
    db.query("Select * from department") 
        .then (data => {
            console.table(data)
        })
}

// roles
viewRoles = () => {
    db.query("Select * from roles") 
        .then (data => {
            console.table(data)
        })
}
// employee
viewEmployees = () => {
    db.query("Select * from employees") 
        .then (data => {
            console.table(data)
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
            message:"What is the ID for this employee?"
            
        },
        {
            name: "employeeManagerID",
            type:"text",
            message:"What is the Manager ID for this employee?"
            
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






// -------------this code works to call the info from database-----------\
// viewDepartment();

// function viewDepartment() {
//     db.query("SELECT * FROM department", function (error, res) {
//         console.log(res)
//     });
// };

// viewEmployees();

// function viewEmployees() {
//     db.query("SELECT * FROM employees", function (error, res) {
//         console.log(res)
//     });
// };

// viewRoles();

// function viewRoles() {
//     db.query("SELECT * FROM roles", function (error, res) {
//         console.log(res)
//     });
// };




