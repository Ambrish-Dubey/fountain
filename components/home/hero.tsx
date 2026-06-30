"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { motion } from "framer-motion";

const banners = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export default function Hero() {
  return (
    <section className="relative">

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>

            <div className="relative h-[70vh] md:h-[85vh]">

              <Image
                src={banner}
                alt="Hero Banner"
                fill
                priority={index === 0}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/30" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 text-white"
              >
                <h1 className="text-4xl md:text-7xl font-semibold">
                  Crafted To Inspire
                </h1>

                <p className="mt-4 max-w-xl text-lg md:text-xl">
                  Discover luxury fountain pens for collectors,
                  professionals and enthusiasts.
                </p>

                <button className="mt-8 w-fit bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                  Explore Collection
                </button>

              </motion.div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}