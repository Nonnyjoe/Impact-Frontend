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

const students = [];

// switch i for cohort id
function getCohort(i: number): string {
  if (i < 10) {
    return 'Cohort I';
  } else if (i < 20) {
    return 'Cohort II';
  } else if (i < 30) {
    return 'Cohort III';
  } else if (i < 40) {
    return 'Cohort IV';
  } else if (i < 50) {
    return 'Cohort V';
  } else if (i < 60) {
    return 'Cohort VI';
  } else if (i < 70) {
    return 'Cohort VII';
  } else if (i < 80) {
    return 'Cohort VIII';
  } else if (i < 90) {
    return 'Cohort IX';
  } else if (i < 100) {
    return 'Cohort X';
  } else {
    return 'Cohort IX';
  }
}

for (let i = 0; i < 120; i++) {
  students.push({
    email: `student${i + 1}@gmail.com`,
    password: 'password',
    username: `student${i + 1}`,
    role: {
      super: false,
      admin: false,
      user: i < 50 ? false : true,
      student: true,
    },
    requestStatus: 'approved',
    isActive: true,
    cohortId: getCohort(i),
  });
}

export const users = [...students];
