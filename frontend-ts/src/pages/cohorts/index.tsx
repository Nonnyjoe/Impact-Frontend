import { Stories } from './components/Stories';
import { Goal } from './components/Goals';
import { Gallery } from './components/Gallery';
import YoutubeSnippet from '@/components/youtubeSnippet';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';

const CohortStories = () => {
  return (
    <div className="flex flex-col gap-24 bg-white">
      <Stories />
      <Gallery />
      <Goal />
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default CohortStories;
