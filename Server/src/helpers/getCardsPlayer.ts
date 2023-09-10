import { PlayerStats } from "../endpoints/getStats/getStatsType"
import { PlayerCards } from "../handler/getMatchController"


export const getCardsPlayer = (arrayPlayer: PlayerStats[]) => {
    if (!arrayPlayer.length || typeof arrayPlayer === "string") {
      throw Error("Tienes que ingresar una lista de jugadores")
    }
    const PlayerCards: PlayerCards[] = []
  
    for (let element of arrayPlayer) {
      if (element.yellowCards || element.redCards) {
        let player: PlayerCards = {
          id: element.playerId,
          redCards: element.redCards,
          yellowCards: element.yellowCards
        }
        PlayerCards.push(player)
      }
    }
    return PlayerCards
  
  }