import fs from 'fs';
import { Request, Response } from 'express';
import path from 'path'
import { MatchStats, TeamStats } from '../endpoints/getStats/getStatsType';


type teamStats = Pick<TeamStats, 'goals' | 'shots' | 'shotsOnTarget' | 'shotsOffTarget' |
    'assists' | 'passes' | 'shortPasses' | 'longPasses'>

interface formatedStats {
    left: teamStats,
    right: teamStats
}

const getStatsController = (req: Request, res: Response) => {
    try {

        const infoData: string = fs.readFileSync(path.resolve(__dirname, 'getStats.json'), 'utf-8')
        const jsonData: MatchStats = JSON.parse(infoData)

        const formatedStats: formatedStats = {
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
            right:
            {
                goals: jsonData.rightTeam.goals,
                assists: jsonData.rightTeam.assists,
                passes: jsonData.rightTeam.passes,
                longPasses: jsonData.rightTeam.longPasses,
                shortPasses: jsonData.rightTeam.shortPasses,
                shots: jsonData.rightTeam.shots,
                shotsOffTarget: jsonData.rightTeam.shotsOffTarget,
                shotsOnTarget: jsonData.rightTeam.shotsOnTarget
            }
        }
        res.status(200).json(formatedStats)

    } catch (error) {
        console.error('Error al leer el archivo:', error);
        res.status(500).send({ message: 'Error en getMatchController' });
    }
};


export default getStatsController;