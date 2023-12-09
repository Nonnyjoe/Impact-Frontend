import Footer from '@/components/Footer/footer';
import LayoutWrapper from '@/components/LayoutWrapper';
import YoutubeSnippet from '@/components/youtubeSnippet';
import Goal from '@/components/Home/Goal';
import HearFrom from '@/components/Home/HearFrom';
import Hero from '@/components/Home/Hero';
import ImpactSpread from '@/components/Home/ImpactSpread';

export default function HomeIndex() {
  return (
    <div className="grid gap-12 lg:gap-24">
      <LayoutWrapper>
        <div className="grid gap-12 lg:gap-24">
          <Hero />
          <Goal />
          <ImpactSpread />
        </div>
      </LayoutWrapper>
      <HearFrom />
      {/* <LayoutWrapper>
        <RecentCohortStories />
      </LayoutWrapper> */}

      <YoutubeSnippet />
      {/* <AsShowcased /> */}
      <Footer />
    </div>
  );
}
