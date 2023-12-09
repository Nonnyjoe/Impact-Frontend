import YoutubeSnippet from '@/components/youtubeSnippet';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import {buildApiUrl} from '@/lib/data/appConfig';
import Stories from '../../components/Cohorts/Stories';
import Goal from '../../components/Cohorts/Goals';
import Gallery from '../../components/Cohorts/Gallery';

interface IGalleryData {
  id: string;
  name: string;
  alias: number;
}

interface galleryDataProps {
  galleryDataArray: IGalleryData[];
}

export default function Index({galleryDataArray}: galleryDataProps) {
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
  const apiUrl = buildApiUrl('cohort');
  const res = await fetch(apiUrl);
  const galleryData = await res.json();
  const galleryDataArray = galleryData.data;

  return {props: {galleryDataArray}};
}
