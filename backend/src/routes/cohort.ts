import { Router } from 'express';
import { createCohort, getCohort, listCohorts } from '../controller';
import { UserMiddleware } from '../middleware';

const { onlyAdmin } = UserMiddleware;

const router = Router();

router.post('/cohort/new', [onlyAdmin], createCohort);
router.get('/cohorts', listCohorts);
router.get('/cohort/:cohortId', getCohort);
// router.get('/cohort/:cohortId/students', getCohortStudents);

export default router;
