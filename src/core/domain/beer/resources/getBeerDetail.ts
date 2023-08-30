import axios, { AxiosRequestConfig } from "axios";
import { beerPayloadToModel } from "../mapper/index";
import { BeerModel } from "../models/index";

const host = "https://api.punkapi.com";
const getUrl = (host: string, beerId: string): string =>
  `${host}/v2/beers/${beerId}`;

// default return 25 results
export const GetBeersDetail = async (beerId: string): Promise<BeerModel> => {
  try {
    const url = getUrl(host, beerId);
    const options: AxiosRequestConfig = {
      url,
      method: "GET",
      timeout: 10000,
    };

    const { data } = await axios(options);
    const result = data[0];

    return beerPayloadToModel(result);
  } catch (e) {
    throw e;
  }
};
