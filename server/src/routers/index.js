import { Router } from 'express'
import { start } from "../start/router/start.router.js";
import { userRoutes } from '../users/router/user.router.js';

const router = Router()

//use /api/nameOfFeature as standard for the endpoints

router.use('/', start);
router.use('/api/users', userRoutes);


export default router
