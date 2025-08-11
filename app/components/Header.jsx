import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../assets/assets";
import ResumeModal from "./ResumeModal";

const Header = ({ isDarkMode }) => {
  const [showResume, setShowResume] = useState(false);
  const toggleResume = () => {
    setShowResume((prev) => !prev);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-[#f2f2b0]/20 to-[#e0ebaf]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-bl from-[#84b9cb]/15 to-[#4c6473]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-r from-[#2f5d50]/20 to-[#f8f4e6]/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* 主要内容区域 */}
      <div className="relative z-10 w-11/12 max-w-4xl mx-auto text-center">
        {/* 头像和问候语区域 */}
        <div className="mb-8">
          <div className="relative inline-block mb-6">
            {/* 头像光环效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#84b9cb] via-[#f2f2b0] to-[#e0ebaf] rounded-full blur-sm animate-pulse scale-105"></div>
            <div className="relative bg-white dark:bg-[#2f5d50] p-1 rounded-full">
              <Image
                src={assets.profile_img}
                alt="profile img"
                className="rounded-full w-32 h-32 object-cover border-4 border-white dark:border-[#4c6473] shadow-2xl"
              />
            </div>
          </div>

          {/* 问候语 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <h3 className="text-xl md:text-2xl font-medium text-[#4c6473] dark:text-[#f8f4e6] flex items-center gap-3">
              Hi, I&apos;m David Wanlong Wu
              <Image
                src={assets.python}
                alt="python icon"
                className="w-10 animate-spinSlow drop-shadow-lg"
              />
            </h3>
          </div>
        </div>

        {/* 主标题区域 */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4">
            <span className="bg-gradient-to-r from-[#2f5d50] via-[#4c6473] to-[#84b9cb] dark:from-[#84b9cb] dark:via-[#f2f2b0] dark:to-[#e0ebaf] bg-clip-text text-transparent drop-shadow-lg">
              Frontend Web Developer
            </span>
            <br />
            <span className="text-[#4c6473] dark:text-[#f8f4e6] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              in Alberta
            </span>
          </h2>
        </div>

        {/* 描述文字 */}
        <div className="mb-10">
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-[#4c6473]/80 dark:text-[#f8f4e6]/90 px-4">
            I am a passionate frontend developer from Alberta, Canada.
            <br className="hidden sm:block" />
            Graduating from South Alberta Institute of Technology in August
            2025.
          </p>
        </div>

        {/* 按钮区域 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Contact 按钮 */}
          <a
            href="#contact"
            className="group relative overflow-hidden px-4 py-2 bg-gradient-to-r from-[#2f5d50] to-[#4c6473] hover:from-[#4c6473] hover:to-[#84b9cb] text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[160px] justify-center"
          >
            <span className="relative z-10 font-medium">Contact me</span>

            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>

          {/* Resume 按钮 */}
          <button
            onClick={toggleResume}
            className="group relative overflow-hidden px-3 py-2 bg-gradient-to-r from-[#f8f4e6] to-[#f2f2b0] hover:from-[#f2f2b0] hover:to-[#e0ebaf] text-[#2f5d50] border-2 border-[#e0ebaf] hover:border-[#4c6473] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[160px] justify-center dark:bg-gradient-to-r dark:from-[#2f5d50] dark:to-[#4c6473] dark:text-[#f8f4e6] dark:border-[#84b9cb] dark:hover:from-[#4c6473] dark:hover:to-[#84b9cb]"
          >
            <span className="relative z-10 font-medium">
              {showResume ? "Close resume" : "My resume"}
            </span>

            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </div>

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

      {/* Resume Modal */}
      {showResume && <ResumeModal onClose={toggleResume} />}
    </div>
  );
};

export default Header;
