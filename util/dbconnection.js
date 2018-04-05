var mysql = require('mysql');

var pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'shri',
	database: 'acs',
});

module.exports  = pool;