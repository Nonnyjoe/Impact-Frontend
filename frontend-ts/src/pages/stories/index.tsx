import { AsShowcased } from '@/components/AsShowcased';
import { Footer } from '@/components/Footer/footer';
import { YoutubeSnippet } from '@/components/youtubeSnippet';
import MainStories from './components/MainStories';

const Stories = () => {
  return (
    <div className="flex flex-col bg-white">
      <MainStories />
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default Stories;
