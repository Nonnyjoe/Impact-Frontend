import User from './user';
import Onboard from './preboard';
import { env, logger } from '../config';
import { onboarders, superAdmin, users } from '../service';

const { SUPER_ADMIN_EMAIL } = env;

export const seedOnboarders = async () => {
  try {
    await Onboard.deleteMany({});

    await Onboard.insertMany(onboarders);

    logger('seedOnboarders', 'onboarders seeded successfully :)');
  } catch (err) {
    logger('seedOnboarders', 'Error seeding database :(');
  }
};

export const seedSuperAdmin = async () => {
  try {
    const user = (await User.findOne({ email: SUPER_ADMIN_EMAIL })) as keyof typeof User;

    if (user) {
      logger('seedSuperAdmin', 'Super admin already exists');
      return;
    }

    await new User(superAdmin).save();

    logger('seedSuperAdmin', 'Super admin seeded successfully :)');
  } catch (err) {
    logger('seedSuperAdmin', 'Error seeding database :(');
  }
};

export const seedUsers = async () => {
  try {
    await User.deleteMany({});

    await User.insertMany(users);

    logger('seedUsers', 'Users seeded successfully :)');
  } catch (err) {
    logger('seedUsers', 'Error seeding database :(');
  }
};
