import { Product } from '../products/types/Products';

export const fetchAddToCart = async (id: number): Promise<Product> => {
  const res = await fetch('/api/cart', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id }),
  });
  return res.json();
};

export const fetchDeleteFromCart = async (
  id: number
): Promise<{ id: string }> => {
  const res = await fetch(`/api/cart/${id}`, {
    method: 'delete',
  });
  return res.json();
};

export const fetchLoadCart = async (): Promise<Product[]> => {
  const res = await fetch(`/api/cart`);
  return res.json();
};
