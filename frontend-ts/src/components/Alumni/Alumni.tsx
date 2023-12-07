import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Pagination from './Pagination';

interface alumniRole {
  super: boolean;
  admin: boolean;
  user: boolean;
  student: boolean;
}

export interface alumniData {
  id: string;
  username: string;
  email: string;
  country: string;
  cohortId: string;
  isActive: boolean;
  role: alumniRole;
  availabilityStatus: string;
  image: string;
  firstname: string;
  lastname: string;
}

interface alumniDataProps {
  alumniDataArray: alumniData[];
}
const Students = ({ alumniDataArray }: alumniDataProps) => {
  console.log(alumniDataArray);

  const renderedAlumniGallery = alumniDataArray.map(
    (item) =>
      item.role.student ||
      (item.role.user && (
        <div
          key={item.id}
          // className="md:rounded-3xl sm:mt-5 md:mt-10 ring-gray-300 md:w-full lg:w-full bg-w3b-red"
          className="hover:bg-w3b-light-red rounded-md hover:transition-colors"
        >
          <Link
            href={`/alumni-details/${encodeURIComponent(item.id)
              .toLowerCase()
              .split('%20')
              .join('-')}`}
            className="flex flex-col w-full h-full p-2"
          >
            <Image
              src={item.image}
              width={150}
              height={50}
              alt="Image Description"
              // className="w-full h-auto md:h-full rounded-md"
              className="flex-1 w-full h-full object-cover rounded-md"
            />
            <div className="flex flex-col items-center md:items-start">
              <p className="text text-black font-poppins mt-2 text-lg">
                {item.firstname} {item.lastname}
              </p>
              <p className="text text-w3b-red font-poppins text-sm">{item.email}</p>{' '}
            </div>
          </Link>
        </div>
      ))
  );

  return (
    <>
      <div className="flex justify-center items-center flex-col w-9/12 mx-auto">
        {alumniDataArray.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-4">
            {renderedAlumniGallery}
          </div>
        ) : (
          <div className="flex items-center justify-center w-full h-full lg:h-[400px] text-center font-bold text-5xl text-w3b-gray">
            No alumni yet
          </div>
        )}
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-12 mt-0 mb-10 md:mb-20 md:mt-3 px-8 md:px-[110px] bg-w3b-light-green">
          {renderedAlumniGallery}
        </div> */}
      </div>
      {alumniDataArray.length > 0 && <Pagination />}
    </>
  );
};

export default Students;
