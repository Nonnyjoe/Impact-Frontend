import { Footer } from '../../components/Footer/footer';
import { YoutubeSnippet } from '../../components/youtubeSnippet';
import { AsShowcased } from '../../components/AsShowcased';
import { Stories } from './components/stories';
import { Goal } from './components/goals';
import { Gallery } from './components/gallery';

const CohortStories = () => {
  return (
    <div className="flex flex-col bg-white">
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
