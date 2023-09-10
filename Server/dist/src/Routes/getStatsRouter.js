"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getStatsController_1 = __importDefault(require("../handler/getStatsController"));
const getStatsRouter = (0, express_1.Router)();
getStatsRouter.get('/stats', getStatsController_1.default);
exports.default = getStatsRouter;
//# sourceMappingURL=getStatsRouter.js.map