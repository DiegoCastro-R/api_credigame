"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var URL = 'mongodb://54.232.135.110:27017/credigame_db';
mongoose_1.default.connect(URL);
var db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('has been successfully connected');
});
var mongodb = mongoose_1.default;
exports.default = mongodb;
