import { Product } from '../../products/types/Products';

export type CartState = {
  productsInCart: Product[];
  error: string | null;
};
