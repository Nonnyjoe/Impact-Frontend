import { Router } from 'express';
import user from './user';
import cohort from './cohort';
import { AuthenticationsMiddleware } from '../middleware';

const { authenticate } = AuthenticationsMiddleware;
const router = Router();

router.use('/user', user);
router.use('/', cohort);

export default router;
