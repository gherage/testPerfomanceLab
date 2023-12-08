import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../redux/store';
import Auth from '../features/auth/Auth';
import Products from '../features/products/Products';
import './App.css';
import { useEffect } from 'react';
import { checkUser } from '../redux/reducers/authSlice';

function App() {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  return <div className="app">{user ? <Products /> : <Auth />}</div>;
}

export default App;
