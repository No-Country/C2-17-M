"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const conceptoEgresoController_1 = require("../controllers/conceptoEgresoController");
class ConceptoEgresosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', conceptoEgresoController_1.conceptoEgresosController.todos);
    }
}
const conceptoEgresosRoutes = new ConceptoEgresosRoutes();
exports.default = conceptoEgresosRoutes.router;
