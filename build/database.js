"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const pool = promise_mysql_1.default.createPool({
    host: process.env.HOST_SQL,
    user: process.env.USER_SQL,
    password: process.env.PASS_SQL,
    database: process.env.DB_SQL
});
pool.getConnection()
    .then(connection => {
    pool.releaseConnection(connection);
    console.log('DB its connected');
});
exports.default = pool;
