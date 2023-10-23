import { Router } from 'express';
import { createCohort, getCohort, listCohorts, updateCohort } from '../controller';
import { UserMiddleware, AuthenticationsMiddleware } from '../middleware';

const { authorize } = AuthenticationsMiddleware;

const router = Router();

router.post('/cohort', authorize(['admin']), createCohort);
router.get('/cohorts', listCohorts);
router.get('/cohort/:cohortId', getCohort);
router.put('/cohort/:cohortId', updateCohort);

export default router;
