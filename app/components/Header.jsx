import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const Header = ({ isDarkMode }) => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="profile img"
          className=" rounded-full w-32"
        />
      </div>
      <h3 className="flex items-end gap-3 text-xl md:text-2xl mb-3">
        Hi, I'm Wanlong Wu{" "}
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[70px]">
        frontend web developer in Alberta
      </h1>
      <p className="max-w-2xl mx-auto">
        I am a frontend developer from Alberta, Canada graduated from South
        Alberta Institute of Technology.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-[#84b9cb] text-white flex items-center gap-3 dark:bg-transparent"
        >
          contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="arrow img"
            className="w-4"
          />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-3 bg-[#f8f4e6] dark:text-black"
        >
          my resume{" "}
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
