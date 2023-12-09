import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import YoutubeSnippet from '@/components/youtubeSnippet';
import MainStories from '../../components/Stories/MainStories';

const Stories = () => (
  <div className="grid gap-12 lg:gap-24 pt-8">
    <MainStories />
    <YoutubeSnippet />
    <AsShowcased />
    <Footer />
  </div>
);

export default Stories;
