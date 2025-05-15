
export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  images?: string[];
  shortDescription: string;
  description: string;
  specifications?: Record<string, string>;
  tags?: string[];
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
}
