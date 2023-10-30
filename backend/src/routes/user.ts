import { Router } from 'express';
import { listUsers, getUser, updateUser, deleteUser } from '../controller/user';

const router = Router();

router.post('/logout');
router.post('/refresh');
router.get('/', listUsers);
router.get('/:userId', getUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

export default router;
