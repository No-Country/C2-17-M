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
exports.branchController = void 0;
const database_1 = __importDefault(require("../database"));
class BranchController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const branches = yield database_1.default.query('CALL getAllBranches()');
            return res.json(branches[0]);
        });
    }
    userBranch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            const branches = yield database_1.default.query('CALL userxbranch(?)', [id]);
            if (branches.length > 1) {
                return res.json(branches[0]);
            }
            res.status(400).json({ text: 'Usuario sin permisos en todas las sucursales' });
        });
    }
    ingresosTodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const ingresos = yield database_1.default.query('CALL ingresosTodos()');
            alert('ahhhhhhhhhhh');
            if (ingresos.length > 1) {
                return res.json(ingresos[0]);
            }
            res.status(400).json({ text: 'Sin Ingresos' });
        });
    }
}
exports.branchController = new BranchController();
