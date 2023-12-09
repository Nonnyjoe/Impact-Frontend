import LayoutWrapper from '@/components/LayoutWrapper';
import AsShowcased from '@/components/AsShowcased';
import Footer from '@/components/Footer/footer';
import HireUs from '../../components/Hire-Us/HireUs';
import LetsWorkTog from '../../components/Hire-Us/LetsWork';
import ProductsWorked from '../../components/Hire-Us/Products';
import JoinCommunity from '../../components/Hire-Us/JoinCommunity';

const HireUsMain = () => (
  <div className="grid gap-12 lg:gap-24 ">
    <LayoutWrapper>
      <div className="grid gap-12 lg:gap-24 ">
        <HireUs />
        <LetsWorkTog />
        <ProductsWorked />
        <JoinCommunity />
      </div>
    </LayoutWrapper>
    <AsShowcased />
    <Footer />
  </div>
);

export default HireUsMain;
