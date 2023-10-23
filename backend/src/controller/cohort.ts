import { Request, Response } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { CohortService } from '../service';

export const createCohort = async (req: Request, res: Response) => {
  try {
    await CohortService.createCohort({
      ...req.body,
    });
    console.log(res);

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort created successfully',
      data: res.json(),
    });
  } catch (err: any) {
    return res.status(err.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Unable to create cohort',
    });
  }
};

export const listCohorts = async (_: Request, res: Response) => {
  try {
    const cohorts = await CohortService.getAllCohort();

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort fetch successful',
      data: cohorts,
    });
  } catch (err: any) {
    return res.status(err.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server error',
    });
  }
};

export const getCohort = async (req: Request, res: Response) => {
  try {
    const { cohortId } = req.params;
    const cohort = await CohortService.getCohortById(cohortId);

    if (!cohort) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: !!ResponseCode.FAILURE,
        message: 'Cohort not found',
        data: null,
      });
    }

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort fetch successful',
      data: cohort,
    });
  } catch (err: any) {
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }
};

export const updateCohort = async (req: Request, res: Response) => {
  try {
    const { cohortId } = req.params;
    const updatedCohortData = req.body; // Assuming the updated cohort data is in the request body

    const updateCohort = await CohortService.updateCohort(cohortId, updatedCohortData);

    if (!updateCohort) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: !!ResponseCode.FAILURE,
        message: 'Cohort not found',
        data: null,
      });
    }

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort update successful',
      data: updateCohort,
    });
  } catch (err: any) {
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }

  // lets add update cohort details.
};
