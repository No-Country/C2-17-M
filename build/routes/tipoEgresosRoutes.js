"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoEgresosController_1 = require("../controllers/tipoEgresosController");
class TipoEgresosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tipoEgresosController_1.tipoEgresosController.todos);
    }
}
const tipoEgresosRoutes = new TipoEgresosRoutes();
exports.default = tipoEgresosRoutes.router;
