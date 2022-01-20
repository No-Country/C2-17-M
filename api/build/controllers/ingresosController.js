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
exports.ingresosController = void 0;
const database_1 = __importDefault(require("../database"));
class IngresosController {
    todos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const todos = yield database_1.default.query('call  ingresosTodos()');
            return res.json(todos[0]);
        });
    }
    ingresosxFecha(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, fechaInicio, fechaFin } = req.body;
            //const id = req.params.id;
            // const fechaInicio = req.params.fechaInicio;
            // const fechaFin = req.params.fechaFin;
            console.log(id + '' + fechaInicio);
            const ingresos = yield database_1.default.query('call  ingresosxFecha(?,?,?)', [id, fechaInicio, fechaFin]);
            return res.json(ingresos[0]);
        });
    }
}
exports.ingresosController = new IngresosController();
