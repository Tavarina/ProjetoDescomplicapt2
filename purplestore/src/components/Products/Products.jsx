import React, { useEffect, useContext } from 'react';

import './Products.css';
import fetchProducts from '../../api/fetchProducts';

import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';
import ProductCard from '../ProductCard/ProductCard';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}

export default Products;
