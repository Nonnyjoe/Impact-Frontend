import { quotesData } from '../../../../utils/usersQuotes';

export function CarouselComponent() {
  return (
    <div className="text-black flex gap-8 md:gap-10 w-max">
      {quotesData.map((data, index) => (
        <div className="w-[448px] p-12 rounded-lg shadow-card grid gap-8 " key={index}>
          <h4 className="text-3xl font-poppins font-bold">{data.name}</h4>
          <p className="mb-3 font-poppins text-2xl">{data.quote}</p>
          <p className="text-gray-500 font-poppins text-xl">{data.cohort}</p>
        </div>
      ))}
    </div>
  );
}
