import { Router } from 'express'
import { start } from "../start/router/start.router.js";
import { controller, middleware } from '../config/sawgger/swagger.config.js';

const router = Router()

//use /api/nameOfFeature as standard for the endpoints

router.use('/', start);
router.use('/docs', middleware, controller);


export default router
