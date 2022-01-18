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
class UserController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield database_1.default.query('call  getAllUsers()');
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
        console.log(req.body);
        res.json({ text: 'Creando Usuarios' });
    }
    delete(req, res) {
        res.json({ text: 'Eliminando Usuario ' + req.params.id });
    }
    update(req, res) {
        res.json({ text: 'Actualizando Usuarios' });
    }
}
exports.userController = new UserController();
