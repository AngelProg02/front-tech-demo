import { useParams } from "react-router-dom";
import { GetBeersDetail } from "../../core/domain/beer/resources/getBeerDetail";
import { BeerModel } from "../../core/domain/beer/models";
import { useEffect, useState } from "react";
import "./detail.css";
export const BeerDetail = () => {
  const params = useParams();
  const { beerId } = params;
  const [beerInfo, setBeerInfo] = useState<BeerModel | null>(null);
  const [maltInfo, setMaltInfo] = useState([]);

  useEffect(() => {
    GetBeersDetail(beerId).then((response: BeerModel) => {
      console.log(response);
      setBeerInfo(response);
    });
  }, []);

  console.log(beerId);
  useEffect(() => {
    if (beerInfo) {
      setMaltInfo(beerInfo?.ingredients?.malt);
    }
  }, [beerInfo]);

  return (
    <div className="container">
      <h1>{beerInfo?.name}</h1>
      <div className="img-cont">
        <img src={beerInfo?.imageUrl} />
        <div className="extra-info">
          <p id="title"> Extra Information: </p>
          {maltInfo.map((malt, index) => (
            <div className="info-container" key={index}>
              <section>
                <p>
                  <b> Malt Name: </b> {malt?.name}
                </p>
                <p>
                  <b>Amount: </b>
                  {malt.amount.value} {malt.amount.unit}{" "}
                </p>
              </section>
            </div>
          ))}
        </div>
      </div>

      <h2 id="tagline">{beerInfo?.tagline}</h2>

      <p>{beerInfo?.description}</p>
    </div>
  );
};
