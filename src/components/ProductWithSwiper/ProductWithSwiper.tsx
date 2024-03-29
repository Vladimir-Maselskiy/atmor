import React, { useState } from 'react';
import { IAtmorItem } from '@/interfaces/interfaces';
import { Box } from '../Box/Box';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Thumbs } from 'swiper';
import Image from 'next/image';
import { ProductWithSwiperBox } from './ProductWithSwiper.styled';
import { useMediaQuery } from '@/hooks';

type TProps = {
  product: IAtmorItem;
};

export const ProductWithSwiper = ({ product }: TProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const isMoreThen560 = useMediaQuery(560);

  return (
    <ProductWithSwiperBox>
      <Swiper
        style={{
          aspectRatio: 1.5,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        centeredSlides={true}
        modules={[Thumbs]}
        className="productSwiper"
      >
        {product.aditional.photos.map(photo => (
          <SwiperSlide key={photo}>
            <Image
              src={`${photo}`}
              alt={`${product.options.name}`}
              fill
              objectFit="contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Box px={20} mt={20}>
        <Swiper
          style={{
            height: 100,
          }}
          spaceBetween={isMoreThen560 ? 50 : 10}
          slidesPerView={3}
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          className="swiper-for-navigation"
        >
          {product.aditional.photos.map(photo => (
            <SwiperSlide key={photo} style={{ padding: 10 }}>
              <Box position="relative" height="100%">
                <Image
                  src={`${photo}`}
                  alt={`${product.options.name}`}
                  fill
                  objectFit="contain"
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </ProductWithSwiperBox>
  );
};
