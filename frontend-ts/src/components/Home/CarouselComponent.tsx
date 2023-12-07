import quotesData from '@/utils/usersQuotes';
import { useEffect, useState } from 'react';
import { alumniData } from '../../components/Alumni/Alumni';
import { buildApiUrl } from '@/lib/data/appConfig';

export default function CarouselComponent() {
  const [alumniDataArray, setAlumniData] = useState<alumniData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = buildApiUrl('/user?requestStatus=approved');
      const res = await fetch(apiUrl);
      const aluData = await res.json();
      return aluData.data.users;
    }
    fetchData().then((data) => setAlumniData(data));
  }, []);

  return (
    <div className="text-black flex gap-8 md:gap-10 w-max">
      {alumniDataArray.map((data, index) => (
        <div className="w-[448px] p-12 rounded-lg shadow-card grid gap-8 " key={index}>
          <h4 className="text-3xl font-poppins font-bold">
            {data.firstname} {data.lastname}
          </h4>
          <p className="mb-3 font-poppins text-2xl">{data.about}</p>
          <p className="text-gray-500 font-poppins text-xl">{data.cohortId}</p>
        </div>
      ))}
    </div>
  );
}
