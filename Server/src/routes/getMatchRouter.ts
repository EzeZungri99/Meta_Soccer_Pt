import { Router, Request, Response } from "express";
import getMatchController from "../handler/getMatchController";


const getMatchRouter = Router();

getMatchRouter.get('/match', getMatchController);

export default getMatchRouter;
