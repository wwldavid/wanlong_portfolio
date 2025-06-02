import React from "react";
import { assets, infoList, toolsData } from "../assets/assets";
import Image from "next/image";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About me</h2>
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
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
                key={index}
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </li>
            ))}
          </ul>

          <h4 className="my-6 text-gray-700 dark:text-white/80">
            My Development Toolkit
          </h4>

          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
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
