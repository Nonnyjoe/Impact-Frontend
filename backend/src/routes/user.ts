import { Router } from 'express';
import {
  listUsers,
  getUser,
  updateUser,
  deleteUser,
  uploadImage,
  approveOnboarders,
  uploadStudents,
} from '../controller/user';
import { UserMiddleware, AuthenticationsMiddleware, UploadsMiddleware } from '../middleware';

const router = Router();
const { inspectUpdateUser, inspectOnboardingRequest } = UserMiddleware;
const { authorize } = AuthenticationsMiddleware;

router.post('/logout');
router.post('/refresh');
router.get('/', listUsers);
router.put('/:userId/upload', UploadsMiddleware.single('image'), uploadImage);
router.post(
  '/student-upload',
  [authorize(['super', 'admin'])],
  UploadsMiddleware.single('csvFile'),
  uploadStudents
);
router.get('/:userId', getUser);
router.put('/:userId', [inspectUpdateUser], updateUser);
router.delete('/:userId', [authorize(['super', 'admin'])], deleteUser);
router.patch(
  '/:userId',
  [authorize(['super', 'admin']), inspectOnboardingRequest],
  approveOnboarders
);

export default router;
