import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/reducers/productsSlice';
import ProductItem from './ProductItem';
import Pagination from './Pagination';
import { Product } from './types/Products';

const FoodPage = (): JSX.Element => {
  const products = useSelector((store: RootState) => store.products.products);

  const postsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedProducts, setSortedProducts] = useState<Product[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts('food'));
  }, [dispatch]);

  useEffect(() => {
    if (products !== undefined) setSortedProducts(products);
  }, [products]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentProducts = sortedProducts.slice(firstPostIndex, lastPostIndex);

  const sortProducts = () => {
    const sortedProducts = [...products].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setSortedProducts(sortedProducts);
  };

  return (
    <>
      {products.length > 0 ? (
        <div className="products__container">
          <button type="button" onClick={sortProducts}>
            Sort by Name
          </button>
          {currentProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
          <Pagination
            totalPosts={products.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <div>pusto</div>
      )}
    </>
  );
};

export default FoodPage;
