import { Request, Response, NextFunction } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { Toolbox } from '../utils';
import { userValidations } from '../validations';

const UserMiddleware = {
  async inspectUserOnboarding(req: Request, res: Response, next: NextFunction) {
    try {
      await userValidations.validateUserOnboarding(req.body);
      next();
    } catch (error: any) {
      console.log(error, 'middleware');
      return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
        status: !!ResponseCode.FAILURE,
        message: error,
        data: null,
      });
    }
  },
};

export default UserMiddleware;
