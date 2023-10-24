'use client'; // This is a client component 👈🏽
import Image from 'next/image';
import { useState } from 'react';
import React from 'react';

export function PhotoGallery() {
  //Dummy data
  const [photoGalleryData, setPhotoGalleryData] = useState([
    {
      id: 1,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 2,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 3,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 4,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 5,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 6,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 7,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 8,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 9,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 10,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 11,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 12,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 13,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 14,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 15,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 16,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 17,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 18,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 19,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
    {
      id: 20,
      image: '/Images/IMG11.png',
      name: 'Chinwe Okonkwo',
      alt: 'Team Member',
      text: 'Proficient in Rust, Solidity...',
    },
  ]);

  const renderedPhotoGallery = photoGalleryData.map((item) => {
    return (
      <div key={item.id} class="md:rounded-3xl sm:mt-5 md:mt-10 ring-gray-300 md:w-full lg:w-full">
        <img src={item.image} alt={item.alt} class="w-full h-auto md:h-full" />
        <div className="flex flex-col items-center  md:items-start">
          <p class="text text-black font-poppins mt-2 text-lg">{item.name}</p>
          <p class="text text-w3b-red font-poppins text-sm">{item.text}</p>{' '}
        </div>
      </div>
    );
  });

  return (
    <div class="flex justify-center items-center flex-col">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-10 mt-0 mb-10 md:mb-20 md:mt-3 px-8 md:px-[110px]">
        {renderedPhotoGallery}
      </div>
      <button class="mt-10 md:mt-[80px] border text-w3b-red border-w3b-red bg-white px-6 py-3 rounded-xl hover:bg-w3b-red hover:text-white transition duration-300 ease-in-out">
        See Next Cohort...
      </button>
    </div>
  );
}
