"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getCardsPlayer_1 = require("../helpers/getCardsPlayer");
const formatLineUp_1 = require("../helpers/formatLineUp");
const getMatchController = (req, res) => {
    try {
        const infoData = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'getMatch.json'), 'utf-8');
        const jsonData = JSON.parse(infoData);
        const statsJson = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'getStats.json'), 'utf-8');
        const statsData = JSON.parse(statsJson);
        const playerCards = (0, getCardsPlayer_1.getCardsPlayer)(statsData.leftFieldPlayers);
        const lineupL = jsonData.leftLineup;
        const lineupR = jsonData.rightLineup;
        const perfomances = jsonData.performances;
        const formatLineupL = (0, formatLineUp_1.formatLineup)(lineupL, perfomances.left.fieldPlayers, playerCards);
        const formatLineupR = (0, formatLineUp_1.formatLineup)(lineupR, perfomances.right.fieldPlayers, playerCards);
        const response = {
            left: {
                lineup: formatLineupL,
                tactic: jsonData.leftTactic,
                teamname: jsonData.leftTeamInfo.name,
            },
            right: {
                lineup: formatLineupR,
                tactic: jsonData.rightTactic,
                teamname: jsonData.rightTeamInfo.name,
            },
            score: jsonData.score
        };
        res.status(200).json(response);
    }
    catch (error) {
        console.error('Error al leer el archivo:', error);
        res.status(500).send({ message: 'Error en getMatchController' });
    }
};
exports.default = getMatchController;
//# sourceMappingURL=getMatchController.js.map