"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conceptoIngresoController_1 = require("../controllers/conceptoIngresoController");
class ConceptoIngresosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', conceptoIngresoController_1.conceptoIngresosController.todos);
    }
}
const conceptoIngresosRoutes = new ConceptoIngresosRoutes();
exports.default = conceptoIngresosRoutes.router;
