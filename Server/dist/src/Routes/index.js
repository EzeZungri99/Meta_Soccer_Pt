"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getMatchRouter_1 = __importDefault(require("./getMatchRouter"));
const getStatsRouter_1 = __importDefault(require("./getStatsRouter"));
const router = (0, express_1.Router)();
router.use(getMatchRouter_1.default);
router.use(getStatsRouter_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map