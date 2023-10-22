import { CohortInterface } from '../@types/cohort';
import Cohort from '../models/cohort';
import { ApiError, StatusCode } from '../utils';

const ServerError = (error, projName: string, fnName: string, statusCode: StatusCode) => {
  return new ApiError(projName, error as string, fnName, statusCode);
};

class CohortService {
  async getAllCohort() {
    try {
      const cohorts = await Cohort.find();
      return cohorts;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'getAllUsers',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getCohortById(cohortId: string) {
    try {
      const cohort = await Cohort.findById(cohortId);
      return cohort;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'getCohortById',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async createCohort(cohortData: CohortInterface) {
    try {
      const cohort = new Cohort(cohortData);
      await cohort.save();
      return cohort;
    } catch (error) {
      throw ServerError(error, 'impact API', 'createCohort', StatusCode.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new CohortService();
