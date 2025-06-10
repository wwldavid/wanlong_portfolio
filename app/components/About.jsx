import React, { useState } from "react";
import { assets, infoList, toolsData } from "../assets/assets";
import Image from "next/image";

const About = ({ isDarkMode }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* <h4 className="text-center mb-2 text-lg">Introduction</h4> */}
      <h2 className="text-center text-5xl text-[#84b9cb]">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm-w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user image"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            Hi, I&apos;m David Wanlong Wu, a web developer currently studying
            Web Design & Development at Southern Alberta Institute of
            Technology, graduating in August 2025. I specialize in building
            responsive, modern web applications using technologies like React,
            Next.js, and relational databases such as PostgreSQL.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <li
                  key={index}
                  className="relative border-[0.5px] border-gray-400 rounded-xl p-6 pb-14 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                  style={{
                    height: isExpanded ? "auto" : "210px",
                    overflow: isExpanded ? "visible" : "hidden",
                  }}
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7"
                  />
                  <h3 className="my-2 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>

                  <div className="relative">
                    <p
                      className={`text-gray-600 text-sm dark:text-white/80 ${
                        !isExpanded ? "max-h-[100px] overflow-hidden" : ""
                      }`}
                    >
                      {description}
                    </p>

                    {!isExpanded && (
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/90 dark:from-gray-900/95 to-transparent pointer-events-none z-10"></div>
                    )}
                  </div>

                  <button
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm text-blue-500 underline dark:text-blue-400 z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(index);
                    }}
                  >
                    {isExpanded ? "Show less ▲" : "Show more ▼"}
                  </button>
                </li>
              );
            })}
          </ul>

          <h4 className="my-6 text-gray-700 dark:text-white/80">
            My Development Toolkit
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-full cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
