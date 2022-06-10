const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "prebellifinancas",
    "password": "mistic170887",
    "database": "financasprebelli",
    "host": "mysql642.umbler.com",
    "port": 41890
});

exports.pool = pool;