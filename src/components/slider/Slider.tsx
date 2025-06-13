"use client";

import React, { ReactNode } from "react";
import { SliderInterface } from "@/types/slider";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({
  sliderData,
  slidesPerView = "auto",
  children,
  breakpoint,
  spaceBetween,
  className,
  loop = false,
  pagination = true,
  navigation = false,
}: SliderInterface) {
  return (
    <Swiper
      modules={[
        ...(pagination ? [Pagination] : []),
        ...(navigation ? [Navigation] : []),
      ]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      loop={loop}
      pagination={pagination ? { clickable: true } : false}
      navigation={navigation}
      breakpoints={breakpoint as any}
    >
      {sliderData && sliderData.length > 0
        ? sliderData.map((item, idx) => (
            <SwiperSlide key={idx} className={className}>
              {typeof children === "function"
                ? (children as (item: any, idx: number) => ReactNode)(item, idx)
                : children}
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
}

export default Slider;
