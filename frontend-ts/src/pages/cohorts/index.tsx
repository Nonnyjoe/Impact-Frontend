import { Stories } from './components/Stories';
import { Goal } from './components/Goals';
import { Gallery } from './components/Gallery';
import YoutubeSnippet from '@/components/youtubeSnippet';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import { buildApiUrl } from '../data/appConfig';

interface galleryData {
  id: string;
  name: string;
  alias: number;
}

interface galleryDataProps {
  galleryDataArray: galleryData[];
}

export default function Index({ galleryDataArray }: galleryDataProps) {
  return (
    <div className="flex flex-col gap-24 bg-white">
      <Stories />
      <Gallery galleryDataArray={galleryDataArray} />
      <Goal />
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const apiUrl = buildApiUrl('/cohort');
  const res = await fetch(apiUrl);
  const galleryData = await res.json();
  const galleryDataArray = galleryData.data;

  return { props: { galleryDataArray } };
}
