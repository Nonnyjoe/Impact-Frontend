import LayoutWrapper from '@/components/LayoutWrapper';
import { Hireus } from './components/HireUs';
import { LetsWorkTog } from './components/LetsWork';
import { ProductsWorked } from './components/Products';
import { JoinCommunity } from './components/JoinCommunity';
import { AsShowcased } from '@/components/AsShowcased';
import { Footer } from '@/components/Footer/footer';

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
