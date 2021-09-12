"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var db_1 = __importDefault(require("../configs/db"));
require("moment/locale/pt");
var UsersSchema = new db_1.default.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    createAt: {
        type: String,
        default: (0, moment_1.default)(new Date()).format('L'),
    },
});
var Users = db_1.default.model('users', UsersSchema);
module.exports = Users;
