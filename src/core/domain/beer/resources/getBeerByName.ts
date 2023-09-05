import axios, { AxiosRequestConfig } from 'axios';
import { beerListPayloadToBeerListModel } from '../mapper/index';
import { BeerModel } from '../models/index';
const host = 'https://api.punkapi.com';

const getUrl = (host: string, beerName: string): string =>
  `${host}/v2/beers?beer_name=${beerName}`;

export const GetBeersByName = async (
  beerNameToSearch: string
): Promise<BeerModel[]> => {
  try {
    const url = getUrl(host, beerNameToSearch);
    const options: AxiosRequestConfig = {
      url,
      method: 'GET',
      timeout: 10000,
    };

    const { data } = await axios(options);

    const filteredBeers = data.filter((beer: BeerModel) =>
      beer.name.toLowerCase().startsWith(beerNameToSearch.toLowerCase())
    );
    return beerListPayloadToBeerListModel(filteredBeers);
  } catch (e) {
    console.error('No se encontró la cerveza que busca');
    return [];
  }
};
