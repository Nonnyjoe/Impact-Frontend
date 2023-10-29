'use client';
import LayoutWrapper from '@/app/components/LayoutWrapper';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';
import { CarouselComponent } from './CarouselComponent';

export function HearFrom() {
  const carouselRef = useRef(null);
  const [disableBtn, setDisableBtn] = useState({
    left: true,
    right: false,
  });

  useEffect(() => {
    const runScroll = () => {
      const maxScroll = carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth;
      const scrollLeft = carouselRef.current?.scrollLeft;
      setDisableBtn(() => ({
        left: scrollLeft === 0,
        right: scrollLeft >= maxScroll - 10,
      }));
    };
    carouselRef.current?.addEventListener('scroll', runScroll);

    return () => carouselRef.current?.removeEventListener('scroll', runScroll);
  }, []);

  return (
    <div className="grid gap-16 relative pb-20">
      <LayoutWrapper>
        <h2 className="text-3xl md:text-6xl font-bold font-poppins">
          <span className="text-black"> Hear from some of our </span>
          <span className="text-w3b-red">Alumni</span>
        </h2>
      </LayoutWrapper>

      <div
        className="overflow-x-auto z-20 w-screen pb-6 xl:px-[calc(50vw-720px)] 3xl:px-[calc(50vw-900px)] no-scrollbar"
        ref={carouselRef}
      >
        <CarouselComponent />

        <div className="flex gap-5 items-center absolute bottom-4">
          <AiOutlineArrowLeft
            className={`w-12 h-12 text-base-opacity ${
              disableBtn.left ? 'text-base-opacity cursor-none' : 'text-w3b-red'
            }`}
            onClick={() => (carouselRef.current.scrollLeft -= 450)}
          />
          <AiOutlineArrowRight
            className={`w-12 h-12 ${
              disableBtn.right ? 'text-base-opacity  cursor-none' : 'text-w3b-red'
            }`}
            onClick={() => (carouselRef.current.scrollLeft += 450)}
          />
        </div>
      </div>
    </div>
  );
}
