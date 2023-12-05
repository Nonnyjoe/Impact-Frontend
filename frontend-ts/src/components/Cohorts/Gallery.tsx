'use client';

 // This is a client component 👈🏽
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Img from '@/assets/Images/img1.png';
import tm1 from '@/assets/Images/TeamMember-1(1).png';
import tm2 from '@/assets/Images/TeamMember-1.png';
import tm3 from '@/assets/Images/TeamMember2(1).png';

interface IGalleryData {
  id: string;
  name: string;
  alias: number;
}

interface galleryDataProps {
  galleryDataArray: IGalleryData[];
}

export default function Gallery({ galleryDataArray }: galleryDataProps) {
  // dummy data
  const [galleryData, ] = useState([
    {
      id: 1,
      image: Img,
      alt: 'Team Member',
    },
    {
      id: 2,
      image: tm1,
      alt: 'Team Member',
    },
    {
      id: 3,
      image: tm2,
      alt: 'Team Member',
    },
    {
      id: 4,
      image: tm3,
      alt: 'Team Member',
    },
    {
      id: 5,
      image: Img,
      alt: 'Team Member',
    },
    {
      id: 6,
      image: tm1,
      alt: 'Team Member',
    },
    {
      id: 7,
      image: tm2,
      alt: 'Team Member',
    },
    {
      id: 8,
      image: tm3,
      alt: 'Team Member',
    },
  ]);

  const renderedGallery = galleryData.map((item) => (
      <div
        key={item.id}
        className="rounded-3xl shadow-xl ring-gray-300 sm:w-3/4 md:w-full lg:w-full"
      >
        <Link href="/individual-cohort">
          <Image src={item.image} alt={item.alt} className="w-full h-auto md:h-full" />
        </Link>
      </div>
    ));

  const renderedGalleryData = galleryDataArray.map((data) => (
    <div key={data.id} className="rounded-3xl shadow-xl ring-gray-300 sm:w-3/4 md:w-full lg:w-full">
      <Link
        href={`/individual-cohort/${encodeURIComponent(data.id)
          .toLowerCase()
          .split('%20')
          .join('-')}`}
      >
        {/* <Image src={data.image} alt={data.alt} className="w-full h-auto md:h-full" /> */}
        <div>{data.name}</div>
      </Link>
    </div>
  ));

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-10 mt-0 md:mt-3 px-8 md:px-[110px]">
        {renderedGallery}
        {renderedGalleryData}
      </div>
    </div>
  );
}
