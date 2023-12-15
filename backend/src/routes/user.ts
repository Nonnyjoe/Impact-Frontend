import { Router } from 'express';
import multer from 'multer';
import {
  listUsers,
  getUser,
  updateUser,
  deleteUser,
  uploadImage,
  approveOnboarders,
  uploadPreboardersList,
  getMe,
} from '../controller/user';
import { UserMiddleware, AuthenticationsMiddleware, UploadsMiddleware } from '../middleware';

const router = Router();
const { inspectUpdateUser, inspectOnboardingRequest } = UserMiddleware;
const { authenticateMe, authorize } = AuthenticationsMiddleware;
const CSVUploader = multer({ dest: 'uploads/' });

router.post('/logout');
router.post('/refresh');
router.get('/', listUsers);
router.get('/me', authenticateMe, getMe);
router.put('/:userId/upload', UploadsMiddleware.single('image'), uploadImage);
router.post(
  '/upload-preboarders',
  // [authorize(['super', 'admin'])],
  CSVUploader.single('csvFile'),
  uploadPreboardersList
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
