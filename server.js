const express = require('express');
const mysql = require('mysql2');
// const inquirer = require('inquirer');
// const fs = require('fs');
// const util = require ('util');
// const path = require ('path');
// const generateMarkdown = require('./utils/generateMarkdown.js');


// const PORT = process.env.PORT || 3001;
// const app = express();

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: '',
    database: 'employees_db'
  },
  console.log(`Connected to the employees-db`)
);

module.exports = db;

// --------

// // Query database using COUNT() and GROUP BY
// db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
//   console.log(results);
// });

// // Query database using SUM(), MAX(), MIN() AVG() and GROUP BY
// db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
//   console.log(results);
// });

// app.use((req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// ----------------



  // // call once somewhere in the beginning of the app
  // const cTable = require('console.table');
  // console.table([
  //   {
  //     name: 'foo',
  //     age: 10
  //   }, {
  //     name: 'bar',
  //     age: 20
  //   }
  // ]);

  // // prints
  // name  age
  // ----  ---
  // foo   10
  // bar   20