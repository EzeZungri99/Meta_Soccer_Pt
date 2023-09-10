import { Lineup } from "../endpoints/getMatch/getMatchType"
import { formatedLineup, formatedPlayer } from "../handler/getMatchController"

export const formatLineup = (lineup: Lineup[]): formatedLineup[] => {
    if (!lineup.length) {
      throw Error("La lista esta vacia!")
    }
    const formatedLineup: formatedLineup[] = []

    for (let element of lineup) {
      let formatedPlayer: formatedPlayer = {
        role: element.player.name,
        condition: element.player.condition,
        name: element.player.name,
        lastName: element.player.lastName
      }
      let elementLineup: formatedLineup = {
        dorsal: element.dorsal,
        player: formatedPlayer
      }
      formatedLineup.push(elementLineup)
    }
    return formatedLineup
  }

