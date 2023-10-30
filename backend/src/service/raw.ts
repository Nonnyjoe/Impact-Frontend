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
    email: 'samsonajulor@gmail.com',
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

function setApprovalStatus(i: number) {
  if (i < 3) {
    return 'approved';
  } else if (i < 9) {
    return 'rejected';
  } else if (i < 15) {
    return 'expired';
  } else if (i < 21) {
    return 'pending';
  } else if (i < 27) {
    return 'approved';
  } else if (i < 33) {
    return 'rejected';
  } else if (i < 39) {
    return 'pending';
  } else if (i < 45) {
    return 'expired';
  } else if (i < 51) {
    return 'approved';
  } else if (i < 57) {
    return 'rejected';
  } else if (i < 63) {
    return 'pending';
  } else if (i < 69) {
    return 'expired';
  } else if (i < 75) {
    return 'approved';
  } else if (i < 81) {
    return 'rejected';
  } else if (i < 87) {
    return 'pending';
  } else if (i < 93) {
    return 'expired';
  } else if (i < 99) {
    return 'approved';
  } else {
    return 'rejected';
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
    requestStatus: setApprovalStatus(i),
    isActive: true,
    cohortId: getCohort(i),
  });
}

export const users = [...students];
