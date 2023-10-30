import { Request, Response } from 'express';
import { Cohort, ResponseCode, StatusCode, UserInterface, UserQueryType } from '../@types';
import { Toolbox, sendEmail } from '../utils';
import { env } from '../config';
import { PreboardService, UserService } from '../service';
import { customAlphabet } from 'nanoid';
import { numbers } from 'nanoid-dictionary';
import { verify } from '../mailTemplates/verify';

const nanoid = customAlphabet(numbers, 6);
const { createToken } = Toolbox;
const { FRONTEND_URL, NODE_ENV } = env;

export async function onboardUser(req: Request, res: Response) {
  /*
  #swagger.tags = ['Auth']
  */
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
    const link = `${FRONTEND_URL}/api/auth/onboard/${token}`;
    // const message = `Hello ${email}, please click on the link below to get onboarded: ${link}`;
    const message = await verify({ url: link, year: new Date().getFullYear() });
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
  /*
  #swagger.tags = ['Auth']
  #swagger.requestBody = {
            required: true,
            content: {
              "application/json": {
                  schema: {
                      $ref: "#/components/schemas/crateUserSchema"
                  },
                }
            }
        }
  #swagger.security = [{
            "bearerAuth": []
    }]
  */
  try {
    const { email } = req.body;
    const token = createToken({ email }, '48h');
    const link = `${FRONTEND_URL}/verify?token=${token}`;
    const user = await UserService.createUser({
      ...req.body,
    });

    // update preboarder
    await PreboardService.updateOnboarder(user.email as string, { hasOnboarded: true });

    // todo
    // send a welcome mail
    const message = `Welcome ${email}! `;

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
  /*
  #swagger.tags = ['Auth']
  */
  try {
    const { email, otp } = req.body;

    if (!otp)
      return res.status(StatusCode.BAD_REQUEST).json({
        status: !!ResponseCode.FAILURE,
        message: 'Please enter OTP',
      });

    const user = (await UserService.getUserByEmail(email)) as unknown as UserInterface;

    const preboarder = await PreboardService.getOnboarder(email);

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
  /*
  #swagger.tags = ['Auth']
  */
  try {
    const { email } = req.body;

    const user = await UserService.getUserByEmail(email as string);

    if (!user) {
      return res.status(StatusCode.BAD_REQUEST).json({
        status: !!ResponseCode.FAILURE,
        message: 'User not found',
      });
    }

    const otp = nanoid();

    const message = `Hello ${email}, your OTP is ${otp}`;

    await sendEmail(email as string, 'Your otp is here', message); //  todo

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

export const listUsers = async (req: Request, res: Response) => {
  /*
  #swagger.tags = ['User']
  #swagger.security = [{
            "bearerAuth": []
    }] */
  try {
    const users = await UserService.getAllUsers({
      ...req.query,
    } as unknown as UserQueryType);

    let meta = {};

    const totalData = users.length;

    if (totalData > 10) {
      const userCount = await UserService.getUsersCount();

      const remainingData = userCount - totalData;

      const currentlyFetched = Number(req.query.limit) || 10;

      const currentPage = Number(req.query.page) + 1 || 1;

      meta = {
        totalData,
        remainingData,
        currentPage,
        currentlyFetched,
        numberOfPagesLeft: Math.round(remainingData / currentlyFetched) - currentPage,
      };
    }

    const response = {
      code: !!totalData ? 200 : 400,
      status: !!totalData ? !!ResponseCode.SUCCESS : !!ResponseCode.FAILURE,
      message: !!totalData ? 'User fetch successful' : 'No user found',
      data: { meta: req.query.userId ? {} : meta, users },
    };

    const { code, ...rest } = response;

    return res.status(response.code).json(rest);
  } catch (err: any) {
    console.log(err);
    return res.status(err.statusCode || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server error',
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  /*
  #swagger.tags = ['User']
  #swagger.security = [{
            "bearerAuth": []
    }] */
  try {
    const { userId } = req.params;
    const user = await UserService.getUserById(userId);

    if (!user) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: !!ResponseCode.FAILURE,
        message: 'User not found',
        data: null,
      });
    }

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'User fetch successful',
      data: user,
    });
  } catch (err: any) {
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  /*
  #swagger.tags = ['User']
  #swagger.security = [{
            "bearerAuth": []
    }] */
  try {
    const { userId } = req.params;
    const updatedUserData = req.body;

    const updateUser = await UserService.updateUser(userId, updatedUserData);

    if (!updateUser) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: !!ResponseCode.FAILURE,
        message: 'User not found',
        data: null,
      });
    }

    return res.status(StatusCode.OK).json({
      status: !!ResponseCode.SUCCESS,
      message: 'User update successful',
      data: updateUser,
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: !!ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  /*
  #swagger.tags = ['User']
  #swagger.security = [{
            "bearerAuth": []
    }] */
  try {
    const { userId } = req.params;

    const deletedUser = await UserService.deleteUser(userId);

    if (!deleteUser) {
      return res.status(StatusCode.NOT_FOUND).json({
        status: ResponseCode.FAILURE,
        message: 'User not found',
        data: null,
      });
    }

    return res.status(StatusCode.NO_CONTENT).json({
      status: !!ResponseCode.SUCCESS,
      message: 'User deleted successfully',
      data: deletedUser,
    });
  } catch (err: any) {
    console.log(err);
    return res.status(err.status || StatusCode.INTERNAL_SERVER_ERROR).json({
      status: ResponseCode.FAILURE,
      message: err.message || 'Server Error',
    });
  }
};

// export const upload = async (req: Request, res: Response) => {
//   try {

//   } catch (error) {

//   }
// }
