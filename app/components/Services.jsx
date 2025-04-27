import React from "react";
import { assets, serviceData } from "../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I offer</h4>
      <h2 className="text-center text-5xl">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-t mb-12">
        I’m passionate about creating clean, efficient code and solving
        real-world problems through scalable, full-stack solutions. Always eager
        to learn and improve, I’m excited to contribute to innovative
        development teams.
      </p>

      <div className="grid grid-cols-auto gap-6 my-10">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-md px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
              {description}
            </p>
            <a
              href={link}
              className="flex items-center gap-2 text-sm mt-5 dark:text-white/80"
            >
              Read more{" "}
              <Image
                src={assets.right_arrow}
                alt="right arrow icon "
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
