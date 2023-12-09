import React, { useEffect, useState } from 'react';
import YoutubeSnippet from '@/components/youtubeSnippet';
import Footer from '@/components/Footer/footer';
import { buildApiUrl } from '@/lib/data/appConfig';
import Students, { alumniData } from '../../components/Alumni/Alumni';

const Alumni = () => {
  const [selectedCohort, setSelectedCohort] = useState('');
  const [availability, setAvailability] = useState('');
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
    <div className="">
      <div className="w-9/12 mx-auto text-rxlg font-bold font-poppins px-4 py-12">
        Meet our Alumni
      </div>
      <div className="flex flex-col gap-24 bg-white">
        <div className="flex px-4 py-2 gap-8 w-9/12 mx-auto">
          <div className="">
            <select
              value={selectedCohort}
              name="cohort"
              onChange={(e) => setSelectedCohort(e.target.value)}
              className="mt-2 py-4 px-4 pe-9 block bg-slate-200 border-gray-200 rounded-lg text-sm focus:border-w3b-red disabled:opacity-50 disabled:pointer-events-none"
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
              className="mt-2 py-4 px-4 pe-9 block bg-slate-200 border-gray-200 rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none"
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
        <Footer />
      </div>
    </div>
  );
};

export default Alumni;
