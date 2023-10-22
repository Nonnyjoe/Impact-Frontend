import { Request, Response } from 'express';
import { ResponseCode, StatusCode } from '../@types';
import { Toolbox, sendEmail } from '../utils';
import { env } from '../config';
import PreboardService from '../service/preboard';

const { createToken } = Toolbox;
const { FRONTEND_URL } = env;

export async function onboardUser(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const preboarder = await PreboardService.getOnboarder(email);

    console.log(preboarder, '<<<<preboarder>>>>');

    if (!preboarder) {
      return res.status(StatusCode.NO_CONTENT).json({
        status: !!ResponseCode.SUCCESS,
        message: 'Email not found',
        data: null,
      });
    }

    if (preboarder.hasOnboarded) {
      return res.status(StatusCode.OK).json({
        status: !!ResponseCode.SUCCESS,
        message: 'Email already onboarded',
        data: null,
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
    console.log(error);
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
      data: null,
    });
  }
}
