import { Router } from 'express';
import {
  createCohort,
  deleteCohort,
  getCohort,
  getCohortStudents,
  getCohortStudentsById,
  listCohorts,
  updateCohort,
} from '../controller';
import { AuthenticationsMiddleware, CohortMiddleware } from '../middleware';

const { authorize } = AuthenticationsMiddleware;
const { inspectCreateCohort } = CohortMiddleware;

const router = Router();

router.get('/', listCohorts);
router.post('/', [], createCohort);
router.put('/:cohortId', updateCohort);
router.get('/:cohortId', getCohort);
router.get('/:cohortId/user', getCohortStudents);
router.get('/:cohortId/user/:userId', getCohortStudentsById);
router.delete('/:cohortId', deleteCohort);

export default router;
