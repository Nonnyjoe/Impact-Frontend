import { env } from '../config';

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

export const onboarders = [];

export const onboarders2 = [
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+1@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+2@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+3@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+4@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+10@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+5@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+6@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+7@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+8@gmail.com',
    isBlacklisted: false,
  },
  {
    cohortId: 'Cohort I',
    email: 'samsonajulor+9@gmail.com',
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
  {
    cohortId: 'Cohort II',
    email: 'jaydhales@gmail.com',
    isBlacklisted: false,
    hasOnboarded: false,
  },
  {
    cohortId: 'Cohort III',
    email: 'mayowaobi74@gmail.com',
    isBlacklisted: false,
    hasOnboarded: false,
  },
  {
    cohortId: 'Cohort III',
    email: 'mayowaobi74+1@gmail.com',
    isBlacklisted: false,
    hasOnboarded: false,
  },
  {
    cohortId: 'Cohort IV',
    email: 'alongepelumi15@gmail.com',
    isBlacklisted: false,
    hasOnboarded: false,
  },
  {
    cohortId: 'Cohort VIII',
    email: 'idogwuchi@gmail.com',
    isBlacklisted: false,
    hasOnboarded: true,
  },
  {
    cohortId: 'Cohort I',
    email: 'ayodeji@web3bridge.com',
    isBlacklisted: false,
    hasOnboarded: true,
  },
];

export const admins = [
  {
    email: 'idogwuchi@gmail.com',
    password: 'password@123',
    username: 'idogwuchi',
    role: {
      super: false,
      admin: true,
      user: false,
      student: false,
    },
    requestStatus: 'approved',
    isActive: true,
    cohortId: 'Cohort VIII',
  },
  {
    email: 'ayodeji@web3bridge.com',
    password: 'password@123',
    username: 'ayodeji',
    role: {
      super: false,
      admin: true,
      user: false,
      student: false,
    },
    requestStatus: 'approved',
    isActive: true,
    cohortId: 'Cohort I',
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
    return 'pending';
  } else if (i < 21) {
    return 'pending';
  } else if (i < 27) {
    return 'approved';
  } else if (i < 33) {
    return 'rejected';
  } else if (i < 39) {
    return 'pending';
  } else if (i < 45) {
    return 'approved';
  } else if (i < 51) {
    return 'approved';
  } else if (i < 57) {
    return 'rejected';
  } else if (i < 63) {
    return 'pending';
  } else if (i < 69) {
    return 'rejected';
  } else if (i < 75) {
    return 'approved';
  } else if (i < 81) {
    return 'rejected';
  } else if (i < 87) {
    return 'pending';
  } else if (i < 93) {
    return 'pending';
  } else if (i < 99) {
    return 'approved';
  } else {
    return 'rejected';
  }
}

function generateLoremIpsum(wordCount: number, paragraphs: number): string {
  const loremIpsumWords = [
    'Lorem',
    'ipsum',
    'dolor',
    'sit',
    'amet',
    'consectetur',
    'adipiscing',
    'elit',
    'sed',
    'do',
    'eiusmod',
    'tempor',
    'incididunt',
    'ut',
    'labore',
    'et',
    'dolore',
    'magna',
    'aliqua',
    'Ut',
    'enim',
    'ad',
    'minim',
    'veniam',
    'quis',
    'nostrud',
    'exercitation',
    'ullamco',
    'laboris',
    'nisi',
    'ut',
    'aliquip',
    'ex',
    'ea',
    'commodo',
    'consequat',
    'Duis',
    'aute',
    'irure',
    'dolor',
    'in',
    'reprehenderit',
    'in',
    'voluptate',
    'velit',
    'esse',
    'cillum',
    'dolore',
    'eu',
    'fugiat',
    'nulla',
    'pariatur',
    'Excepteur',
    'sint',
    'occaecat',
    'cupidatat',
    'non',
    'proident',
    'sunt',
    'in',
    'culpa',
    'qui',
    'officia',
    'deserunt',
    'mollit',
    'anim',
    'id',
    'est',
    'laborum',
  ];

  const loremIpsum = [];

  for (let p = 0; p < paragraphs; p++) {
    const paragraph = [];
    let currentWordCount = 0;

    while (currentWordCount < wordCount) {
      const word = loremIpsumWords[Math.floor(Math.random() * loremIpsumWords.length)];
      paragraph.push(word);
      currentWordCount += 1;
    }

    loremIpsum.push(paragraph.join(' '));
  }

  return loremIpsum.join('\n\n');
}

for (let i = 0; i < 3; i++) {
  students.push({
    email: `student${i + 1}@gmail.com`,
    password: 'password',
    username: `student${i + 1}`,
    role: {
      super: false,
      admin: false,
      user: i < 2 ? false : true,
      student: true,
    },
    requestStatus: setApprovalStatus(i),
    isActive: true,
    cohortId: getCohort(i),
    story: generateLoremIpsum(250, 3),
    storyHeader: 'How Web3Bridge Impacted me',
  });
}

// export const users = [...students];
export const users = [];
