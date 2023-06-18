'use client';

import { useParams } from 'next/navigation';

export default function ProductsItemPage({
  params,
}: {
  params: { slug: string };
}) {
  const currentArticle = params.slug[params.slug.length - 1];
  console.log('params', params);

  return (
    <>
      <p style={{ paddingTop: 150 }}>Product Items Page2</p>
      <p style={{ paddingTop: 10 }}>currentArticle: {currentArticle}</p>
    </>
  );
}
