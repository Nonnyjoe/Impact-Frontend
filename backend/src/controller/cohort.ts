import { Request, Response } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { CohortService } from '../service';
import User from '../models/user';

export const createCohort = async (req: Request, res: Response) => {
  /*#swagger.tags = ['Cohort']
  #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/createCohortSchema"
                    }  
                }
            }
        }
  #swagger.security = [{
            "bearerAuth": []
    }]
  */
  try {
    await CohortService.createCohort({
      ...req.body,
    });

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort created successfully',
    });
  } catch (err: any) {
    return res.status(err.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Unable to create cohort',
    });
  }
};

export const listCohorts = async (_: Request, res: Response) => {
  /*#swagger.tags = ['Cohort']
   */
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
  /*
  #swagger.tags = ['Cohort']
  */
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
  /*
  #swagger.tags = ['Cohort']
  #swagger.security = [{
    "bearerAuth": []
  }]
  */
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
};

export const deleteCohort = async (req: Request, res: Response) => {
  /*
  #swagger.tags=['Cohort']
  #swagger.security = [{
            "bearerAuth": []
  }] 
  */
  try {
    const { cohortId } = req.params;

    const deletedCohort = await CohortService.deleteCohort(cohortId);

    if (!deleteCohort) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: ResponseCode.FAILURE,
        message: 'Cohort not found',
        data: null,
      });
    }

    return res.status(StatusCode.OK).json({
      status: ResponseCode.SUCCESS,
      message: 'Cohort deleted successfully',
      data: deletedCohort,
    });
  } catch (err: any) {
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }
};

export const getCohortStudents = async (req: Request, res: Response) => {
  /*
  #swagger.tags = ['Cohort']
  */
  try {
    const { cohortId } = req.params;
    // const { cohort, cohortStudents } = await CohortService.getCohortStudents(cohortId);
    const cohort = await CohortService.getCohortById(cohortId);

    if (!cohort) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: !!ResponseCode.FAILURE,
        message: 'Cohort not found',
        data: null,
      });
    }

    const cohortStudents = await User.find({ cohortId: cohortId });

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort fetch successful',
      data: {
        id: cohort.id,
        name: cohort.name,
        alias: cohort.alias,
        isActive: cohort.isActive,
        startDate: cohort.startDate,
        endDate: cohort.endDate,
        createdAt: cohort.createdAt,
        updatedAt: cohort.updatedAt,
        users: [...cohortStudents],
      },
    });
  } catch (err: any) {
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }
};

export const getCohortStudentsById = async (req: Request, res: Response) => {
  /*
  #swagger.tags = ['Cohort']
  */
  try {
    const { cohortId, userId } = req.params;
    // const { cohort, cohortStudents } = await CohortService.getCohortStudents(cohortId);
    const cohort = await CohortService.getCohortById(cohortId);

    if (!cohort) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: !!ResponseCode.FAILURE,
        message: 'Cohort not found',
        data: null,
      });
    }

    const cohortStudent = await User.findById({ userId: userId });

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort fetch successful',
      data: {
        id: cohort.id,
        name: cohort.name,
        alias: cohort.alias,
        isActive: cohort.isActive,
        startDate: cohort.startDate,
        endDate: cohort.endDate,
        createdAt: cohort.createdAt,
        updatedAt: cohort.updatedAt,
        user: [cohortStudent],
      },
    });
  } catch (err: any) {
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }
};
