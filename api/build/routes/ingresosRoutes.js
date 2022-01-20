"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ingresosController_1 = require("../controllers/ingresosController");
class IngresosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', ingresosController_1.ingresosController.todos);
        this.router.post('/', ingresosController_1.ingresosController.ingresosxFecha);
    }
}
const ingresosRoutes = new IngresosRoutes();
exports.default = ingresosRoutes.router;
