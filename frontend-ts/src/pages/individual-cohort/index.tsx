import { YoutubeSnippet } from '@/components/youtubeSnippet';
import { PhotoGallery } from './components/PhotoGallery';
import { Stories } from './components/Stories';
import { AsShowcased } from '@/components/AsShowcased';
import { Footer } from '@/components/Footer/footer';

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
