import Image from "next/image";
import React from "react";
import { assets } from "../assets/assets";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20 pt-5">
      <div className="w-1/4 mx-auto sm:flex items-end">
        <Image src={assets.logo} alt="logo" className="w-36 mx-auto mb-2" />
        <div className="w-max mx-auto flex items-center gap-2 ">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="mail icon"
            className="w-6"
          />
          davidwu.web@gamil.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-2 py-6">
        <p> © 2025 Wanlong Wu. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/wwldavid">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="#">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
