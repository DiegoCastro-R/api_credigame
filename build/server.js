'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var body_parser_1 = require('body-parser');
var index_routes_1 = __importDefault(require('./routes/index.routes'));
require('dotenv-safe').config();
var app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.use(index_routes_1.default);
var port = 4000;
app.get('/', function (req, res) {
  res.send({ success: true, message: 'API Is Online' });
});
app.listen(process.env.PORT || port, function () {
  console.info('Server is Online\n PORT: ' + (process.env.PORT || port));
});
