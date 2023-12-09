import { GithubIcon, LinkedInIcon, TwitterIcon } from '@/components/Icons/Icons';
import React from 'react';
import Image from 'next/image';

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

const AlumniDetails = ({ studentDataObj }: studentDataProps) => (
  <div className="w-9/12 h-screen mx-auto p-6 mt-24">
    <div className="flex justify-between items-start gap-12">
      <div className="w-3/12 px-5 pt-5 bg-slate-100 rounded-3xl">
        <Image
          src={studentDataObj?.image}
          alt=""
          width={400}
          height={400}
          className="w-full object-cover rounded-full md:rounded-lg aspect-square bg-slate-300"
        />
        <div className="flex justify-start items-center gap-6 py-4">
          <a
            title="twitter_link"
            target="_blank"
            href={`https://twitter.com/${studentDataObj?.socialLinks?.twitter}`}
          >
            <TwitterIcon fontsize="32px" />
          </a>
          <a
            title="linkedin_link"
            target="_blank"
            href={`https://linkedin.com/in/${studentDataObj?.socialLinks?.linkedin}`}
          >
            <LinkedInIcon fontsize="32px" />
          </a>
          <a
            title="github_link"
            target="_blank"
            href={`https://github.com/${studentDataObj?.socialLinks?.github}`}
          >
            <GithubIcon fontsize="32px" />
          </a>
        </div>
      </div>

      <div className=" flex-1 space-y-4 pb-16">
        <div className="my-2 space-y-8">
          <h2 className="text-8xl">
            <div className="text-neutral-200 text-3xl">About</div>
            <span className="font-bold">{studentDataObj?.firstname}</span>{' '}
            {studentDataObj?.lastname}
          </h2>
          <h2 className="text-4xl"> {studentDataObj?.email}</h2>
        </div>
        <h2 className="text-2xl py-6">
          {studentDataObj?.city}, {studentDataObj?.state}, {studentDataObj?.country}
        </h2>
        {studentDataObj?.availabilityStatus ? (
          <>
            {/* <hr className="mb-4 border-1 border-gray-500 dark:border-neutral-40 w-full" /> */}
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-black text-white">
              <span className="w-1.5 h-1.5 inline-block rounded-full bg-green-800 dark:bg-green-500"></span>
              Available for work
            </span>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
    <div>
      <p className="text-base sm:text-lg text-justify dark:text-gray-400">
        {studentDataObj?.about}
      </p>
    </div>
  </div>
);

export default AlumniDetails;
