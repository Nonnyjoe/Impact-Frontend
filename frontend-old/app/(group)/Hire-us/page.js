import { Footer } from '../../components/Footer/footer';
import { YoutubeSnippet } from '../../components/youtubeSnippet';
import { AsShowcased } from '../../components/AsShowcased';
import { Hireus } from './components/hireUs';
import { ProductsWorked } from './components/productsWorked';
import LayoutWrapper from '@/app/components/LayoutWrapper';
import { JoinCommunity } from './components/joinCommunity';
import { LetsWorkTog } from './components/LetsWorkTog';

const HireUs = () => {
  return (
    <div className="flex flex-col bg-white">
      <LayoutWrapper>
        <Hireus />
        <LetsWorkTog />
        <ProductsWorked />
        <JoinCommunity />
      </LayoutWrapper>
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default HireUs;
