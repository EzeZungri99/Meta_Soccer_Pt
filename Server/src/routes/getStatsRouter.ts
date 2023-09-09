import { Router, Request, Response } from "express";


const getStatsRouter = Router();

getStatsRouter.get('/stats', (req: Request, res: Response) => {
    res.send("nombre de la funcion que debo llamar get stats");
  });



export default getStatsRouter;
