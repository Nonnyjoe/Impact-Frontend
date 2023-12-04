import React, { useState } from 'react';
import YoutubeSnippet from '@/components/youtubeSnippet';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import { buildApiUrl } from '@/lib/data/appConfig';
import Students, {alumniData} from '../../components/Alumni/Alumni';

interface alumniDataProps {
  alumniDataArray: alumniData[];
}

const Alumni = ({ alumniDataArray }: alumniDataProps) => {
  const [selectedCohort, setSelectedCohort] = useState('');
  const [availability, setAvailability] = useState('');

  const filteredData = selectedCohort
    ? alumniDataArray.filter((student) => student.cohortId === selectedCohort)
    : alumniDataArray;
  const uniqueCohortId = new Set();

  const uniqueCohortArray = filteredData.filter(
    (obj) => !uniqueCohortId.has(obj.cohortId) && uniqueCohortId.add(obj.cohortId)
  );

  const availabilityData = filteredData
    ? alumniDataArray.filter((student) => student.availabilityStatus === 'available')
    : alumniDataArray;
  const uniqueJobStatus = new Set();
  const uniqueJobArray = availabilityData.filter(
    (obj) =>
      !uniqueJobStatus.has(obj.availabilityStatus) && uniqueJobStatus.add(obj.availabilityStatus)
  );

  return (
    <div>
      <div className="flex flex-col gap-24 bg-white">
        <div className="flex">
          <div className="">
            <select
              value={selectedCohort}
              name="cohort"
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
              name="cohort"
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

export async function getServerSideProps() {
  const apiUrl = buildApiUrl('/user?requestStatus=approved');
  const res = await fetch(apiUrl);
  const aluData = await res.json();
  const alumniDataArray = aluData.data.users;

  return { props: { alumniDataArray } };
}
