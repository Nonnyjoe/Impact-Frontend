import { Footer } from '@/app/components/Footer/footer';
import { PhotoGallery } from './components/photo-gallery';
import { Stories } from './components/stories';
import { AsShowcased } from '@/app/components/AsShowcased';
import { YoutubeSnippet } from '@/app/components/youtubeSnippet';
import { getData } from '@/utils/url';

// export async function generateStaticParams({ params: { id } }) {
//   const res = await getData('cohort/' + id);
//   return res.map((r) => ({
//     data: r.data,
//   }));
// }

export default async function CohortStories({ params: { id } }) {
  const { data } = await getData(`cohort/${id}`);
  console.log(data);

  return (
    <div className="grid gap-16 bg-white">
      <Stories />
      <PhotoGallery />
      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
}
