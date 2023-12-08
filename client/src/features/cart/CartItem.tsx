import React from 'react';
import { Product } from '../products/types/Products';
import { useAppDispatch } from '../../redux/store';
import { deleteFromCart } from '../../redux/reducers/cartSlice';

const CartItem = ({ product }: { product: Product }): JSX.Element => {
  const dispatch = useAppDispatch();
  const cancel = (id: number) => {
    dispatch(deleteFromCart(id));
  };
  return (
    <div className="product">
      <div>{product.title}</div>
      <div>{product.desc}</div>
      <div>{product.price}</div>
      <button type="button" onClick={() => cancel(product.id)}>
        DELETE
      </button>
    </div>
  );
};

export default CartItem;
