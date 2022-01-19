'use strict'

//data base sql conection
const mysql = require('mysql');

// const myconnection = require('express-myconnection');
// const dbOptions = {
// 	host: process.env.HOST_SQL,
// 	port: process.env.PORT_SQL,
// 	password: process.env.PASSWORD_SQL,
// 	user: process.env.USER_SQL,
// 	database: process.env.DATABASE_SQL
// }
// const Dynamic = myconnection(mysql, dbOptions, 'request')

const connection = mysql.createConnection({
	host: process.env.HOST_SQL,
	port: process.env.PORT_SQL,
	password: process.env.PASSWORD_SQL,
	user: process.env.USER_SQL,
	database: process.env.DATABASE_SQL
})
connection.connect((error)=>{
	if(error) {
		console.log('el error es' + error);
		return;
	}
	console.log('conexion exitosa a DB')
})

module.exports = connection