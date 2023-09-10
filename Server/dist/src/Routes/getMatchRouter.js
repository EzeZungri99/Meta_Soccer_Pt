"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getMatchController_1 = __importDefault(require("../handler/getMatchController"));
const getMatchRouter = (0, express_1.Router)();
getMatchRouter.get('/match', getMatchController_1.default);
exports.default = getMatchRouter;
//# sourceMappingURL=getMatchRouter.js.map