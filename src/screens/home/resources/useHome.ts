import { useEffect } from "react";
import { BeerModel } from "../../../core/domain/beer/models";
import { GetBeersList } from "../../../core/domain/beer/resources/getBeersList";
import { useState } from "react";

export function useHome() {
  const [beerList, setBeerList] = useState<BeerModel[]>([]);
  useEffect(() => {
    GetBeersList().then((response) => {
      setBeerList(response);

      console.log(response);
    });
  }, []);

  return { beerList };
}
