import React from "react";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl">My Design Works</h2>
      <h4 className="text-center mt-2 text-lg">( At SAIT )</h4>

      <p className="text-center max-w-2xl mx-auto mt-t mb-12">
        During my time in school, I also worked on several design
        practices—including Logo Design, UI/UX mockups, and branding
        systems—which deepened my appreciation for both aesthetics and
        functionality. I am always eager to learn and excited to contribute to
        innovative development teams.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ bgImage, title, description, link }, index) => (
          <div
            key={index}
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
              <a
                href={link}
                className="flex items-center gap-1 text-xs mt-2 text-gray-800 dark:text-white/80"
              >
                Read more{" "}
                <Image
                  src={assets.right_arrow}
                  alt="right arrow icon"
                  className="w-3"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
