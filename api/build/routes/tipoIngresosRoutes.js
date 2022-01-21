"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoIngresosController_1 = require("../controllers/tipoIngresosController");
class IngresosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tipoIngresosController_1.tipoIngresosController.todos);
    }
}
const tipoIngresosRoutes = new IngresosRoutes();
exports.default = tipoIngresosRoutes.router;
