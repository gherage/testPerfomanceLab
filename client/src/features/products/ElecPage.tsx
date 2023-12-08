import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/reducers/productsSlice';
import ProductItem from './ProductItem';

const ElecPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const products = useSelector((store: RootState) => store.products.products);

  useEffect(() => {
    dispatch(getProducts('elec'));
  }, [dispatch]);

  return (
    <>
      {products.length > 0 ? (
        <div>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>pusto</div>
      )}
    </>
  );
};

export default ElecPage;
