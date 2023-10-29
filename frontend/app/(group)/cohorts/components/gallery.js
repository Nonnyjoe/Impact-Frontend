'use client'; // This is a client component 👈🏽
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export function Gallery() {
  //dummy data
  const [galleryData, setGalleryData] = useState([
    {
      id: 1,
      image: '/Images/img1.png',
      alt: 'Team Member',
    },
    {
      id: 2,
      image: '/Images/TeamMember-1(1).png',
      alt: 'Team Member',
    },
    {
      id: 3,
      image: '/Images/TeamMember-1.png',
      alt: 'Team Member',
    },
    {
      id: 4,
      image: '/Images/TeamMember2(1).png',
      alt: 'Team Member',
    },
    {
      id: 5,
      image: '/Images/img1.png',
      alt: 'Team Member',
    },
    {
      id: 6,
      image: '/Images/IMG.png',
      alt: 'Team Member',
    },
    {
      id: 7,
      image: '/Images/TeamMember-1.png',
      alt: 'Team Member',
    },
    {
      id: 8,
      image: '/Images/TeamMember-1(1).png',
      alt: 'Team Member',
    },
  ]);

  const renderedGallery = galleryData.map((item) => {
    return (
      <div
        key={item.id}
        className="rounded-3xl shadow-xl ring-gray-300 sm:w-3/4 md:w-full lg:w-full"
      >
        <Link href="/individual-cohort">
          <img src={item.image} alt={item.alt} className="w-full h-auto md:h-full" />
        </Link>
      </div>
    );
  });

  return (
    <div class="flex justify-center items-center mb-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-10 mt-0 md:mt-3 px-8 md:px-[110px]">
        {renderedGallery}
      </div>
    </div>
  );
}
