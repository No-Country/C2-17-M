"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const egresosController_1 = require("../controllers/egresosController");
class EgresosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', egresosController_1.egresosController.todos);
        this.router.post('/fecha', egresosController_1.egresosController.egresosxFecha);
        this.router.post('/concepto', egresosController_1.egresosController.egresosxConcepto);
    }
}
const egresosRoutes = new EgresosRoutes();
exports.default = egresosRoutes.router;
