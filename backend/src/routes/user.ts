import { Router } from 'express';
import { listUsers, getUser, updateUser, deleteUser, listPendingUsers } from '../controller/user';
import { UserMiddleware } from '../middleware/';

const { inspectUserOnboarding, inspectCreateUser } = UserMiddleware;

const router = Router();

router.post('/logout');
router.post('/refresh');
router.get('/', listUsers);
router.get('/pending', listPendingUsers);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;
