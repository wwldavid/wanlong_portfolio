import React from "react";
import { assets, workData } from "../assets/assets";
import Image from "next/image";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My portfolio</h4>
      <h2 className="text-center text-5xl">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-t mb-12">
        Welcom to my web development portfolio! Explore a collection of projects
        showcasing my expertise in front end development.
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map(({ title, description, bgImage, link }, index) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-md relative cursor-pointer group"
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="bg-[#cee4ae] w-8/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-gray-700">{description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more{" "}
        <Image
          src={isDarkMode ? assets.more_icon_dark : assets.more_icon}
          alt="more icon"
          className="w-8"
        />
      </a>
    </div>
  );
};

export default Work;
