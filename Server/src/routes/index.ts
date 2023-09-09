import {Router} from 'express'
import getMatchRouter from './getMatchRouter'
import getStatsRouter from './getStatsRouter'


const router = Router();

router.use( getMatchRouter);
router.use( getStatsRouter);


export default router;
