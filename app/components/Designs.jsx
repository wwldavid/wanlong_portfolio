import React, { useState, useEffect } from "react";
import { designData } from "../assets/assets";
import Image from "next/image";

const Designs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [showGrid, setShowGrid] = useState(true);

  useEffect(() => {
    if (activeIndex !== null) {
      const images = designData[activeIndex].carouselImages;
      const timer = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(timer);
    }
  }, [activeIndex]);

  const closePreview = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveIndex(null);
      setCarouselIndex(0);
      setIsClosing(false);
      setShowGrid(true);
    }, 500);
  };

  return (
    <div id="designs" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl text-[#84b9cb]">My Design Works</h2>
      <h4 className="text-center mt-2 text-lg">( At SAIT )</h4>

      <p className="text-center max-w-2xl mx-auto mt-4 mb-12">
        During my time in school, I also worked on many design practices—
        including Logo Design, UI/UX mockups, and branding systems...
      </p>

      {showGrid && (
        <div className="grid grid-cols-auto gap-6 animate-fade-in">
          {designData.map(({ bgImage, title, description }, index) => (
            <div
              key={index}
              onClick={() => {
                setShowGrid(false);
                setActiveIndex(index);
              }}
              className="relative border border-gray-400 rounded-md overflow-hidden min-h-[300px] hover:shadow-black cursor-pointer hover:-translate-y-1 duration-500 bg-cover bg-center dark:hover:shadow-white"
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            >
              <div className="absolute bottom-0 left-0 w-full bg-white/60 dark:bg-black/60 backdrop-blur-md px-4 py-3">
                <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                  {title}
                </h3>
                <p className="text-xs text-gray-700 dark:text-white/80 line-clamp-2">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 轮播视图（放大区域） */}
      {activeIndex !== null && (
        <div
          className={`relative w-full mt-12 ${
            isClosing ? "animate-fade-out" : "animate-fade-in"
          }`}
        >
          <div className="mx-auto max-w-4xl rounded-lg overflow-hidden shadow-lg">
            <Image
              src={designData[activeIndex].carouselImages[carouselIndex]}
              alt="carousel"
              width={1000}
              height={600}
              className="w-full h-[500px] object-contain bg-transparent"
            />
            <button
              onClick={closePreview}
              className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded hover:bg-black"
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Designs;
