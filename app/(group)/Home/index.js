import Image from 'next/image'
import {Hero} from './components/hero'
import {Goal} from './components/goal'
import {ImpactSpread} from './components/impactSpread'
import {HearFrom} from './components/HearFrom'
import {RecentCohorts} from './components/recentCohorts'
import {YoutubeSnippet} from '../../components/youtubeSnippet'
import {AsShowcased} from '../../components/AsShowcased'
import {Footer} from '../../components/Footer/page'

export function HomeIndex() {
  return (
        <div className="flex flex-col">
            <Hero />
            <Goal />
            <ImpactSpread />
            <HearFrom />
            <RecentCohorts />
            <YoutubeSnippet />
            <AsShowcased />  
            <Footer />        
        </div>
  )
}