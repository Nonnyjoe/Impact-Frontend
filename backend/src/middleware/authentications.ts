import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { ResponseCode } from '../@types';
import { ApiError, StatusCode, Toolbox } from '../utils';

const Authentications = {
  async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const authToken = req.headers.authorization;
      if (!authToken)
        throw new ApiError(
          'Authentications',
          'Not authorized',
          'authenticate',
          StatusCode.UNAUTHORIZED
        );
      const tokenString = authToken.split('Bearer')[1].trim();
      if (!tokenString)
        throw new ApiError(
          'Authentications',
          'No token in header',
          'authenticate',
          StatusCode.UNAUTHORIZED
        );
      const decoded: any = jwt.verify(tokenString, process.env.JWT_SECRET as string);
      const user = await User.findById(decoded?.id).exec();

      if (!decoded || !user)
        throw new ApiError(
          'Authentications',
          'Invalid token',
          'authenticate',
          StatusCode.UNAUTHORIZED
        );
      res.locals.user = user;
      next();
    } catch (error: any) {
      return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
        status: !!ResponseCode.FAILURE,
        message: error.message,
        data: null,
      });
    }
  },
};

export default Authentications;
