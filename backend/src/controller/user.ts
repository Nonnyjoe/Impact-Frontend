import { Request, Response } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { Toolbox, sendEmail } from '../utils';
import { env } from '../config';
import { PreboardService, UserService } from '../service';

const { createToken } = Toolbox;
const { FRONTEND_URL } = env;

export async function onboardUser(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const preboarder = await PreboardService.getOnboarder(email);

    if (!preboarder) {
      return res.status(StatusCode.BAD_REQUEST).json({
        status: !!ResponseCode.SUCCESS,
        message: 'You are not onboarded. Please onboard first.',
      });
    }

    if (preboarder.hasOnboarded) {
      return res.status(StatusCode.OK).json({
        status: !!ResponseCode.SUCCESS,
        message: 'Email already onboarded',
      });
    }
    const token = createToken({ email }, '48h');
    const link = `${FRONTEND_URL}/verify?token=${token}`;
    const message = `Hello ${email}, please click on the link below to get onboarded: ${link}`;
    await sendEmail(email, 'Verify your account', message);
    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Verification link sent successfully. Check your email',
      data: null,
    });
  } catch (error: any) {
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
      data: null,
    });
  }
}

export async function createUser(req: Request, res: Response) {
  try {
    await UserService.createUser({
      ...req.body,
      hasOnboarded: true,
    });

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'User created successfully',
      data: null,
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
    });
  }
}
