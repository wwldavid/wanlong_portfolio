import React, { useState } from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";

const Work = ({ isDarkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      id="work"
      className="relative w-full px-[8%] lg:px-[12%] py-16 lg:py-20 scroll-mt-20 overflow-hidden"
    >
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 right-20 w-72 h-72 bg-gradient-to-br from-[#84b9cb]/8 to-[#f8f4e6]/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-tl from-[#2f5d50]/10 to-[#4c6473]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#f8f4e6]/10 to-[#84b9cb]/8 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          {/* 装饰线和标签 */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#84b9cb] to-[#2f5d50]"></div>
            <span className="text-[#4c6473] dark:text-[#84b9cb] font-medium tracking-widest uppercase text-sm px-5 py-2 bg-gradient-to-r from-[#f8f4e6]/30 to-[#84b9cb]/20 dark:from-[#2f5d50]/30 dark:to-[#4c6473]/20 rounded-full border border-[#4c6473]/20 dark:border-[#84b9cb]/30 backdrop-blur-sm">
              Portfolio Showcase
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-[#84b9cb] to-[#2f5d50]"></div>
          </div>

          {/* 主标题 */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#2f5d50] via-[#4c6473] to-[#84b9cb] dark:from-[#84b9cb] dark:via-[#f8f4e6] dark:to-[#2f5d50] bg-clip-text text-transparent leading-tight">
              My Latest Work
            </span>
          </h2>

          {/* 描述文字 */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-[#f8f4e6]/20 via-[#84b9cb]/10 to-[#f8f4e6]/20 dark:from-[#2f5d50]/20 dark:via-[#4c6473]/10 dark:to-[#2f5d50]/20 rounded-2xl p-8 border border-[#4c6473]/20 dark:border-[#84b9cb]/20 backdrop-blur-sm">
              <p className="text-[#4c6473]/90 dark:text-[#f8f4e6]/90 text-lg leading-relaxed px-8">
                Welcome to my web development collections! Here you will find my{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  mental health app
                </span>{" "}
                which is my capstone project, and a{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  Toronto church website
                </span>{" "}
                for my Studio class. These projects showcase my journey through
                my final semester at SAIT, representing months of dedication and
                technical growth.
              </p>
            </div>
          </div>
        </div>

        {/* 项目展示网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16">
          {workData.map(({ title, description, bgImage, link }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#84b9cb]/25"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${bgImage})` }}
              />

              {/* 悬停装饰效果 */}
              {hoveredIndex === index && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#84b9cb]/20 via-transparent to-[#f8f4e6]/15 animate-pulse" />
                  <div className="absolute top-6 right-6 w-4 h-4 bg-[#84b9cb] rounded-full animate-ping" />
                  <div className="absolute top-8 right-8 w-2 h-2 bg-[#f8f4e6] rounded-full" />

                  {/* 边框光效 */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-[#84b9cb]/50 animate-pulse" />
                </>
              )}

              {/* 项目链接按钮 */}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
              >
                {/* 内容卡片 */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                  {/* 项目信息卡片 */}
                  <div className="bg-[#80989b]/60 backdrop-blur-md rounded-2xl px-4 py-2 border border-[#4c6473]/20 dark:border-[#84b9cb]/30 shadow-xl transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#2f5d50] dark:text-[#f8f4e6] mb-2 group-hover:text-[#4c6473] dark:group-hover:text-[#165e83] transition-colors duration-300">
                          {title}
                        </h3>
                        <p className="text-[#4c6473] dark:text-[#f8f4e6]/90 text-sm leading-relaxed line-clamp-2">
                          {description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Show More 按钮 */}
        <div className="text-center mt-16">
          <a
            href="https://vercel.com/wanlong-wus-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-[#f8f4e6] via-[#84b9cb]/20 to-[#f8f4e6] dark:from-[#2f5d50] dark:via-[#4c6473]/50 dark:to-[#2f5d50] hover:from-[#84b9cb] hover:to-[#4c6473] dark:hover:from-[#84b9cb] dark:hover:to-[#f8f4e6] rounded-full border-2 border-[#4c6473]/30 dark:border-[#84b9cb]/30 hover:border-[#f8f4e6] dark:hover:border-[#2f5d50] backdrop-blur-sm shadow-lg hover:shadow-2xl hover:shadow-[#84b9cb]/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
          >
            {/* 按钮文字 */}
            <span className="text-lg font-semibold text-[#2f5d50] dark:text-[#f8f4e6] group-hover:text-[#f8f4e6] dark:group-hover:text-[#2f5d50] transition-colors duration-300">
              Explore All Projects
            </span>
          </a>

          {/* 装饰性分隔线 */}
          <div className="mt-16 flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#84b9cb]/50"></div>
              <div className="w-2 h-2 bg-[#84b9cb] rounded-full animate-pulse"></div>
              <div className="w-8 h-px bg-[#84b9cb]/50"></div>
              <div className="w-2 h-2 bg-[#e0ebaf] rounded-full animate-pulse delay-300"></div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#84b9cb]/50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
