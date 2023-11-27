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
  id: string;
  username: string;
  email: string;
  country: string;
  cohortId: string;
  isActive: boolean;
  role: alumniRole;
  availabilityStatus: string;
}

interface alumniDataProps {
  alumniDataArray: alumniData[];
}

const Alumni = ({ alumniDataArray }: alumniDataProps) => {
  const [selectedCohort, setSelectedCohort] = useState('');
  const [availability, setAvailability] = useState('');

  let filteredData = selectedCohort
    ? alumniDataArray.filter((student) => student.cohortId === selectedCohort)
    : alumniDataArray;
    let uniqueCohortId = new Set();
    let uniqueCohortArray = filteredData.filter(obj => !uniqueCohortId.has(obj.cohortId) && uniqueCohortId.add(obj.cohortId));

  const availabilityData = filteredData
    ? alumniDataArray.filter((student) => student.availabilityStatus === "available")
    : alumniDataArray;
    let uniqueJobStatus = new Set();
    let uniqueJobArray = availabilityData.filter(obj => !uniqueJobStatus.has(obj.availabilityStatus) && uniqueJobStatus.add(obj.availabilityStatus));

  return (
    <div>
      <div className="flex flex-col gap-24 bg-white">
        <div className='flex'>
        <div className="">
          <select
            value={selectedCohort}
            name='cohort'
            onChange={(e) => setSelectedCohort(e.target.value)}
            className="mt-2 py-4 px-4 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            <option value="">All cohorts</option>
            {uniqueCohortArray.map((student) => (
              <option key={student?.cohortId} value={student?.cohortId}>
                Cohort {student?.cohortId}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <select
            value={availability}
            name='cohort'
            onChange={(e) => setAvailability(e.target.value)}
            className="mt-2 py-4 px-4 pe-9 block border-gray-200 rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          >
            <option value="">Job Status</option>
            {uniqueJobArray.map((student) => (
              <option key={student.availabilityStatus} value={student.availabilityStatus}>
               {student.availabilityStatus}
              </option>
            ))}
          </select>
        </div>
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
