import './detail.css';
import { BeerDetail } from './resources/components/beerDetail';
import { useBeerInfo } from './resources/customHooks/useBeerInfo';
export const Index = () => {
  const { beerInfo, maltInfo, hopsInfo, yeastInfo } = useBeerInfo();

  return (
    <div>
      <BeerDetail
        beerInfo={beerInfo}
        maltInfo={maltInfo}
        hopsInfo={hopsInfo}
        yeastInfo={yeastInfo}
      />
    </div>
  );
};
