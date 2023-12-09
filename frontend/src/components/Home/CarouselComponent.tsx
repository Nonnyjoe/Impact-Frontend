import Link from 'next/link';
import { useEffect, useState } from 'react';
import { buildApiUrl } from '@/lib/data/appConfig';
import { alumniData } from '../Alumni/Alumni';

export default function CarouselComponent() {
  const [alumniDataArray, setAlumniData] = useState<alumniData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const apiUrl = buildApiUrl('/user?requestStatus=approved&role=user');
      const res = await fetch(apiUrl);
      const aluData = await res.json();
      return aluData.data.users;
    }
    fetchData().then((data) => setAlumniData(data));
  }, []);

  return (
    <div className="text-black flex gap-8 md:gap-10 w-max">
      {alumniDataArray.map((data, index) => (
        <Link
          href={`/alumni-details/${encodeURIComponent(data.id)
            .toLowerCase()
            .split('%20')
            .join('-')}`}
          key={index}
          className="max-w-[400px] flex flex-col bg-white border shadow-sm rounded-xl"
        >
          <div className="p-4 md:p-10">
            <h3 className="text-lg font-bold text-gray-800">
              {data.firstname} {data.lastname}
            </h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{data?.about}</p>
            <a
              className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              href="#"
            >
              {data.cohortId} alumni
            </a>
          </div>
        </Link>
      ))}
    </div>
  );
}
