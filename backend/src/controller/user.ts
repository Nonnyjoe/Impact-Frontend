import { Request, Response } from 'express';
import { ResponseCode, StatusCode, UserInterface } from '../@types';
import { Toolbox, sendEmail } from '../utils';
import { env } from '../config';
import { PreboardService, UserService } from '../service';
import { customAlphabet } from 'nanoid';
import { numbers } from 'nanoid-dictionary';

const nanoid = customAlphabet(numbers, 6);
const { createToken } = Toolbox;
const { FRONTEND_URL, NODE_ENV } = env;

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
      data: NODE_ENV === 'development' ? { link } : null,
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
    const user = await UserService.createUser({
      ...req.body,
    });

    // update preboarder
    await PreboardService.updateOnboarder(user.email as string, { hasOnboarded: true });

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'User created successfully',
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
    });
  }
}

export async function logIn(req: Request, res: Response) {
  try {
    const { email, otp } = req.body;

    if (!otp)
      return res.status(StatusCode.BAD_REQUEST).json({
        status: !!ResponseCode.FAILURE,
        message: 'Please enter OTP',
      });

    const user = (await UserService.getUserByEmail(email)) as unknown as UserInterface;

    const preboarder = await PreboardService.getOnboarder(email);

    console.log(preboarder);

    // to do
    // an admin do not need to be preboarded

    if (!preboarder || !preboarder.hasOnboarded)
      return res.status(StatusCode.BAD_REQUEST).json({
        status: !!ResponseCode.SUCCESS,
        message: 'You are not onboarded yet. Please onboard first.',
      });
    const token = createToken({ email }, '48h');

    user.otp = undefined;
    user.token = token;
    await user.save();

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'Logged in successfully',
      data: {
        token,
        user,
      },
    });
  } catch (error: any) {
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
    });
  }
}

export async function getOTP(req: Request, res: Response) {
  try {
    const { email } = req.body;

    const user = await UserService.getUserByEmail(email as string);

    console.log(user);

    if (!user) {
      return res.status(StatusCode.BAD_REQUEST).json({
        status: !!ResponseCode.FAILURE,
        message: 'User not found',
      });
    }

    const otp = nanoid();

    const message = `Hello ${email}, your OTP is ${otp}`;

    await sendEmail(email as string, 'Your otp is here', message);

    await UserService.updateUser(user._id.toString(), { otp: Number(otp) });

    setTimeout(async () => {
      await UserService.updateUser(user._id.toString(), { otp: undefined });
    }, 300000);

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'OTP sent successfully',
      data: {
        otp,
        expiresIn: '5 minutes',
      },
    });
  } catch (error: any) {
    console.log(error);
    return res.status(error.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: error.message || 'Something went wrong',
    });
  }
}
