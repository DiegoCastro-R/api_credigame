'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.config = void 0;
exports.config = {
  secrect: process.env.SECRET || 'dummyAPISecret',
  timeout: 86400000, // 24 Hours
};
