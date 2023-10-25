import Image from 'next/image';
import { Hero } from './components/hero';
import { Goal } from './components/goal';
import { ImpactSpread } from './components/impactSpread';
import { HearFrom } from './components/HearFrom';
import { RecentCohorts } from './components/recentCohorts';
import { YoutubeSnippet } from '../../components/youtubeSnippet';
import { RecentCohortStories } from '../../components/recentCohortStories';
import { AsShowcased } from '../../components/AsShowcased';
import { Footer } from '../../components/Footer/footer';
import LayoutWrapper from '@/app/components/LayoutWrapper';

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
