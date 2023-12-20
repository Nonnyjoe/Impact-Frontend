import { Request, Response } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { CohortService } from '../service';

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

    const cohortWithStudents = await Promise.all(
      cohorts.map(async (eachCohort) => {
        const { cohort, cohortStudents } = await CohortService.getCohortStudents(eachCohort.id);
        return {
          ...cohort?.toObject(),
          students: cohortStudents.length,
        };
      })
    );

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Cohort fetch successful',
      // data: cohorts,
      data: cohortWithStudents,
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
        status: !!ResponseCode.FAILURE,
        message: 'Cohort not found',
        data: null,
      });
    }

    return res.status(StatusCode.NO_CONTENT).json({
      status: !!ResponseCode.SUCCESS,
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
