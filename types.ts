
export interface Stat {
  label: string;
  value: string;
  description: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  name: string;
  media: string[];
  packaging: string[];
  description: string;
  imageUrl: string;
}

export interface MarketStat {
  year: string;
  marketSize: number;
}
