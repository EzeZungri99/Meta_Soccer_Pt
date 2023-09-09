"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getMatchRouter = (0, express_1.Router)();
getMatchRouter.get('/match', (req, res) => {
    res.send("Estoy en la ruta para obtener todos los partidos");
});
exports.default = getMatchRouter;
//# sourceMappingURL=getMatchRouter.js.map