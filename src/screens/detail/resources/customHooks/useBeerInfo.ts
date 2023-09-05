import { useEffect, useState } from 'react';
import { BeerModel } from '../../../../core/domain/beer/models';
import { GetBeersDetail } from '../../../../core/domain/beer/resources/getBeerDetail';
import { useParams } from 'react-router-dom';

export function useBeerInfo() {
  const params = useParams();
  const { beerId } = params;
  const [beerInfo, setBeerInfo] = useState<BeerModel>();
  const [maltInfo, setMaltInfo] = useState<
    { name: string; amount: { value: number; unit: string } }[]
  >([]);
  const [hopsInfo, setHopsInfo] = useState<
    {
      name: string;
      amount: { value: number; unit: string };
      add: string;
      attribute: string;
    }[]
  >([]);

  const [yeastInfo, setYeastInfo] = useState<string | null>(null);

  useEffect(() => {
    GetBeersDetail(beerId)
      .then((response: BeerModel) => {
        if (response) {
          setBeerInfo(response);
          setMaltInfo(response?.ingredients?.malt || []);
          setHopsInfo(response?.ingredients?.hops || []);
          setYeastInfo(response?.ingredients?.yeast || null);
        } else {
          console.error(`La cerveza con ID ${beerId} no se encontró.`);
        }
      })
      .catch((error) => {
        console.error(
          `Error al obtener la información de la cerveza: ${error}`
        );
      });
  }, [beerId]);

  return { maltInfo, hopsInfo, yeastInfo, beerInfo };
}
