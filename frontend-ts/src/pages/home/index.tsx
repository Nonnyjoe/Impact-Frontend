import { AsShowcased } from '@/components/AsShowcased';
import { Footer } from '@/components/Footer/footer';
import LayoutWrapper from '@/components/LayoutWrapper';
import { RecentCohortStories } from '@/components/recentCohortStories';
import { YoutubeSnippet } from '@/components/youtubeSnippet';
import { Goal } from '@/pages/home/components/Goal';
import { HearFrom } from '@/pages/home/components/HearFrom';
import { Hero } from '@/pages/home/components/Hero';
import { ImpactSpread } from '@/pages/home/components/ImpactSpread';

export function HomeIndex() {
  return (
    <div className="grid gap-24 lg:gap-36">
      <LayoutWrapper>
        <div className="grid gap-24 lg:gap-36">
          <Hero />
          <Goal />
          <ImpactSpread />
        </div>
      </LayoutWrapper>
      <HearFrom />
      <LayoutWrapper>
        <RecentCohortStories />
      </LayoutWrapper>

      <YoutubeSnippet />
      <AsShowcased />
      <Footer />
    </div>
  );
}
