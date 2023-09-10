"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardsPlayer = void 0;
const getCardsPlayer = (arrayPlayer) => {
    if (!arrayPlayer.length || typeof arrayPlayer === "string") {
        throw Error("Tienes que ingresar una lista de jugadores");
    }
    const PlayerCards = [];
    for (let element of arrayPlayer) {
        if (element.yellowCards || element.redCards) {
            let player = {
                id: element.playerId,
                redCards: element.redCards,
                yellowCards: element.yellowCards
            };
            PlayerCards.push(player);
        }
    }
    return PlayerCards;
};
exports.getCardsPlayer = getCardsPlayer;
//# sourceMappingURL=getCardsPlayer.js.map