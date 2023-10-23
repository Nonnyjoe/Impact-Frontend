import { CohortInterface } from '../@types';
import Cohort from '../models/cohort';
import { ApiError, StatusCode } from '../utils';

const ServerError = (error: any, projName: string, fnName: string, statusCode: StatusCode) => {
  return new ApiError(projName, error as string, fnName, statusCode);
}; // lets move this in to the ApiError file and export it from there then import it here.

class CohortService {
  async getAllCohort() {
    try {
      const cohorts = await Cohort.find();
      return cohorts;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'getAllCohort',
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

  // cohort details should be updatable
}

export default new CohortService();
