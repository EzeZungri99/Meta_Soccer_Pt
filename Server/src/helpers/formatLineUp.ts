import { Lineup } from "../endpoints/getMatch/getMatchType"
import { formatedLineup, formatedPlayer } from "../handler/getMatchController"

export const formatLineup = (lineup: Lineup[], perfomancesArray: number[]): formatedLineup[] => {
  if (!lineup.length) {
    throw Error("La lista esta vacia!")
  }
  const formatedLineup: formatedLineup[] = []

  for (let i = 0; i < lineup.length; i++) {
    let formatedPlayer: formatedPlayer = {
      role: lineup[i].player.name,
      condition: lineup[i].player.condition,
      name: lineup[i].player.name,
      lastName: lineup[i].player.lastName
    }
    let elementLineup: formatedLineup = {
      dorsal: lineup[i].dorsal,
      player: formatedPlayer,
      performance: perfomancesArray[i]
    }
    formatedLineup.push(elementLineup)
  }
  return formatedLineup
}

