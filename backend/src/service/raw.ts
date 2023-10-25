import { env } from '../config';
import cohort from '../validations/cohort';

const { SUPER_ADMIN_EMAIL, SUPER_ADMIN_PASSWORD, SUPER_ADMIN_USERNAME } = env;

export const cohortList = [
  'Cohort I',
  'Cohort II',
  'Cohort III',
  'Cohort IV',
  'Cohort V',
  'Cohort VI',
  'Cohort VII',
  'Cohort VIII',
  'Cohort IX',
  'Cohort X',
];

export const onboarders = [
  {
    cohortId: 'Cohort I',
    email: 'samsona@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort II',
    email: 'samuel@gmail.com',
    isBlacklisted: true,
  },
  {
    cohortId: 'Cohort II',
    email: 'samoskydev@gmail.com',
    isBlacklisted: true,
    hasOnboarded: true,
  },
];

export const superAdmin = {
  email: SUPER_ADMIN_EMAIL,
  password: SUPER_ADMIN_PASSWORD,
  username: SUPER_ADMIN_USERNAME,
  role: {
    super: true,
    admin: true,
    user: false,
    student: false,
  },
  requestStatus: 'approved',
  isActive: true,
  cohortId: 'Cohort I',
};
