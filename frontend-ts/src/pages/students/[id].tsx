import Footer from '@/components/Footer/footer';
import YoutubeSnippet from '@/components/youtubeSnippet';
import {useRouter} from 'next/router';
import LayoutWrapper from '@/components/LayoutWrapper';
import Stories from '../../components/Students/Stories';

const IndividualStudent = () => {
  const router = useRouter();
  // const {id} = router.query;
  // const apiUrl = buildApiUrl(`cohorts/${id}/students/${id}`);

  return (
    <div className="flex flex-col bg-white">
      <p>Post: {router.query.id}</p>
      <LayoutWrapper>
        <Stories />
      </LayoutWrapper>
      <YoutubeSnippet />
      <Footer />
    </div>
  );
};

export default IndividualStudent;
