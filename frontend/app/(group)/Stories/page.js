import { Footer } from '../../components/Footer/footer';
import { YoutubeSnippet } from '../../components/youtubeSnippet';
import { AsShowcased } from '../../components/AsShowcased';

const Stories = () => {
  return (
    <div className="flex flex-col bg-white">
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default Stories;
