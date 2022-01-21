import mysql from 'promise-mysql';

import dotenv from 'dotenv';
dotenv.config()

const pool =mysql.createPool({
		host     : process.env.HOST_SQL,
        user     : process.env.USER_SQL,
        password : process.env.PASS_SQL,
        database : process.env.DB_SQL});

pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('DB its connected');
    });

export default pool;

