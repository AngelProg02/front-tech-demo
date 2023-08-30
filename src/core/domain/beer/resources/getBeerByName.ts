import axios, { AxiosRequestConfig } from "axios";
import { beerListPayloadToBeerListModel } from "../mapper/index";
import { BeerModel } from "../models/index";
const host = "https://api.punkapi.com/v2/beers?beer_name=";

const getUrl = (host: string, beerName: string): string => `${host}${beerName}`;

// return the beer that you are looking for
export const GetBeersByName = async (
  beerNameToSearch: string
): Promise<BeerModel[]> => {
  try {
    /*Recibe el nombre de la cerveza que debe buscar por parámetro
     */
    const url = getUrl(host, beerNameToSearch);
    const options: AxiosRequestConfig = {
      url,
      method: "GET",
      timeout: 10000,
    };

    const { data } = await axios(options);

    //Filtra las cervezas con respecto al nombre
    const filteredBeers = data.filter((beer: BeerModel) =>
      beer.name.toLowerCase().startsWith(beerNameToSearch.toLowerCase())
    );
    return beerListPayloadToBeerListModel(filteredBeers);
  } catch (e) {
    //Devuelve un error si está vacía
    console.error("No se encontró la cerveza que busca");
    return [];
  }
};
