import React from 'react';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer/footer';
import YoutubeSnippet from '@/components/youtubeSnippet';
import LayoutWrapper from '@/components/LayoutWrapper';
import { buildApiUrl } from '@/lib/data/appConfig';
import AlumniDetails, { studentData } from '../../components/AlumniDetails';

interface studentDataProps {
  studentDataObj: studentData;
}

const Student = ({ studentDataObj }: studentDataProps) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  console.log(studentDataObj);
  return (
    <div>
      <div className="flex flex-col bg-white">
        <LayoutWrapper>
          <AlumniDetails studentDataObj={studentDataObj} />
        </LayoutWrapper>
        <YoutubeSnippet />
        <Footer />
      </div>
    </div>
  );
};

export default Student;

// export async function getStaticPaths() {
//   const apiUrl = buildApiUrl('/user');
//   const res = await fetch(apiUrl);
//   const usersData = await res.json();
//   const { users } = usersData.data;
//
//   // Generate an array of paths based on the list of users
//   const paths = users.map((user: any) => ({
//     params: { id: user.id.toString() },
//   }));
//
//   // Return the paths
//   return { paths, fallback: false };
// }

export async function getServerSideProps({ params }: any) {
  const { id } = params;
  console.log(id);
  const apiUrl = buildApiUrl(`/user/${id}`);
  const res = await fetch(apiUrl);
  const stuData = await res.json();
  const studentDataObj = stuData.data;

  return { props: { studentDataObj } };
}
