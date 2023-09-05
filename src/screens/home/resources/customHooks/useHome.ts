import { useEffect } from 'react';
import { useState } from 'react';
import { BeerModel } from '../../../../core/domain/beer/models';
import { GetBeersList } from '../../../../core/domain/beer/resources/getBeersList';

export function useHome() {
  const [beerList, setBeerList] = useState<BeerModel[]>([]);
  useEffect(() => {
    GetBeersList().then((response) => {
      setBeerList(response);
    });
  }, []);

  return { beerList };
}
