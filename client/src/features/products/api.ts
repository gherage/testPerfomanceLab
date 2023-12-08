import { Product } from './types/Products';

export const fetchGetProducts = async (
  category: string
): Promise<Product[]> => {
  const res = await fetch(`/api/products/${category}`);
  return res.json();
};
