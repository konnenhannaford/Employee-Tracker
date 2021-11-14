// const inquirer = require('inquirer');
// // Import and require mysql2
// const mysql = require('mysql2');

// // Connect to database
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password here
//     password: '',
//     database: 'movies_db'
//   },
//   console.log(`Connected to the movies_db database.`)
// );

// // Create a movie
// app.post('/api/new-movie', ({ body }, res) => {
//   const sql = `INSERT INTO movies (movie_name)
//     VALUES (?)`;
//   const params = [body.movie_name];
  
//   db.query(sql, params, (err, result) => {
//     if (err) {
//       res.status(400).json({ error: err.message });
//       return;
//     }
//     res.json({
//       message: 'success',
//       data: body
//     });
//   });
// });

// // Read all movies
// app.get('/api/movies', (req, res) => {
//   const sql = `SELECT id, movie_name AS title FROM movies`;
  
//   db.query(sql, (err, rows) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//        return;
//     }
//     res.json({
//       message: 'success',
//       data: rows
//     });
//   });
// });

// ) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




// // const express = require('express');
// // require("dotenv").config();
// // const mysql = require('mysql2');
// // const inquirer = require('inquirer');
// // const fs = require('fs');
// // const util = require ('util');
// // const path = require ('path');
// // const generateMarkdown = require('./utils/generateMarkdown.js');
// // const api = require('./routes/index.js');

// // const PORT = process.env.PORT || 3001;
// // const app = express();

// // // // Express middleware
// // app.use(express.urlencoded({ extended: false }));
// // app.use(express.json());

// // Connect to database
// // const db = mysql.createConnection(
// //   {
// //     host: process.env.DB_HOST,
// //     user: process.env.DB_USER,
// //     password: process.env.DB_PASSWORD,
// //     database: process.env.DB_NAME
// //   },
// //   console.log(`Connected to the employees-db`)
// // );


// // const db = mysql.createConnection(
// //   {
// //     host: 'localhost',
// //     user: 'root',
// //     password: 'Endalkachew23?',
// //     database: 'employees_db'
// //   },
// //   console.log(`Connected to the employees-db`)
// // );
// // module.exports = db;

// // --------

// // // Query database using COUNT() and GROUP BY
// // db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
// //   console.log(results);
// // });

// // // Query database using SUM(), MAX(), MIN() AVG() and GROUP BY
// // db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
// //   console.log(results);
// // });

// // app.use((req, res) => {
// //   res.status(404).end();
// // });

// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });


// // ----------------



//   // // call once somewhere in the beginning of the app
//   // const cTable = require('console.table');
//   // console.table([
//   //   {
//   //     name: 'foo',
//   //     age: 10
//   //   }, {
//   //     name: 'bar',
//   //     age: 20
//   //   }
//   // ]);

//   // // prints
//   // name  age
//   // ----  ---
//   // foo   10
//   // bar   20\







// //   async function main() {
// //     // get the client
// //     const mysql = require('mysql2/promise');
// //     // create the connection
// //     const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
// //     // query database
// //     const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
// //   }


// //   // get the client
// // const mysql = require('mysql2/promise');

// // // get the promise implementation, we will use bluebird
// // const bluebird = require('bluebird');

// // // create the connection, specify bluebird as Promise
// // const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test', Promise: bluebird});

// // // query database
// // const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
