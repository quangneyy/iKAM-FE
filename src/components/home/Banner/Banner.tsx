"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
    return (
        <section className="banner">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
            >
                <SwiperSlide>
                    <img
                        src="https://www.hioki.com/system/files/2025-06/MR8848_GS.jpg"
                        alt="Banner 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.hioki.com/system/files/2025-02/editable_ST4200-1.jpg"
                        alt="Banner 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://www.hioki.com/system/files/2025-01/banner_ALDAS-Mini-1.png"
                        alt="Banner 3"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
