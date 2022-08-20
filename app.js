var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const mysql = require('mysql');  
const port = 3001;

var connection = mysql.createConnection({
    host: "hand-mysql.c4v4p96dwz9h.ap-northeast-2.rds.amazonaws.com",
    user: "wnstj",
    database: "HANDdb",
    password: "71898212asd!",
    port: 3306
});

app
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .use(express.json({ extended: false }))
    .use(express.urlencoded({extended: true}))
    //.use("/app_list", require("./routes/app_list"))
    .listen(port, () => {console.log('Express is listening on port', port);})
