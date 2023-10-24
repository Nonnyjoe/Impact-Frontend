import { Router } from 'express';
import { createCohort, deleteCohort, getCohort, listCohorts, updateCohort } from '../controller';
import { AuthenticationsMiddleware, CohortMiddleware } from '../middleware';

const { authorize } = AuthenticationsMiddleware;
const { inspectCreateCohort } = CohortMiddleware;

const router = Router();

router.post('/cohort', [authorize(['superadmin', 'admin']), inspectCreateCohort], createCohort);
router.get('/cohorts', listCohorts);
router.get('/cohort/:cohortId', getCohort);
router.put('/cohort/:cohortId', updateCohort);
router.delete('/cohort/:cohortId', deleteCohort);

export default router;
