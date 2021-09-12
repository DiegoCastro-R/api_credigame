"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var controllers_1 = require("../controllers");
var UserRouter = (0, express_1.Router)();
UserRouter.post('/register', controllers_1.UserController.createNewUser);
UserRouter.post('/auth', controllers_1.UserController.authenticateUser);
exports.default = UserRouter;
