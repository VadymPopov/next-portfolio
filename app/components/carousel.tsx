"use client";
import Image from "next/image";
import { Image as ImageType } from "@/types/Project";

interface ImagesProps {
  images: ImageType[];
}

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "@/app/swiper.css";

import { Pagination } from "swiper/modules";

export default function Carousel({ images }: ImagesProps) {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper pagination={pagination} modules={[Pagination]}>
        {images?.map((image, idx) => {
          return (
            <SwiperSlide key={image.alt}>
              <Image
                id={`item${idx}`}
                src={image.url}
                alt={image.alt}
                width={1920}
                height={1080}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
