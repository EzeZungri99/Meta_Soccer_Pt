import fs from 'fs';
import { Request, Response } from 'express';
import path from 'path'
import { formatLineup } from '../helpers/formatLineUp';
import { Match, Lineup, Player, TeamInfo, Comment, Performances, PerformanceArray } from '../endpoints/getMatch/getMatchType'

export type formatedPlayer = Pick<Player, "role" | "condition" | "name" | "lastName">
export type formatedLineup = {
  dorsal: number,
  player: formatedPlayer
}



const getMatchController = (req: Request, res: Response) => {
  try {
    const infoData: string = fs.readFileSync(path.resolve(__dirname, 'getMatch.json'), 'utf-8')
    const jsonData: Match = JSON.parse(infoData)

    const lineupL: Lineup[] = jsonData.leftLineup
    const lineupR: Lineup[] = jsonData.rightLineup

   

    const myres = formatLineup(lineupL)
    res.status(200).json(myres);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    res.status(500).send({ message: 'Error en getMatchController' });
  }
};


export default getMatchController;