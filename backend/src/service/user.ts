import User from '../models/user';
import { StatusCode, RegisterType, UpdateUserType, Cohort, UserQueryType } from '../@types';
import { ApiError } from '../utils';
import user from '../models/user';

class UserService {
  async createUser(userData: RegisterType) {
    try {
      const user = new User(userData);
      await user.save();
      return user;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'createUser',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getUserById(userId: string) {
    try {
      // const user = await User.findById(userId).populate('plans').populate('reports');
      const user = await User.findOne({ _id: userId });
      return user;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'getUserById',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = User.findOne({ email });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'getUserByEmail',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getUserByUsername(username: string) {
    try {
      const user = User.findOne({ username });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'getUserByUsername',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  async updateUser(userId: string, userData: UpdateUserType) {
    try {
      const user = await User.findByIdAndUpdate(userId, userData, {
        new: true,
      });
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'updateUser',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  }

  deleteUser = async (userId: string) => {
    try {
      const user = await User.findByIdAndDelete(userId);
      if (!user) throw new Error('User not found');
      return user;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'deleteUser',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  };

  getAllUsers = async (data: UserQueryType) => {
    try {
      const query: any = {};

      if (data.role) {
        query['role.' + data.role] = true;
      }

      if (data.cohortId) {
        query.cohortId = data.cohortId;
      }

      if (data.requestStatus) {
        query.requestStatus = data.requestStatus;
      }

      const users = await User.find(query)
        .limit(data.limit || 10)
        .skip((data.page || 0) * 1 - data.limit);

      return users;
    } catch (error) {
      throw new ApiError(
        'impact api',
        error as string,
        'getAllUsers',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  };

  getAllPendingUserRequest = async () => {
    try {
      const query: any = {};

      // if (requestStatus) {
      //   query.requestStatus = requestStatus;
      // }
      const users = await user.find({ requestStatus: 'PENDING' });
      // .limit(limit || 10)
      // .skip((page || 0) * 1 - limit);
      return users;
    } catch (error) {
      throw new ApiError(
        'impact API',
        error as string,
        'getAllUsersRequest',
        StatusCode.INTERNAL_SERVER_ERROR
      );
    }
  };
}

export default new UserService();
