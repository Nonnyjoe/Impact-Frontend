import { Request, Response, NextFunction } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { CohortService } from '../service';
import { cohortValidations } from '../validations';

const CohortMiddleware = {
  async inspectCreateCohort(req: Request, res: Response, next: NextFunction) {
    try {
      await cohortValidations.validateCreateCohort(req.body);
      const { name } = req.body;

      const cohortByName = await CohortService.getCohortByName(name);

      if (cohortByName) {
        return res.status(StatusCode.BAD_REQUEST).json({
          status: !!ResponseCode.FAILURE,
          message: 'Cohort Name already used',
        });
      }

      next();
    } catch (error: any) {
      return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
        status: !!ResponseCode.FAILURE,
        message: error,
      });
    }
  },
};

export default CohortMiddleware;
