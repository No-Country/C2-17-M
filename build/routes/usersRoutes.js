"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.list);
        this.router.get('/:id', userController_1.userController.getOne);
        this.router.post('/', userController_1.userController.create);
        this.router.delete('/:id', userController_1.userController.delete);
        this.router.put('/:id', userController_1.userController.update);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
