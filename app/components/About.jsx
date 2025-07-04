import React, { useState } from "react";
import { assets, infoList, toolsData } from "../assets/assets";
import Image from "next/image";

const About = ({ isDarkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      id="about"
      className="relative w-full px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#84b9cb]/10 to-[#e0ebaf]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-gradient-to-bl from-[#f8f4e6]/20 to-[#4c6473]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-[#2f5d50]/15 to-[#84b9cb]/15 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#2f5d50] via-[#4c6473] to-[#84b9cb] dark:from-[#84b9cb] dark:via-[#e0ebaf] dark:to-[#f8f4e6] bg-clip-text text-transparent leading-tight">
            About Me
          </h2>
          <p className="text-[#4c6473]/80 dark:text-[#f8f4e6]/80 mt-4 text-lg max-w-2xl mx-auto">
            Crafting modern web experiences with passion and precision
          </p>
        </div>

        <div className="flex w-full flex-col lg:flex-row items-start gap-16 lg:gap-20">
          <div className="w-full lg:w-auto flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#84b9cb] via-[#e0ebaf] to-[#f8f4e6] rounded-3xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

              <div className="absolute -inset-2 bg-gradient-to-br from-[#2f5d50]/20 via-[#4c6473]/20 to-[#84b9cb]/20 rounded-2xl"></div>

              <div className="relative bg-gradient-to-br from-[#f8f4e6] to-[#e0ebaf] dark:from-[#2f5d50] dark:to-[#4c6473] p-3 rounded-2xl shadow-2xl">
                <Image
                  src={assets.user_image}
                  alt="David Wanlong Wu"
                  className="w-64 sm:w-80 rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-[#2f5d50] to-[#4c6473] text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
                <span className="animate-pulse"> Graduating 2025</span>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="mb-12 p-6  dark:from-[#2f5d50]/30 dark:via-[#4c6473]/20 dark:to-transparent rounded-2xl border border-[#4c6473]/20 dark:border-[#84b9cb]/20 backdrop-blur-sm">
              <div className="mb-12 p-6  dark:from-[#2f5d50]/30 dark:via-[#4c6473]/20 dark:to-transparent rounded-2xl border border-[#4c6473]/20 dark:border-[#84b9cb]/20 backdrop-blur-sm">
                <p className="text-[#4c6473] dark:text-[#f8f4e6] leading-relaxed text-lg">
                  Hi, I&apos;m{" "}
                  <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                    David Wanlong Wu
                  </span>
                  , a web development student at the{" "}
                  <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                    Interactive Design Department of Southern Alberta Institute
                    of Technology (SAIT)
                  </span>
                  , expected to graduate in{" "}
                  <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                    August 2025
                  </span>
                  . Throughout my studies at SAIT, I have gained hands-on
                  experience with a variety of design and development tools,
                  including{" "}
                  <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                    Photoshop, Illustrator, Figma, Premiere Pro, and After
                    Effects
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
                  mental health web application. In this project, I am
                  responsible for all coding tasks, while my teammates focus on
                  branding and user interface design.
                  <br />
                  <br />
                  Through these projects, I&apos;ve developed strong skills in{" "}
                  <span className="font-semibold text-[#2f5d50] dark:text-[#84b9cb]">
                    team collaboration, problem-solving, and time management
                  </span>
                  . I am passionate about creating meaningful digital
                  experiences and always strive to write clean, maintainable
                  code. I enjoy learning new technologies and applying them to
                  real-world problems. My goal is to build inclusive, engaging,
                  and impactful web experiences that serve both clients and
                  users. I am eager to continue growing as a developer and to
                  contribute to projects that make a positive difference.
                </p>
              </div>
            </div>

            {/* <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#2f5d50] dark:text-[#84b9cb] mb-8 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[#84b9cb] to-[#e0ebaf] rounded-full"></div>
                Core Competencies
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {infoList.map(
                  ({ icon, iconDark, title, description }, index) => {
                    const isExpanded = expandedIndex === index;
                    return (
                      <div
                        key={index}
                        className={`group relative bg-gradient-to-br from-[#f8f4e6]/60 via-[#e0ebaf]/40 to-[#f8f4e6]/20 dark:from-[#2f5d50]/60 dark:via-[#4c6473]/40 dark:to-[#2f5d50]/30 rounded-2xl p-6 border border-[#4c6473]/20 dark:border-[#84b9cb]/30 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#84b9cb]/20 hover:-translate-y-2 cursor-pointer ${
                          isExpanded
                            ? "shadow-2xl shadow-[#84b9cb]/30 -translate-y-1"
                            : ""
                        }`}
                        style={{
                          minHeight: isExpanded ? "auto" : "280px",
                        }}
                      >

                        <div className="absolute inset-0 bg-gradient-to-r from-[#84b9cb]/10 via-transparent to-[#e0ebaf]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                        <div className="relative z-10 mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-[#2f5d50] to-[#4c6473] dark:from-[#84b9cb] dark:to-[#e0ebaf] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={isDarkMode ? iconDark : icon}
                              alt={title}
                              className="w-8 h-8"
                            />
                          </div>
                        </div>


                        <h4 className="relative z-10 text-xl font-bold text-[#2f5d50] dark:text-[#f8f4e6] mb-3 group-hover:text-[#4c6473] dark:group-hover:text-[#84b9cb] transition-colors duration-300">
                          {title}
                        </h4>


                        <div className="relative z-10">
                          <p
                            className={`text-[#4c6473]/80 dark:text-[#f8f4e6]/90 leading-relaxed transition-all duration-300 ${
                              !isExpanded ? "line-clamp-4" : ""
                            }`}
                          >
                            {description}
                          </p>


                          {!isExpanded && (
                            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#f8f4e6]/90 via-[#f8f4e6]/60 to-transparent dark:from-[#2f5d50]/90 dark:via-[#2f5d50]/60 dark:to-transparent pointer-events-none"></div>
                          )}
                        </div>


                        <button
                          className="relative z-20 mt-4 px-4 py-2 bg-gradient-to-r from-[#2f5d50] to-[#4c6473] hover:from-[#4c6473] hover:to-[#84b9cb] text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(index);
                          }}
                        >
                          {isExpanded ? "Show less ▲" : "Show more ▼"}
                        </button>
                      </div>
                    );
                  }
                )}
              </div>
            </div> */}

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
