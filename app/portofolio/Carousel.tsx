"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong, faLeftLong } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [count, setCount] = useState<number>(0);

  const Images = [
    { id: 1, url: "/Background/Carousel/Image1.jpg" },
    { id: 2, url: "/Background/Carousel/Image2.jpg" },
    { id: 3, url: "/Background/Carousel/Image3.jpg" },
    { id: 4, url: "/Background/Carousel/Image4.jpg" },
    { id: 5, url: "/Background/Carousel/Image5.jpg" },
    { id: 6, url: "/Background/Carousel/Image6.jpg" },
    { id: 7, url: "/Background/Carousel/Image7.jpg" },
    { id: 8, url: "/Background/Carousel/Image8.jpg" },
    { id: 9, url: "/Background/Carousel/Image9.jpg" },
    { id: 10, url: "/Background/Carousel/Image10.jpg" },
    { id: 11, url: "/Background/Carousel/Image11.jpg" },
  ];

  const goNext = () => {
    if (count < Images.length - 1) setCount(count + 1);
  };

  const goPrev = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-100 h-150 overflow-hidden rounded-lg border-2 border-none shadow-2xl hover:shadow-gray-600 transition duration-300   ease-in-out ">
        {/* Sliding track containing all images */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${count * 100}%)` }}
        >
          {Images.map((img) => (
            <div key={img.id} className="relative min-w-full h-full">
              <Image
                src={img.url}
                alt={`Image ${img.id}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          disabled={count === 0}
          onClick={goPrev}
          className="px-4 py-2 bg-white/20 rounded disabled:opacity-30 cursor-pointer"
        >
          <FontAwesomeIcon icon={faLeftLong} />
        </button>
        <span className="text-white">
          {count + 1} / {Images.length}
        </span>
        <button
          disabled={count === Images.length - 1}
          onClick={goNext}
          className="px-4 py-2 bg-white/20 rounded disabled:opacity-30 cursor-pointer"
        >
          <FontAwesomeIcon icon={faRightLong} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
