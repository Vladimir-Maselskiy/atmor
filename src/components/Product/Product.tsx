import { IAtmorItem } from '@/interfaces/interfaces';
import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  FreeMode,
  Thumbs,
} from 'swiper';
import Image from 'next/image';
import { PreviewPhotosItem, PreviewPhotosList } from './Product.styled';

type TProps = {
  product: IAtmorItem;
};

export const Product = ({ product }: TProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Box paddingTop={115}>
      <Box width="50%">
        <Swiper
          style={{
            aspectRatio: 2 / 1,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          // effect={'fade'}
          //   spaceBetween={30}
          centeredSlides={true}
          // modules={[
          //   EffectFade,
          //   Autoplay,
          //   Pagination,
          //   Navigation,
          //   FreeMode,
          //   Thumbs,
          // ]}
          className="productSwiper"
        >
          {product.aditional.photos.map(photo => (
            <SwiperSlide key={photo}>
              <Image src={`${photo}`} alt={`${product.options.name}`} fill />
            </SwiperSlide>
          ))}
        </Swiper>
        <PreviewPhotosList>
          {product.aditional.photos.map(photo => (
            <PreviewPhotosItem key={photo}>
              <Image
                src={`${photo}`}
                alt={`${product.options.name}`}
                width={100}
                height={100}
              />
            </PreviewPhotosItem>
          ))}
        </PreviewPhotosList>
      </Box>
    </Box>
  );
};
