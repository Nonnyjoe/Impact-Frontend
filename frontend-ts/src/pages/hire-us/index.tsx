import LayoutWrapper from '@/components/LayoutWrapper';
import { Hireus } from './components/HireUs';
import { LetsWorkTog } from './components/LetsWork';
import { ProductsWorked } from './components/Products';
import { JoinCommunity } from './components/JoinCommunity';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';

const HireUs = () => {
  return (
    <div className="grid gap-12 lg:gap-24 ">
      <LayoutWrapper>
        <div className="grid gap-12 lg:gap-24 ">
          <Hireus />
          <LetsWorkTog />
          <ProductsWorked />
          <JoinCommunity />
        </div>
      </LayoutWrapper>
      <AsShowcased />
      <Footer />
    </div>
  );
};

export default HireUs;
