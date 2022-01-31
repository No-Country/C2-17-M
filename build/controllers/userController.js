"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const database_1 = __importDefault(require("../database"));
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield database_1.default.query('call  getAllUsers()');
            console.log('no pasa nada o si');
            return res.json(list[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = yield database_1.default.query('CALL getUser(?)', [id]);
            if (user.length > 1) {
                return res.json(user[0]);
            }
            res.status(400).json({ text: 'Usuario inexistente' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, name, mail, status } = req.body;
            const list = yield database_1.default.query('CALL  getAllUsers()');
            function finder(us) { return us.mail === mail; }
            let isReal = list[0].filter(finder);
            if (!isReal[0]) {
                let passwordHash = yield bcryptjs.hash(password, 5);
                let id = Math.random().toString(36).slice(2);
                const query = `CALL createUser(?, ?, ?, ?, ?);`;
                const created = yield database_1.default.query(query, [id, name, passwordHash, mail, status]);
                res.status(201).json(created);
            }
            else {
                res.status(400).json('The mail is already used');
            }
        });
    }
    auth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password, mail } = req.body;
            const userEmail = yield database_1.default.query(`SELECT * FROM users WHERE mail= ?`, [mail]);
            if (!userEmail) {
                return res.status(401).send({ message: "The mail is not registered" });
            }
            const validate = yield bcryptjs.compare(password, userEmail[0].password);
            if (!validate) {
                res.status(400).json('The password is incorrect');
            }
            const jwtToken = jwt.sign({
                id: userEmail.id_user,
                email: userEmail.mail
            }, "secret", { expiresIn: "1d" });
            if (userEmail.status === "admin")
                return res.send({ token: jwtToken, message: "on", admin: "on" });
            return res.send({ token: jwtToken, message: "on" });
        });
    }
    delete(req, res) {
        res.json({ text: 'Eliminando Usuario ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'Actualizando Usuarios' });
    }
}
exports.userController = new UserController();
