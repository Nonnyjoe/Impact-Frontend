import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons/Icons';
import React from 'react';
import Image from "next/image";

interface studentRole {
  super: boolean;
  admin: boolean;
  user: boolean;
  student: boolean;
}

export interface studentData {
  id: string;
  username: string;
  email: string;
  country: string;
  cohortId: string;
  isActive: boolean;
  story: string;
  role: studentRole;
  image: string;
  firstname: string;
  lastname: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };

  availabilityStatus: string;
  about: string;
  state: string;
  city: string;
}

interface studentDataProps {
  studentDataObj: studentData;
}

const AlumniDetails = ({ studentDataObj }: studentDataProps) => {
  console.log(studentDataObj);
  return (
    <>
      <div className="flex justify-between items-center max-w-4xl p-6 gap-12">
        <div className="flex-1">
          <Image
            src={studentDataObj?.image ?? 'https://source.unsplash.com/200x200/?portrait?2'}
            alt=""
            className="w-full object-cover rounded-full md:rounded-3xl aspect-square"
          />
          <div className="flex justify-between items-center gap-3 py-4 px-12">
            <a target="_blank" href={`https://twitter.com/${studentDataObj?.socialLinks?.twitter}`}>
              <TwitterIcon fontsize="32px" />
            </a>
            <a
              target="_blank"
              href={`https://linkedin.com/in/${studentDataObj?.socialLinks?.linkedin}`}
            >
              <LinkedInIcon fontsize="32px" />
            </a>
            <a target="_blank" href={`https://github.com/${studentDataObj?.socialLinks?.github}`}>
              <GithubIcon fontsize="32px" />
            </a>
          </div>
        </div>

        <div className=" flex-1 space-y-4 divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold">
              <b className="font-bold">Name:</b> {studentDataObj?.firstname}{' '}
              {studentDataObj?.lastname}
            </h2>
            <h2 className="text-xl font-semibold">
              {' '}
              <b className="font-bold">Name:</b> s{studentDataObj?.email}
            </h2>
            <h2 className="text-xl font-semibold">
              <b className="font-bold">Name:</b> {studentDataObj?.city}, {studentDataObj?.state},{' '}
              {studentDataObj?.country}
            </h2>
            <p className="text-xs sm:text-base dark:text-gray-400">
              {' '}
              <b className="font-bold">Name:</b> {studentDataObj?.about}
            </p>
          </div>
          <p>{studentDataObj?.story}</p>
        </div>
      </div>
    </>
  );
};

export default AlumniDetails;
