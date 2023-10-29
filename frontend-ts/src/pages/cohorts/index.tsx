import { Stories } from './components/Stories';
import { Goal } from './components/Goals';
import { Gallery } from './components/Gallery';
import { YoutubeSnippet } from '@/components/youtubeSnippet';
import { AsShowcased } from '@/components/AsShowcased';
import { Footer } from '@/components/Footer/footer';
import { buildApiUrl } from '../data/appConfig';

interface galleryData {
  id: number;
  title: string;
  body: string;
}

interface galleryDataProps {
  galleryDataArray: galleryData[];
}

export default function Index({ galleryDataArray }: galleryDataProps) {
  console.log(galleryDataArray);
  return (
    <div className="flex flex-col bg-white">
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
  const apiUrl = buildApiUrl('/posts');
  const res = await fetch(apiUrl);
  const galleryDataArray = await res.json();

  return { props: { galleryDataArray } };
}
