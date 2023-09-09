"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getStatsRouter = (0, express_1.Router)();
getStatsRouter.get('/stats', (req, res) => {
    res.send("nombre de la funcion que debo llamar get stats");
});
exports.default = getStatsRouter;
//# sourceMappingURL=getStatsRouter.js.map