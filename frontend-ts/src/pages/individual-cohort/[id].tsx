import YoutubeSnippet from '@/components/youtubeSnippet';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {buildApiUrl} from '@/lib/data/appConfig';
import Stories from '../../components/Individual-Cohort/Stories';
import PhotoGallery from '../../components/Individual-Cohort/PhotoGallery';

interface UserData {
  cohortId: string;
  country: string;
  email: string;
  id: string;
  requestStatus: string;
  username: string;
}

interface cohortDataProps {
  alias: number;
  id: string;
  name: string;
  users: UserData[];
}



const IndividualCohort = () => {
  const router = useRouter();
  const {id} = router.query;
  const [cohortData, setCohortData] = useState<cohortDataProps | null>(null);

  console.log(cohortData);

  useEffect(() => {
    const apiUrl = buildApiUrl(`cohort/${id}/user`);
    let res;
    axios
      .get(apiUrl)
      .then((response) => {
        res = response.data;
        setCohortData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  return (
    <div className="flex flex-col bg-white">
      <>
        <Stories name={cohortData?.name} />
        <Link href={`/students/${id}`}>
          <PhotoGallery cohortData={cohortData} />
        </Link>
        <YoutubeSnippet />
        <AsShowcased />
        <Footer />
      </>
      {/* )} */}
    </div>
  );
};

export default IndividualCohort;
