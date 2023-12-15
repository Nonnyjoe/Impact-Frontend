import User from './user';
import Onboard from './preboard';
import { env, logger } from '../config';
import { admins, onboarders, superAdmin, users } from '../service';

const { SUPER_ADMIN_EMAIL } = env;

export const seedOnboarders = async () => {
  try {
    await Onboard.deleteMany({});

    await Onboard.insertMany(onboarders);
    // await Onboard.insertMany(admins);

    logger('seedOnboarders', 'onboarders seeded successfully :)');
  } catch (err) {
    console.log(err); // leave this for debugging
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
    console.log(err); // leave this for debugging
    logger('seedSuperAdmin', 'Error seeding superAdmin :(');
  }
};

export const seedAdmins = async () => {
  try {
    const allAdmins = [...admins, superAdmin];
    // Onboard admins by default
    await Onboard.deleteMany({});
    const adminsEmailList = allAdmins.map((adminEmail) => ({
      email: adminEmail.email,
      cohortId: adminEmail.cohortId,
      isBlacklisted: false,
      hasOnboarded: true,
    }));
    if (adminsEmailList.length > 0) await Onboard.insertMany(adminsEmailList);

    await User.deleteMany({});
    await User.insertMany(admins);
  } catch (err) {
    console.log(err);
    logger('seedAdmins', 'Error seeding admins :(');
  }
};

export const seedUsers = async () => {
  try {
    await User.deleteMany({});

    await User.insertMany(users);

    logger('seedUsers', 'Users seeded successfully :)');
  } catch (err) {
    console.log(err); // leave this for debugging
    logger('seedUsers', 'Error seeding users :(');
  }
};
