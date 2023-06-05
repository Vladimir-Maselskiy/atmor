import React from 'react';
import data from '../../data/products.json';
import { ProductItem } from '../ProductItem/ProductItem';
import { StyledProductList } from './ProductList.styled';

export const ProductList = () => {
  const products = data.products;
  return (
    <StyledProductList>
      {products.map(product => {
        return <ProductItem key={product.options.article} product={product} />;
      })}
    </StyledProductList>
  );
};
