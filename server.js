const express = require('express');
const mysql = require('mysql2');

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

