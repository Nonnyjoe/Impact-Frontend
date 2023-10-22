import User from '../models/user';
import { env, logger } from '../config';

const { SUPER_ADMIN_EMAIL, SUPER_ADMIN_PASSWORD, SUPER_ADMIN_USERNAME } = env;

export const seedSuperAdmin = async () => {
  try {
    const user = (await User.findOne({ email: SUPER_ADMIN_EMAIL })) as keyof typeof User;

    if (user) {
      logger('seedSuperAdmin', 'Super admin already exists');
      return;
    }
    const superAdmin = {
      email: SUPER_ADMIN_EMAIL,
      password: SUPER_ADMIN_PASSWORD,
      username: SUPER_ADMIN_USERNAME,
      role: 'superAdmin',
      isActivated: true,
    };

    await new User(superAdmin).save();

    logger('seedSuperAdmin', 'Super admin seeded successfully :)');
  } catch (err) {
    logger('seedSuperAdmin', 'Error seeding database :(');
  }
};
