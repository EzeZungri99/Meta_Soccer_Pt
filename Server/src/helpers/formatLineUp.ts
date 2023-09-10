import { Lineup } from "../endpoints/getMatch/getMatchType"
import { PlayerCards, formatedLineup, formatedPlayer } from "../handler/getMatchController"

export const formatLineup = (lineup: Lineup[], perfomancesArray: number[], playerCards: PlayerCards[]): formatedLineup[] => {
  if (!lineup.length) {
    throw Error("La lista esta vacia!")
  }
  const formatedLineup: formatedLineup[] = []

  for (let i = 0; i < lineup.length; i++) {
    let formatedPlayer: formatedPlayer = {
      role: lineup[i].player.role,
      condition: lineup[i].player.condition,
      name: lineup[i].player.name,
      lastName: lineup[i].player.lastName
    }
    let elementLineup: formatedLineup = {
      dorsal: lineup[i].dorsal,
      player: formatedPlayer,
      performance: perfomancesArray[i]
    }
    let cards = playerCards.filter((element) => element.id !== lineup[i].id)
    if (cards.length) {
      elementLineup['cards'] = cards[0]
    }
    formatedLineup.push(elementLineup)
  }
  return formatedLineup
}
