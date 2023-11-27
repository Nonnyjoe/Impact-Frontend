import React from 'react';
import { buildApiUrl } from '../data/appConfig';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer/footer';
import YoutubeSnippet from '@/components/youtubeSnippet';
import LayoutWrapper from '@/components/LayoutWrapper';
import AlumniDetails from './components/AlumniDetails';

interface studentRole {
  super: boolean;
  admin: boolean;
  user: boolean;
  student: boolean;
}

interface studentData {
  id: string;
  username: string;
  email: string;
  country: string;
  cohortId: string;
  isActive: boolean;
  story: string;
  role: studentRole;
}

interface studentDataProps {
  studentDataObj: studentData;
}

const Student = ({studentDataObj}: studentDataProps) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  console.log(studentDataObj);
  return (
    <div>
      <h1>AlumniDetails</h1>
      {id}

      <div className="flex flex-col bg-white">
        <LayoutWrapper>
          <AlumniDetails studentDataObj={studentDataObj}/>
        </LayoutWrapper>
        <YoutubeSnippet />
        <Footer />
      </div>
    </div>
  );
};

export default Student;

export async function getStaticPaths() {
  const apiUrl = buildApiUrl('/user');
  const res = await fetch(apiUrl);
  const usersData = await res.json();
  const users = usersData.data.users;

  // Generate an array of paths based on the list of users
  const paths = users.map((user: any) => ({
    params: { id: user.id.toString() },
  }));

  // Return the paths
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  console.log(id);
  const apiUrl = buildApiUrl(`/user/${id}`);
  const res = await fetch(apiUrl);
  const studentData = await res.json();
  const studentDataObj = studentData.data;

  return { props: { studentDataObj } };
}
