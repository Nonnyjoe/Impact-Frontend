import { Footer } from '../../components/Footer/footer';
import { YoutubeSnippet } from '../../components/youtubeSnippet';
import { AsShowcased } from '../../components/AsShowcased';
import { HearFromOthers } from './components/hearFromOthers';

const Stories = () => {
  return (
    <div className="flex flex-col bg-white">
      <HearFromOthers />
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default Stories;
