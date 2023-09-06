export interface BeerPayload {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  ingredients: {
    malt: { name: string; amount: { value: number; unit: string } }[];
    hops: { name: string; amount: { value: number; unit: string } }[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export interface BeerModel {
  map(
    arg0: (malt: any, index: any) => import('react/jsx-runtime').JSX.Element
  ): import('react').ReactNode;
  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  imageUrl: string;
  abv: number;
  ibu: number;
  targetFg: number;
  targetOg: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuationLevel: number;
  volume: {
    value: number;
    unit: string;
  };
  boilVolume: {
    value: number;
    unit: string;
  };
  ingredients: {
    [x: string]: any;
    malt: { name: string; amount: { value: number; unit: string } }[];
    hops: { name: string; amount: { value: number; unit: string } }[];
    yeast: string;
  };
  foodPairing: string[];
  brewersTips: string;
  contributedBy: string;
}
