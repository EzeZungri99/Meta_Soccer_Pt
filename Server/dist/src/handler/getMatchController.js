"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const getMatchController = (req, res) => {
    try {
        const infoData = fs_1.default.readFileSync(path_1.default.resolve(__dirname, 'getMatch.json'), 'utf-8');
        const jsonData = JSON.parse(infoData);
        const lineupL = jsonData.leftLineup;
        const lineupR = jsonData.rightLineup;
        const formatLineup = (lineup) => {
            if (!lineup.length) {
                throw Error("La lista esta vacia!");
            }
            const formatedLineup = [];
            for (let element of lineup) {
                let formatedPlayer = {
                    role: element.player.name,
                    condition: element.player.condition,
                    name: element.player.name,
                    lastName: element.player.lastName
                };
                let elementLineup = {
                    dorsal: element.dorsal,
                    player: formatedPlayer
                };
                formatedLineup.push(elementLineup);
            }
            return formatedLineup;
        };
        const myres = formatLineup(lineupL);
        res.status(200).json(myres);
    }
    catch (error) {
        console.error('Error al leer el archivo:', error);
        res.status(500).send({ message: 'Error en getMatchController' });
    }
};
exports.default = getMatchController;
//# sourceMappingURL=getMatchController.js.map