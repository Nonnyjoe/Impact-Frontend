import Image from 'next/image';
import { QuotesData } from '../../../../utils/usersQuotes';

function CarouselComponent() {
  let quotesData = QuotesData();
  console.log(quotesData);
  return (
    <div className="text-black flex flex-col md:flex-row gap-8 md:gap-10">
      {quotesData.map((data, index) => (
        <div className="p-6 md:p-10 rounded-lg shadow-xl ring-gray-300 border mb-4" key={index}>
          <h2 className="text-2xl font-poppins font-bold mb-3">{data.name}</h2>
          <p className="mb-3 font-poppins text-sm">{data.quote}</p>
          <p className="text-gray-500 font-poppins text-sm">{data.cohort}</p>
        </div>
      ))}
    </div>
  );
}

export function HearFrom() {
  return (
    <div className="relative flex flex-col mt-20 md:mt-[180px] px-4 md:px-10 mb-0">
      <div className="px-4 md:px-[80px] pb-4 md:pb-10 rounded-3xl flex flex-col">
        <p className="text-3xl md:text-6xl mb-4 md:mb-10 font-bold font-poppins">
          <span className="text-black"> Hear from our </span>{' '}
          <span className="text-[#FA1011]">Alumni</span>
        </p>
      </div>
      <div className="px-4 md:px-[80px] pt-[-30px]">
        <CarouselComponent />
      </div>
    </div>
  );
}
