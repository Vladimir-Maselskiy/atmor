'use client';
import { ProductItem } from '@/components/ProductItem/ProductItem';
import { products } from '../../data/products.json';

console.log('products', products);
export default function Home() {
  return (
    <main>
      <ul>
        {products.map(product => {
          return (
            <ProductItem key={product.options.article} product={product} />
          );
        })}
      </ul>
    </main>
  );
}
