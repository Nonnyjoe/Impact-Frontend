import React, { useState } from 'react';
import YoutubeSnippet from '@/components/youtubeSnippet';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import { buildApiUrl } from '../data/appConfig';
import Students from './components/Alumni';

interface alumniRole {
  super: boolean;
  admin: boolean;
  user: boolean;
  student: boolean;
}

interface alumniData {
  _id: string;
  username: string;
  email: string;
  country: string;
  cohortId: string;
  isActive: boolean;
  role: alumniRole;
}

interface alumniDataProps {
  alumniDataArray: alumniData[];
}

const Alumni = ({ alumniDataArray }: alumniDataProps) => {
  const [selectedCohort, setSelectedCohort] = useState('');

  console.log(alumniDataArray);

  const filteredData = selectedCohort
    ? alumniDataArray.filter((student) => student.cohortId === selectedCohort)
    : alumniDataArray;

  return (
    <div>
      <h1>Alumni</h1>
      <div className="flex flex-col gap-24 bg-white">
        <div className="justify-end">
          <select
            value={selectedCohort}
            onChange={(e) => setSelectedCohort(e.target.value)}
            className="w-1/4 py-3 px-4 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            <option value="">All cohorts</option>
            {alumniDataArray.map((student) => (
              <option key={student.cohortId} value={student.cohortId}>
                Cohort {student.cohortId}
              </option>
            ))}
          </select>
        </div>

        <Students alumniDataArray={filteredData} />
        <YoutubeSnippet />
        <AsShowcased />
        <Footer />
      </div>
    </div>
  );
};

export default Alumni;

export async function getStaticProps() {
  const apiUrl = buildApiUrl('/user');
  const res = await fetch(apiUrl);
  const alumniData = await res.json();
  const alumniDataArray = alumniData.data.users;

  return { props: { alumniDataArray } };
}
