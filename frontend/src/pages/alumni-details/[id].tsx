import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer/footer';
import YoutubeSnippet from '@/components/youtubeSnippet';
import { buildApiUrl } from '@/lib/data/appConfig';
import AlumniDetails, { studentData } from '../../components/AlumniDetails';

const Student = () => {
  const [studentDataObj, setStudentDataObj] = useState<studentData>({} as studentData);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;
    async function fetchData() {
      const apiUrl = buildApiUrl(`/user/${id}`);
      const res = await fetch(apiUrl);
      const stuData = await res.json();
      return stuData.data;
    }
    fetchData().then((data) => setStudentDataObj(data));
  }, [id]);

  console.log(id);

  console.log(studentDataObj);
  return (
    <div>
      <div className="flex flex-col bg-white">
        <AlumniDetails studentDataObj={studentDataObj} />
        {/* <LayoutWrapper></LayoutWrapper> */}
        <YoutubeSnippet />
        <Footer />
      </div>
    </div>
  );
};

export default Student;
