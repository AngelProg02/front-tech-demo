import { BeerModel } from '../../../../core/domain/beer/models';
import { Suspense } from 'react';
import { Loading } from './loading';
export const BeerDetail = ({
  beerInfo,
  maltInfo,
  hopsInfo,
  yeastInfo,
}: {
  beerInfo: BeerModel;
  maltInfo: BeerModel;
  hopsInfo: BeerModel;
  yeastInfo: BeerModel;
}) => {
  return (
    <Suspense fallback={<Loading />}>
      <section className="container">
        <h1>{beerInfo?.name}</h1>
        <div className="img-cont">
          <img src={beerInfo?.imageUrl} alt={beerInfo?.name} />
          <div className="extra-info">
            <h2 id="title"> Ingredients </h2>
            {maltInfo.map((malt, index) => (
              <ul className="info-container" key={index}>
                <li>
                  <b> Malt Name: </b> {malt?.name}
                </li>
                <li>
                  <b>Amount: </b>
                  {malt.amount.value} {malt.amount.unit}{' '}
                </li>
              </ul>
            ))}

            {hopsInfo.map((hops, index) => (
              <ul className="info-container" key={index}>
                <li>
                  <b> Hops Name: </b> {hops?.name}
                </li>
                <li>
                  <b>Amount: </b>
                  {hops.amount.value} {hops.amount.unit}
                </li>
                <li>
                  <b>Add:</b> {hops.add}
                </li>
                <li>
                  <b>Attribute:</b> {hops.attribute}
                </li>
              </ul>
            ))}
            <ul className="info-container">
              <li>
                <b>Yeast Name:</b> {yeastInfo}
              </li>
            </ul>
          </div>
        </div>

        <h2 id="tagline">{beerInfo?.tagline}</h2>

        <p>{beerInfo?.description}</p>
      </section>
    </Suspense>
  );
};
