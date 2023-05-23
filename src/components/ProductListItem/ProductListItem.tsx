import React from 'react';
import { products } from '../../data/products.json';
import { ProductItem } from '../ProductItem/ProductItem';
import { Divider } from 'antd';

export const ProductListItem = () => {
  return (
    <ul>
      {products.map(product => {
        return (
          <>
            <ProductItem key={product.options.article} product={product} />
            <Divider />
          </>
        );
      })}
    </ul>
  );
};
