import { Router, Request, Response } from "express";
import getStatsController from "../handler/getStatsController";

const getStatsRouter = Router();

getStatsRouter.get('/stats', getStatsController);


export default getStatsRouter;
