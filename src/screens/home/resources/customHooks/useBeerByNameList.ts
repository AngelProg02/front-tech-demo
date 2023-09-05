import { useEffect, useState } from 'react';
import { GetBeersByName } from '../../../../core/domain/beer/resources/getBeerByName';
import { BeerModel } from '../../../../core/domain/beer/models';

export function useBeerByNameList() {
  const [beerByNameList, setBeerByNameList] = useState<BeerModel[]>([]);
  const [beerWanted, setBeerWanted] = useState('');

  useEffect(() => {
    if (beerWanted) {
      GetBeersByName(beerWanted)
        .then((data) => {
          setBeerByNameList(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [beerWanted]);

  return { beerByNameList, setBeerWanted, beerWanted };
}
