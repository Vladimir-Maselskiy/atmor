import { IAtmorItem } from '@/interfaces/interfaces';
import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  FreeMode,
  Thumbs,
} from 'swiper';
import Image from 'next/image';

type TProps = {
  product: IAtmorItem;
};

export const Product = ({ product }: TProps) => {
  console.log('product', product);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Box paddingTop={115}>
      <>
        <p>Product</p>
        <Swiper
          style={{
            width: '100%',
            aspectRatio: 2.65 / 1,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          effect={'fade'}
          //   spaceBetween={30}
          centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[
            EffectFade,
            Autoplay,
            Pagination,
            Navigation,
            FreeMode,
            Thumbs,
          ]}
          className="productSwiper"
        >
          {product.aditional.photos.map(photo => (
            <SwiperSlide key={photo}>
              <Image src={`${photo}`} alt={`${product.options.name}`} fill />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          // style={{
          //   width: '100%',
          //   aspectRatio: 2.65 / 1,
          // }}
          slidesPerView={3}
          thumbs={{ swiper: thumbsSwiper }}
          //   spaceBetween={30}
          // centeredSlides={true}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          // loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[EffectFade, FreeMode, Thumbs]}
          className="productSwiperNav"
        >
          {product.aditional.photos.map(photo => (
            <SwiperSlide key={photo}>
              <Image
                src={`${photo}`}
                alt={`${product.options.name}`}
                width={100}
                height={100}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </Box>
  );
};
