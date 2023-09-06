import './detail.css';
import { BeerDetail } from './resources/components/beerDetail/beerDetail';
import { useBeerInfo } from './resources/customHooks/useBeerInfo';
export const Index = () => {
  const { beerInfo, maltInfo, hopsInfo, yeastInfo } = useBeerInfo();

  return (
    <BeerDetail
      beerInfo={beerInfo}
      maltInfo={maltInfo}
      hopsInfo={hopsInfo}
      yeastInfo={yeastInfo}
    />
  );
};

export default Index;
