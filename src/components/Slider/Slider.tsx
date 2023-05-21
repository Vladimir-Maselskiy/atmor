import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
import Image from 'next/image';

export const Slider = () => {
  return (
    <Swiper
      style={{
        width: '100%',
        aspectRatio: 2.65 / 1,
      }}
      effect={'fade'}
      //   spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Image src="/slider-image1.png" alt="hot water" fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/slider-image2.png" alt="man with towel" fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/slider-image3.png"
          alt="mother and daughter washing dishes"
          fill
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/slider-image4.png" alt="dad bathes son" fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/slider-image5.png" alt="child washing his head" fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/slider-image6.png" alt="people smile" fill />
      </SwiperSlide>
    </Swiper>
  );
};
