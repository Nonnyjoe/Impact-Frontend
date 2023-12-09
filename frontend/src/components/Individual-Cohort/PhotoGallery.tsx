'use client';

 // This is a client component 👈🏽
import  { useState } from 'react';

import CM1 from '@/assets/Images/IMG11.png';
import Image from 'next/image';

// interface UserData {
//   cohortId: string;
//   country: string;
//   email: string;
//   id: string;
//   requestStatus: string;
//   username: string;
// }


// interface cohortDataProps {
//   id: string;
//   name: string;
//   alias: number;
//   users: UserData[];
// }



export default function PhotoGallery({ cohortData }: any) {
  // Dummy data
  const [photoGalleryData,] = useState([
    {
      id: 1,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 2,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 3,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 4,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 5,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 6,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 7,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 8,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 9,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 10,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 11,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 12,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 13,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 14,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 15,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 16,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 17,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 18,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 19,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 20,
      image: CM1,
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
  ]);

  const renderedPhotoGallery = photoGalleryData.map((item) => (
      <div
        key={item.id}
        className="md:rounded-3xl sm:mt-5 md:mt-10 ring-gray-300 md:w-full lg:w-full"
      >
        <Image src={item.image} alt={item.alt} className="w-full h-auto md:h-full" />
        <div className="flex flex-col items-center  md:items-start">
          <p className="text text-black font-poppins mt-2 text-lg">{item.name}</p>
          <p className="text text-w3b-red font-poppins text-sm">{item.text}</p>{' '}
        </div>
      </div>
    ));

  const renderedUser = cohortData?.users.map((item: any) => (
      <div
        key={item.id}
        className="md:rounded-3xl sm:mt-5 md:mt-10 ring-gray-300 md:w-full lg:w-full"
      >
        {/* <Image src={item.image} alt={item.alt} className="w-full h-auto md:h-full" /> */}
        <div className="flex flex-col items-center  md:items-start">
          <p className="text text-black font-poppins mt-2 text-lg">{item.username}</p>
          <p className="text text-black font-poppins mt-2 text-lg">{item.email}</p>
          <p className="text text-w3b-red font-poppins text-sm">{item.cohortId}</p>{' '}
          <p className="text text-w3b-red font-poppins text-sm">{item.requestStatus}</p>{' '}
        </div>
      </div>
    ));

  return (
    <>
      <div className="flex justify-center items-center flex-col">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 md:gap-12 mt-0 mb-10 md:mb-20 md:mt-3 px-8 md:px-[110px]">
          {renderedPhotoGallery}
          {renderedUser}
        </div>
        <button className="mt-10 mb-10 md:mt-[80px] border text-w3b-red border-w3b-red bg-white px-6 py-3 rounded-xl hover:bg-w3b-red hover:text-white transition duration-300 ease-in-out">
          See Next Cohort...
        </button>
      </div>
    </>
  );
}
