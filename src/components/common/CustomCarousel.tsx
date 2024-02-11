"use client";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

interface CustomCarouselProps {
  images: string[];
}
export function CustomCarousel({ images }: CustomCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const startSlideShow = () => {
    stopSlideShow();
    slideInterval.current = setInterval(() => {
      goToNext();
    }, 3000);
  };

  const stopSlideShow = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideShow();
    return () => stopSlideShow();
  }, [currentIndex]);

  return (
    <div className="relative">
      <div className="relative text-white h-96 flex items-center justify-center text-center min-h-screen">
        {images.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
            />
          </div>
        ))}
        <div className="z-10 p-5 bg-opacity-50 bg-black rounded-md shadow-md">
          <h1 className="text-4xl font-bold">Find Your Dream Home</h1>
          <p className="mt-4 max-w-lg mx-auto">
            We are recognized for exceeding client expectations and delivering
            great results through dedication, ease of process, and extraordinary
            services to our worldwide clients.
          </p>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
        <button
          onClick={goToPrevious}
          className="bg-white text-gray-800 p-4 rounded-full shadow-lg focus:outline-none"
          aria-label="Previous slide"
        >
          ‹
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <button
          onClick={goToNext}
          className="bg-white text-gray-800 p-4 rounded-full shadow-lg focus:outline-none"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}
