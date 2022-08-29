const express = require("express"); 
const router = express.Router(); 
const mysql = require('mysql');  
const dbconfig = require('../config/database.js');
const connection = mysql.createConnection(dbconfig);

router.get('/users', (req, res) => {
    connection.query('SELECT * from Users', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
});

module.exports = router;