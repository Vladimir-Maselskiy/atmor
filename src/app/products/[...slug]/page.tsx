'use client';
import { IAtmorItem } from '@/interfaces/interfaces';
import data from '../../../data/products.json';
import { Product } from '@/components/Product/Product';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const currentArticle = params.slug[params.slug.length - 1];
  const { products }: { products: IAtmorItem[] } = data;

  const product = products.find(
    product => product.options.article === currentArticle
  );

  return product && <Product product={product} />;
}
