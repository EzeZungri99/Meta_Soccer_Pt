"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLineup = void 0;
const formatLineup = (lineup, perfomancesArray, playerCards) => {
    if (!lineup.length) {
        throw Error("La lista esta vacia!");
    }
    const formatedLineup = [];
    for (let i = 0; i < lineup.length; i++) {
        let formatedPlayer = {
            role: lineup[i].player.role,
            condition: lineup[i].player.condition,
            name: lineup[i].player.name,
            lastName: lineup[i].player.lastName
        };
        let elementLineup = {
            dorsal: lineup[i].dorsal,
            player: formatedPlayer,
            performance: perfomancesArray[i]
        };
        let cards = playerCards.filter((element) => element.id !== lineup[i].id);
        if (cards.length) {
            elementLineup['cards'] = cards[0];
        }
        formatedLineup.push(elementLineup);
    }
    return formatedLineup;
};
exports.formatLineup = formatLineup;
//# sourceMappingURL=formatLineUp.js.map