import { Router } from 'express';
import { createCohort, getCohort, listCohorts } from '../controller';
import { UserMiddleware, AuthenticationsMiddleware } from '../middleware';

const { onlyAdmin } = UserMiddleware;
const { authorize } = AuthenticationsMiddleware;

const router = Router();

router.post('/cohort/new', authorize(['admin']), createCohort); // use the authorize middleware in authentication. It takes in the roles as a parameter. Also we can do with just /cohort without the /new.
router.get('/cohorts', listCohorts);
router.get('/cohort/:cohortId', getCohort);
// router.get('/cohort/:cohortId/students', getCohortStudents);

export default router;
