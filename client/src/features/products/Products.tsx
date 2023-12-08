import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { logout } from '../../redux/reducers/authSlice';
import FoodPage from './FoodPage';
import ClothesPage from './ClothesPage';
import ElecPage from './ElecPage';
import { useSelector } from 'react-redux';
import CartItem from '../cart/CartItem';
import { loadCart } from '../../redux/reducers/cartSlice';

const Products = () => {
  const [productType, setProductType] = useState('food');
  const [cartStatus, setCartStatus] = useState('closedCart');

  const dispatch = useAppDispatch();
  const cart = useSelector((store: RootState) => store.cart.productsInCart);

  const logOut = async (): Promise<void> => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <>
      <div className="cartButton">
        <button type="button" onClick={logOut}>
          LogOut
        </button>
        <button type="button" onClick={() => setCartStatus('openCart')}>
          Cart
        </button>
      </div>
      {cart && (
        <div className={`cartTab ${cartStatus}`}>
          <h2>Корзина покупок</h2>
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
          <button
            className="cartTabBTN"
            type="button"
            onClick={() => setCartStatus('closedCart')}
          >
            Закрыть
          </button>
        </div>
      )}
      <button onClick={() => setProductType('food')}>Еда</button>
      <button onClick={() => setProductType('clothes')}>Одежда</button>
      <button onClick={() => setProductType('elec')}>Электроника</button>
      {productType === 'food' ? (
        <FoodPage />
      ) : productType === 'clothes' ? (
        <ClothesPage />
      ) : (
        <ElecPage />
      )}
    </>
  );
};

export default Products;
