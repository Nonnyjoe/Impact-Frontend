import { Router } from 'express';
import user from './user';
import auth from './auth';
import cohort from './cohort';
import { AuthenticationsMiddleware } from '../middleware';

const { authenticate } = AuthenticationsMiddleware;
const router = Router();

router.use('/user', authenticate, user);
router.use('/auth', auth);
router.use('/', authenticate, cohort);

export default router;
