import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons/Icons';
import React from 'react';

interface studentRole {
  super: boolean;
  admin: boolean;
  user: boolean;
  student: boolean;
}

interface studentData {
  id: string;
  username: string;
  email: string;
  country: string;
  cohortId: string;
  isActive: boolean;
  story: string;
  role: studentRole;
}

interface studentDataProps {
  studentDataObj: studentData;
}

const AlumniDetails = ({ studentDataObj }: studentDataProps) => {
  console.log(studentDataObj);
  return (
    <>
      <div className="flex justify-center items-center flex-col max-w-md md:max-w-xl p-6">
        <img
          src={studentDataObj.image ?? 'https://source.unsplash.com/200x200/?portrait?2'}
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-full md:rounded-3xl sm:h-96 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {studentDataObj.firstname} {studentDataObj.lastname}
            </h2>
            <h2 className="text-xl font-semibold sm:text-2xl">{studentDataObj.email}</h2>
            <h2 className="text-xl font-semibold sm:text-2xl">
              {studentDataObj.city}, {studentDataObj.state}, {studentDataObj.country}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-400">{studentDataObj.about}</p>
            <div className="flex justify-center items-center gap-5">
              <a target="_blank" href={studentDataObj.socialLinks.twitter}>
                <TwitterIcon />
              </a>
              <a target="_blank" href={studentDataObj.socialLinks.linkedin}>
                <LinkedInIcon />
              </a>
              <a target="_blank" href={studentDataObj.socialLinks.github}>
                <GithubIcon />
              </a>
            </div>
          </div>
          <p>{studentDataObj.story}</p>
        </div>
      </div>
    </>
  );
};

export default AlumniDetails;
