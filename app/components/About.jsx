"use client";
import React, { useState, useEffect } from "react";
import { assets, infoList, toolsData } from "../assets/assets";
import Image from "next/image";
import { processData } from "../assets/assets";

const frames = Array.from({ length: 19 }, (_, i) => `/anima/anima${i + 1}.jpg`);

const About = ({ isDarkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [frame, setFrame] = useState(0);
  const [showProcess, setShowProcess] = useState(false);

  // 预加载，避免切换时闪烁
  useEffect(() => {
    frames.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // 循环播放（每 120ms 播下一帧，可自行调节）
  useEffect(() => {
    const id = setInterval(() => {
      setFrame((f) => (f + 1) % frames.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      id="about"
      className="relative w-full px-[12%] scroll-mt-20 overflow-hidden"
    >
      <div className="relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#2f5d50] via-[#4c6473] to-[#84b9cb] dark:from-[#84b9cb] dark:via-[#e0ebaf] dark:to-[#f8f4e6] bg-clip-text text-transparent leading-tight">
            About Me
          </h2>
          <p className="text-[#4c6473]/80 dark:text-[#f8f4e6]/80 mt-4 text-lg max-w-2xl mx-auto">
            Crafting modern web experiences with passion and precision
          </p>
        </div>

        <div className="flex w-full flex-col lg:flex-row items-start gap-16 lg:gap-20">
          <div className="w-full lg:w-auto flex flex-col gap-14 justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#84b9cb] via-[#e0ebaf] to-[#f8f4e6] rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

              <Image
                src={assets.user_image}
                alt="David Wanlong Wu"
                className="w-64 sm:w-80 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* </div> */}

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#2f5d50] to-[#4c6473] text-white px-3 py-1 rounded-full shadow-lg text-sm font-medium">
                <span className="animate-pulse"> Graduating 2025</span>
              </div>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setShowProcess((v) => !v)}
            >
              <Image
                src={frames[frame]}
                alt="Design evolution"
                width={370}
                height={370}
                sizes="(min-width: 640px) 20rem, 16rem"
                className="w-64 sm:w-80 object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />
              <div className="flex justify-end mt-3">
                <button
                  className="text-base text-[#2f5d50] dark:text-[#f8f4e6] font-semibold px-4 py-2
             bg-[#84b9cb]/20 dark:bg-[#84b9cb]/30
             border-1 border-[#2f5d50] dark:border-[#84b9cb]
             rounded-3xl backdrop-blur-sm
             hover:bg-[#84b9cb]/40 dark:hover:bg-[#84b9cb]/50
             hover:border-[#84b9cb] dark:hover:border-[#f8f4e6]
             hover:scale-105 transform transition-all duration-300
             shadow-md hover:shadow-lg cursor-pointer"
                >
                  See my design process
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="mb-12 p-6  dark:from-[#2f5d50]/30 dark:via-[#4c6473]/20 dark:to-transparent rounded-2xl border border-[#4c6473]/20 dark:border-[#84b9cb]/20 backdrop-blur-sm">
              <p className="text-[#4c6473] dark:text-[#f8f4e6] leading-relaxed text-lg">
                Hi, I&apos;m{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  David Wanlong Wu
                </span>
                , a web development student at the{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  Interactive Design Department of Southern Alberta Institute of
                  Technology (SAIT)
                </span>
                , expected to graduate in{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  August 2025
                </span>
                . Throughout my studies at SAIT, I have gained hands-on
                experience with a variety of design and development tools,
                including{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  Photoshop, Illustrator, Figma, Premiere Pro, and After Effects
                </span>
                .
                <br />
                <br />
                On the development side, I specialize in building modern,
                responsive websites using{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  HTML, CSS, Tailwind CSS, JavaScript, React, and Next.js
                </span>
                . I also have experience working with backend tools such as{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  PostgreSQL, Prisma, NextAuth.js, and Railway
                </span>
                .
                <br />
                <br />
                So far, I have designed and built several fully responsive web
                applications that demonstrate clean design, accessibility, and
                mobile-first principles. Currently, I am developing a website
                for{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  New Creation Life Ministries Church in Toronto
                </span>
                , focusing on visual storytelling and content management. In
                addition, I am working on a capstone project: a group-based
                mental health web application. In this project, I am responsible
                for all coding tasks, while my teammates focus on branding and
                user interface design.
                <br />
                <br />
                Through these projects, I&apos;ve developed strong skills in{" "}
                <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                  team collaboration, problem-solving, and time management
                </span>
                . I am passionate about creating meaningful digital experiences
                and always strive to write clean, maintainable code. I enjoy
                learning new technologies and applying them to real-world
                problems. My goal is to build inclusive, engaging, and impactful
                web experiences that serve both clients and users. I am eager to
                continue growing as a developer and to contribute to projects
                that make a positive difference.
              </p>
            </div>
            {!showProcess ? (
              <div>
                <h3 className="text-2xl font-bold text-[#2f5d50] dark:text-[#84b9cb] mb-8 flex items-center gap-3">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#e0ebaf] to-[#84b9cb] rounded-full"></div>
                  Development Toolkit
                </h3>

                <div className="bg-gradient-to-r from-[#f8f4e6]/60 via-[#e0ebaf]/40 to-[#f8f4e6]/60 dark:from-[#2f5d50]/40 dark:via-[#4c6473]/30 dark:to-[#2f5d50]/40 rounded-2xl p-8 border border-[#4c6473]/20 dark:border-[#84b9cb]/30 backdrop-blur-sm">
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                    {toolsData.map((tool, index) => (
                      <div
                        key={index}
                        className="group relative"
                        onMouseEnter={() => setHoveredTool(index)}
                        onMouseLeave={() => setHoveredTool(null)}
                      >
                        {/* 工具图标容器 */}
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#f8f4e6] to-[#e0ebaf] dark:from-[#4c6473] dark:to-[#2f5d50] rounded-2xl border-2 border-[#4c6473]/20 dark:border-[#84b9cb]/30 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#84b9cb]/30 hover:-translate-y-2 hover:scale-110">
                          <Image
                            src={tool}
                            alt={`Development tool ${index + 1}`}
                            className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110"
                          />

                          {/* 悬停光效 */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#84b9cb]/20 via-transparent to-[#e0ebaf]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* 悬停时的脉冲效果 */}
                        {hoveredTool === index && (
                          <div className="absolute inset-0 bg-[#84b9cb]/30 rounded-2xl animate-ping pointer-events-none"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                {processData.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative overflow-hidden opacity-0 animate-fade-in"
                    style={{ animationDelay: `${idx * 350}ms` }}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt || `step-${idx + 1}`}
                        width={670}
                        height={670}
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      <div className="p-6">
                        <p className="text-[#4c6473] dark:text-[#f8f4e6]">
                          {item.text}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => setShowProcess(false)}
                  className="absolute bottom-4 right-4 group bg-gradient-to-r from-[#4c6473] to-[#2f5d50] hover:from-[#84b9cb] hover:to-[#4c6473] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
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
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
