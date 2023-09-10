import fs from 'fs';
import { Request, Response } from 'express';
import path from 'path'
import { Match, Lineup, Player, TeamInfo, Comment, Performances, PerformanceArray } from '../endpoints/getMatch/getMatchType'
import { MatchStats, PlayerStats } from '../endpoints/getStats/getStatsType';
import { getCardsPlayer } from '../helpers/getCardsPlayer';
import { formatLineup } from '../helpers/formatLineUp';

export type formatedPlayer = Pick<Player, "role" | "condition" | "name" | "lastName">
export type dataLineup = Pick<Lineup, 'dorsal'>
export type formatedLineup = {
  dorsal: number,
  player: formatedPlayer,
  performance: number,
  cards?: PlayerCards
}
export type formatedTeam = {
  lineup: formatedLineup[],
  tactic: string,
  teamname: string
}

export interface FormatedMatch {
  left: formatedTeam,
  right: formatedTeam
  score: number[]
}
export interface PlayerCards {
  id: string
  yellowCards: number,
  redCards: number
}


const getMatchController = (req: Request, res: Response) => {
  try {
    const infoData: string = fs.readFileSync(path.resolve(__dirname, 'getMatch.json'), 'utf-8')
    const jsonData: Match = JSON.parse(infoData)
    const statsJson: string = fs.readFileSync(path.resolve(__dirname, 'getStats.json'), 'utf-8')
    const statsData: MatchStats = JSON.parse(statsJson)

    const playerCards: PlayerCards[] = getCardsPlayer(statsData.leftFieldPlayers)


    const lineupL: Lineup[] = jsonData.leftLineup
    const lineupR: Lineup[] = jsonData.rightLineup
    const perfomances: Performances = jsonData.performances
    const formatLineupL = formatLineup(lineupL, perfomances.left.fieldPlayers, playerCards)
    const formatLineupR = formatLineup(lineupR, perfomances.right.fieldPlayers, playerCards)

    const response: FormatedMatch = {
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
    }
    res.status(200).json(response);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    res.status(500).send({ message: 'Error en getMatchController' });
  }
};


export default getMatchController;


