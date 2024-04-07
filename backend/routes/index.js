import { Router } from 'express';
import userRouter from './user.js'; // Remove curly braces
import dashRouter from './dashboard.js'; // Remove curly braces

const router = Router();

router.use('/user', userRouter);
router.use('/account', dashRouter);

export default router;
