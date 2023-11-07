import Image from 'next/image';
import React from 'react';
import CM1 from '@/assets/Images/IMG11.png';
import Link from 'next/link';
import Pagination from './Pagination';

interface alumniRole {
  super: boolean;
  admin: boolean;
  user: boolean;
  student: boolean;
}

interface alumniData {
  _id: string;
  username: string;
  email: string;
  country: string;
  cohortId: string;
  isActive: boolean;
  role: alumniRole;
}

interface alumniDataProps {
  alumniDataArray: alumniData[];
}
const Students = ({ alumniDataArray }: alumniDataProps) => {
  const renderedAlumniGallery = alumniDataArray.map((item) => {
    return (
      item.role.student && (
        <div
          key={item._id}
          className="md:rounded-3xl sm:mt-5 md:mt-10 ring-gray-300 md:w-full lg:w-full"
        >
          <Link
            href={`/alumni-details/${encodeURIComponent(item._id)
              .toLowerCase()
              .split('%20')
              .join('-')}`}
          >
            <Image src={CM1} alt="Image Description" className="w-full h-auto md:h-full" />
            <div className="flex flex-col items-center  md:items-start">
              <p className="text text-black font-poppins mt-2 text-lg">{item.username}</p>
              <p className="text text-w3b-red font-poppins text-sm">{item.email}</p>{' '}
            </div>
          </Link>
        </div>
      )
    );
  });

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-12 mt-0 mb-10 md:mb-20 md:mt-3 px-8 md:px-[110px]">
          {renderedAlumniGallery}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default Students;
