import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request } from 'express';
import { env } from '../config';
import ApiError from './apiError';

const { TEST_SECRET, LIVE_SECRET, NODE_ENV } = env;

/**
 * Function for api tools methods
 * @function Toolbox
 */
const Tools = {
  createToken(payload: string, expiresIn: string | number = '5m'): string {
    const SECRET = NODE_ENV === 'TEST' ? TEST_SECRET : LIVE_SECRET;
    return jwt.sign(payload, SECRET as string, { expiresIn });
  },

  async checkToken(req: Request) {
    const {
      headers: { authorization },
      cookies: { token: cookieToken },
    } = req;
    let apiToken = '',
      bearerToken = '';
    if (authorization) {
      if (authorization.split(' ')[0] === 'Bearer')
        bearerToken = authorization.split(' ')[1] ? authorization.split(' ')[1] : authorization;
    }
    return (
      apiToken ||
      cookieToken ||
      bearerToken ||
      req.headers['x-access-token'] ||
      req.headers.token ||
      req.body.token
    );
  },

  async verifyToken(token: string): Promise<string | JwtPayload> {
    try {
      const SECRET = NODE_ENV === 'TEST' ? (TEST_SECRET as string) : (LIVE_SECRET as string);

      const response = jwt.verify(token, SECRET);
      return response;
    } catch (err) {
      throw new ApiError('toolbox', 'Invalid Token', 'verifyToken');
    }
  },

  generateOTP(): number {
    return Math.floor(100000 + Math.random() * 900000);
  },
};

export default Tools;
