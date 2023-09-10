"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getStatsController = (req, res) => {
    try {
        const infoData = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'getStats.json'), 'utf-8');
        const jsonData = JSON.parse(infoData);
        const formatedStats = {
            left: {
                goals: jsonData.leftTeam.goals,
                assists: jsonData.leftTeam.assists,
                passes: jsonData.leftTeam.passes,
                longPasses: jsonData.leftTeam.longPasses,
                shortPasses: jsonData.leftTeam.shortPasses,
                shots: jsonData.leftTeam.shots,
                shotsOffTarget: jsonData.leftTeam.shotsOffTarget,
                shotsOnTarget: jsonData.leftTeam.shotsOnTarget
            },
            right: {
                goals: jsonData.rightTeam.goals,
                assists: jsonData.rightTeam.assists,
                passes: jsonData.rightTeam.passes,
                longPasses: jsonData.rightTeam.longPasses,
                shortPasses: jsonData.rightTeam.shortPasses,
                shots: jsonData.rightTeam.shots,
                shotsOffTarget: jsonData.rightTeam.shotsOffTarget,
                shotsOnTarget: jsonData.rightTeam.shotsOnTarget
            }
        };
        res.status(200).json(formatedStats);
    }
    catch (error) {
        console.error('Error al leer el archivo:', error);
        res.status(500).send({ message: 'Error en getMatchController' });
    }
};
exports.default = getStatsController;
//# sourceMappingURL=getStatsController.js.map