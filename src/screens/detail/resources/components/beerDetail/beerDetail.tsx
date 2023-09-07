import { BeerModel } from '../../../../../core/domain/beer/models';
export const BeerDetail = ({
  beerInfo,
  maltInfo,
  hopsInfo,
  yeastInfo,
}: {
  beerInfo?: BeerModel;
  maltInfo?: BeerModel;
  hopsInfo?: BeerModel;
  yeastInfo?: BeerModel;
}) => {
  return (
    <section className="container">
      <h1>{beerInfo?.name}</h1>
      <div className="flex">
        <div className="img-cont">
          <img src={beerInfo?.imageUrl} alt={beerInfo?.name} />
        </div>
        <div className="extra-info">
          <h2 className="title"> Ingredients: </h2>

          <ul>
            {maltInfo?.map((malt, index) => (
              <ol className="info-container" key={index}>
                <li>
                  <b> Malt Name: </b> {malt?.name}
                </li>
                <li>
                  <b>Amount: </b>
                  {malt.amount.value} {malt.amount.unit}{' '}
                </li>
              </ol>
            ))}

            {hopsInfo?.map((hops, index) => (
              <ol className="info-container" key={index}>
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
              </ol>
            ))}

            <li className="info-container">
              {yeastInfo && (
                <>
                  <b>Yeast Name:</b> {yeastInfo}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <h2>{beerInfo?.tagline}</h2>

      <p>{beerInfo?.description}</p>
    </section>
  );
};
