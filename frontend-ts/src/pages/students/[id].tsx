import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import YoutubeSnippet from '@/components/youtubeSnippet';
import { useRouter } from 'next/router';
import { buildApiUrl } from '../data/appConfig';

const IndividualStudent = () => {
  const router = useRouter();
  const { id } = router.query;

  // const apiUrl = buildApiUrl(`/cohorts/${id}/students/${id}`);

  return (
    <div className="flex flex-col bg-white">
      <p>Post: {router.query.id}</p>
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default IndividualStudent;
