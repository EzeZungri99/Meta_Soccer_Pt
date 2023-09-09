import { Router, Request, Response } from "express";


const getMatchRouter = Router();

getMatchRouter.get('/match', (req: Request, res: Response) => {
    res.send("Estoy en la ruta para obtener todos los partidos");
  });

export default getMatchRouter;
