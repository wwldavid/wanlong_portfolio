import React, { useState, useEffect } from "react";
import { designData } from "../assets/assets";
import Image from "next/image";

const Designs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (activeIndex !== null) {
      const images = designData[activeIndex].carouselImages;
      const timer = setInterval(() => {
        setCarouselIndex((prev) => (prev + 1) % images.length);
      }, 3000);
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
    }, 600);
  };

  return (
    <div
      id="designs"
      className="relative w-full px-[8%] lg:px-[12%] py-16 lg:py-20 scroll-mt-20 overflow-hidden"
    >
      {/* 背景装饰元素 */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#84b9cb]/10 to-[#f8f4e6]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-[#2f5d50]/10 to-[#4c6473]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-r from-[#f8f4e6]/15 to-[#84b9cb]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div> */}

      <div className="relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          {/* 装饰线和标签 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#84b9cb] to-[#2f5d50]"></div>
            <span className="text-[#4c6473] dark:text-[#84b9cb] font-medium tracking-widest uppercase text-sm px-4 py-2 bg-[#f8f4e6]/30 dark:bg-[#2f5d50]/30 rounded-full border border-[#4c6473]/20 dark:border-[#84b9cb]/30 backdrop-blur-sm">
              Creative Portfolio
            </span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#84b9cb] to-[#2f5d50]"></div>
          </div>

          {/* 主标题 */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#2f5d50] via-[#4c6473] to-[#84b9cb] dark:from-[#84b9cb] dark:via-[#f8f4e6] dark:to-[#2f5d50] bg-clip-text text-transparent leading-tight">
              My Design Works
            </span>
          </h2>

          {/* 子标题 */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-2 h-2 bg-[#84b9cb] rounded-full animate-pulse"></div>
            <h4 className="text-lg md:text-xl text-[#4c6473] dark:text-[#f8f4e6] font-medium">
              Crafted at SAIT
            </h4>
            <div className="w-2 h-2 bg-[#2f5d50] rounded-full animate-pulse delay-300"></div>
          </div>

          {/* 描述文字 */}
          <div className="max-w-3xl mx-auto">
            <p className="text-[#4c6473]/80 dark:text-[#f8f4e6]/90 text-lg leading-relaxed px-6 py-4 bg-gradient-to-r from-[#f8f4e6]/20 via-[#84b9cb]/10 to-[#f8f4e6]/20 dark:from-[#2f5d50]/20 dark:via-[#4c6473]/10 dark:to-[#2f5d50]/20 rounded-2xl border border-[#4c6473]/20 dark:border-[#84b9cb]/20 backdrop-blur-sm">
              During my time in school, I also worked on many design practices—
              including Logo Design, UI/UX mockups, and branding systems. Each
              project represents a journey of creativity and technical skill
              development.
            </p>
          </div>
        </div>

        {/* 设计作品网格 */}
        {showGrid && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
            {designData.map(({ bgImage, title, description }, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setShowGrid(false);
                  setActiveIndex(index);
                }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#84b9cb]/20"
                style={{ minHeight: "280px" }}
              >
                {/* 卡片背景 */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                  }}
                />

                {/* 悬停时的装饰效果 */}
                {hoveredIndex === index && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#84b9cb]/20 via-transparent to-[#f8f4e6]/20 animate-pulse"></div>
                    <div className="absolute top-4 right-4 w-3 h-3 bg-[#84b9cb] rounded-full animate-ping"></div>
                    <div className="absolute top-6 right-6 w-2 h-2 bg-[#f8f4e6] rounded-full"></div>
                  </>
                )}

                {/* 内容区域 */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#80989b]/60 px-5 py-2 transform translate-y- group-hover:translate-y-0 transition-transform duration-500">
                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#f8f4e6] transition-colors duration-300">
                    {title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-3 group-hover:text-white transition-colors duration-300">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 轮播预览区域 */}
        {activeIndex !== null && (
          <div
            className={`relative w-full mt-16 ${
              isClosing ? "animate-fade-out" : "animate-fade-in"
            }`}
          >
            <div className="mx-auto max-w-5xl">
              {/* 轮播容器 */}
              <div className="relative bg-gradient-to-br from-[#f8f4e6]/10 via-[#84b9cb]/5 to-[#2f5d50]/10 dark:from-[#2f5d50]/20 dark:via-[#4c6473]/10 dark:to-[#84b9cb]/5 p-5 border border-[#4c6473]/20 dark:border-[#84b9cb]/30 backdrop-blur-md shadow-2xl">
                {/* 标题区域 */}
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#2f5d50] dark:text-[#f8f4e6] mb-2">
                    {designData[activeIndex].title}
                  </h3>
                  <p className="text-[#4c6473]/80 dark:text-[#84b9cb]/90 max-w-2xl mx-auto">
                    {designData[activeIndex].description}
                  </p>
                </div>

                {/* 图片展示区域 */}
                <div className="relative overflow-hidden shadow-xl">
                  <Image
                    src={designData[activeIndex].carouselImages[carouselIndex]}
                    alt="carousel preview"
                    width={1200}
                    height={700}
                    className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-contain transition-all duration-500"
                  />
                </div>

                {/* 关闭按钮 */}
                <button
                  onClick={closePreview}
                  className="absolute top-4 right-4 group bg-gradient-to-r from-[#4c6473] to-[#2f5d50] hover:from-[#84b9cb] hover:to-[#4c6473] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* 装饰元素 */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-[#84b9cb] to-[#f8f4e6] rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-[#2f5d50] to-[#4c6473] rounded-full opacity-60 animate-pulse delay-500"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Designs;
