import { Product } from './Products';

export type ProductState = {
  products: Product[];
  error: string | null;
};
