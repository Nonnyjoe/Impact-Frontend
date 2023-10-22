import { Router } from 'express';
import { onboardUser } from '../controller/user';
import { UserMiddleware } from '../middleware/';

const { inspectUserOnboarding } = UserMiddleware;

const router = Router();

router.post('/create');
router.post('/onboard', [inspectUserOnboarding], onboardUser);

export default router;
