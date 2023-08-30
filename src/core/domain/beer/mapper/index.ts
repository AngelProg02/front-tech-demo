import { BeerModel, BeerPayload } from "../models/index";

export const beerPayloadToModel = (payload: BeerPayload): BeerModel => {
  const {
    id,
    name,
    tagline,
    first_brewed,
    description,
    image_url,
    ibu,
    abv,
    attenuation_level,
    brewers_tips,
    ebc,
    contributed_by,
    food_pairing,
    ph,
    srm,
    ingredients,
    target_fg,
    target_og,
    volume,
    boil_volume,
  } = payload;

  return {
    id,
    name,
    tagline,
    abv,
    ebc,
    ibu,
    ph,
    srm,
    ingredients,
    brewersTips: brewers_tips,
    contributedBy: contributed_by,
    description,
    volume,
    targetFg: target_fg,
    targetOg: target_og,
    attenuationLevel: attenuation_level,
    boilVolume: boil_volume,
    firstBrewed: first_brewed,
    foodPairing: food_pairing,
    imageUrl: image_url,
  };
};

export const beerListPayloadToBeerListModel = (
  payload: BeerPayload[]
): BeerModel[] => payload.map((item) => beerPayloadToModel(item));
