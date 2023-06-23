import { IAtmorItem } from '@/interfaces/interfaces';
import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Thumbs } from 'swiper';
import Image from 'next/image';
import { PreviewPhotosItem, PreviewPhotosList } from './Product.styled';

type TProps = {
  product: IAtmorItem;
};

export const Product = ({ product }: TProps) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  return (
    <Box paddingTop={115}>
      <Box width="520px" p={16}>
        <Swiper
          style={{
            aspectRatio: 1.5,
          }}
          thumbs={{ swiper: thumbsSwiper }}
          // effect={'fade'}
          //   spaceBetween={30}
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
            spaceBetween={50}
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
      </Box>
    </Box>
  );
};
