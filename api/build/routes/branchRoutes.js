"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const branchController_1 = require("../controllers/branchController");
class BranchRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', branchController_1.branchController.list);
        this.router.get('/:id', branchController_1.branchController.userBranch);
        this.router.get('/ingresos', branchController_1.branchController.ingresosTodos);
    }
}
const usersRoutes = new BranchRoutes();
exports.default = usersRoutes.router;
