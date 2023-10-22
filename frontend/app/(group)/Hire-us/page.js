import { Footer } from '../../components/Footer/footer';
import { YoutubeSnippet } from '../../components/youtubeSnippet';
import { AsShowcased } from '../../components/AsShowcased';
import { Hireus } from './components/hireUs';

const HireUs = () => {
  return (
    <div className="flex flex-col bg-white">
      <Hireus />
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default HireUs;
