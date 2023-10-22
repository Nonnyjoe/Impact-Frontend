import { Router } from 'express';
import { onboardUser, createUser } from '../controller/user';
import { UserMiddleware } from '../middleware/';

const { inspectUserOnboarding, inspectCreateUser } = UserMiddleware;

const router = Router();

router.post('/onboard/:token', [inspectCreateUser], createUser);
router.post('/onboard', [inspectUserOnboarding], onboardUser);

export default router;
