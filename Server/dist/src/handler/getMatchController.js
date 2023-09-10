"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const formatLineUp_1 = require("../helpers/formatLineUp");
const getMatchController = (req, res) => {
    try {
        const infoData = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'getMatch.json'), 'utf-8');
        const jsonData = JSON.parse(infoData);
        const lineupL = jsonData.leftLineup;
        const lineupR = jsonData.rightLineup;
        const perfomances = jsonData.performances;
        const myres = (0, formatLineUp_1.formatLineup)(lineupL, perfomances.left.fieldPlayers);
        res.status(200).json(myres);
    }
    catch (error) {
        console.error('Error al leer el archivo:', error);
        res.status(500).send({ message: 'Error en getMatchController' });
    }
};
exports.default = getMatchController;
//# sourceMappingURL=getMatchController.js.map