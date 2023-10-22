import { Request, Response, NextFunction } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { Toolbox } from '../utils';
import { userValidations } from '../validations';

const UserMiddleware = {
  async inspectUser(req: Request, res: Response, next: NextFunction) {
    try {
      await userValidations.validate(req.body);
      next();
    } catch (error) {
      return;
    }
  },
};

export default UserMiddleware;
