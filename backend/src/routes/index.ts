import { Router } from 'express';
import user from './user';
import { AuthenticationsMiddleware } from '../middleware';

const { authenticate } = AuthenticationsMiddleware;
const router = Router();

router.use('/user', user);

export default router;
