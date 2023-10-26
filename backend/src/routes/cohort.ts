import { Router } from 'express';
import { createCohort, deleteCohort, getCohort, listCohorts, updateCohort } from '../controller';
import { AuthenticationsMiddleware, CohortMiddleware } from '../middleware';

const { authorize } = AuthenticationsMiddleware;
const { inspectCreateCohort } = CohortMiddleware;

const router = Router();

router.delete('/:cohortId', deleteCohort);
router.put('/:cohortId', updateCohort);
router.get('/:cohortId', getCohort);
router.get('', listCohorts);
router.post('', [authorize(['superadmin', 'admin']), inspectCreateCohort], createCohort);

export default router;
