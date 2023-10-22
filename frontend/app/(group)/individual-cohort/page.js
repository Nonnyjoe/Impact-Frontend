import { Footer } from '../../components/Footer/footer';
import { YoutubeSnippet } from '../../components/youtubeSnippet';
import { AsShowcased } from '../../components/AsShowcased';
import { PhotoGallery } from './components/photo-gallery';
import { Stories } from './components/stories';

const CohortStories = () => {
  return (
    <div className="flex flex-col bg-white">
      <Stories />
      <PhotoGallery />
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default CohortStories;
