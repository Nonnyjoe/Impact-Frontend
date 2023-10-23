import { Router } from 'express';
import { onboardUser, createUser, getOTP, logIn } from '../controller/user';
import { UserMiddleware } from '../middleware/';

const { inspectUserOnboarding, inspectCreateUser } = UserMiddleware;

const router = Router();

router.post('/logout');
router.post('/refresh');

export default router;
