import React from 'react';
import { Product } from './types/Products';
import { useAppDispatch } from '../../redux/store';
import { addToCart } from '../../redux/reducers/cartSlice';

const ProductItem = ({ product }: { product: Product }): JSX.Element => {
  const dispatch = useAppDispatch();
  const buyProduct = (id: number) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="product">
      <div>{product.title}</div>
      <div>{product.desc}</div>
      <div>{product.price}</div>
      <button type="button" onClick={() => buyProduct(product.id)}>
        BUY
      </button>
    </div>
  );
};

export default ProductItem;
