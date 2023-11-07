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
  _id: string;
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

const Student = ({ studentDataObj }: studentDataProps) => {
  const router = useRouter();
  const { id } = router.query;

  console.log(studentDataObj);
  return (
    <div>
      <h1>AlumniDetails</h1>
      {id}

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

export async function getStaticPaths() {
  // Fetch the list of all users from your API or data source
  const apiUrl = buildApiUrl('/user');
  const res = await fetch(apiUrl);
  const usersData = await res.json();
  const users = usersData.data.users;

  // Generate an array of paths based on the list of users
  const paths = users.map((user: any) => ({
    params: { id: user._id.toString() },
  }));

  // Return the paths
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const { id } = params;
  const apiUrl = buildApiUrl(`/user/${id}`);
  const res = await fetch(apiUrl);
  const studentData = await res.json();
  const studentDataObj = studentData.data;

  return { props: { studentDataObj } };
}
