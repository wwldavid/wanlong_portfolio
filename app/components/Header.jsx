import Image from "next/image";
import React, { useState } from "react";
import { assets } from "../assets/assets";

const Header = ({ isDarkMode }) => {
  const [showResume, setShowResume] = useState(false);
  const toggleResume = () => {
    setShowResume((prev) => !prev);
  };
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4">
      <div className="flex gap-8 mb-6">
        <div>
          <Image
            src={assets.profile_img}
            alt="profile img"
            className=" rounded-full w-32"
          />
        </div>
        <h3 className="flex items-end gap-3 text-xl md:text-2xl">
          Hi, I&apos;m David Wanlong Wu{" "}
          <Image
            src={assets.python}
            alt="python icon"
            className="w-10 animate-spinSlow"
          />
        </h3>
      </div>
      <h1 className="text-3xl sm:text-6xl lg:text-[60px] text-[#84b9cb]">
        Frontend web developer <br /> in Alberta.
      </h1>
      <p className="max-w-2xl mx-auto">
        I am a frontend developer from Alberta, Canada. I will graduate from
        South Alberta Institute of Technology on August 2025.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
        <a
          href="#contact"
          className="px-6 py-2 border border-white rounded-full bg-[#84b9cb] text-white flex items-center gap-3 dark:bg-transparent"
        >
          Contact me{" "}
          <Image
            src={assets.right_arrow_white}
            alt="arrow img"
            className="w-4"
          />
        </a>
        <button
          onClick={toggleResume}
          download
          className="px-6 py-2 border rounded-full border-gray-500 flex items-center gap-3 bg-[#f8f4e6] dark:text-black"
        >
          {showResume ? "Close resume" : "My resume"}
          <Image
            src={assets.download_icon}
            alt="download icon"
            className="w-4"
          />
        </button>
      </div>
      {showResume && (
        <div className="relative text-left mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md w-full max-w-2xl mx-auto border dark:border-gray-700 text-sm leading-6">
          <p>
            <strong>Wanlong Wu</strong>
            <br />
            Web Design & Development Specialist
            <br />
            4115 67st NW, Calgary, AB, Canada
            <br />
            <a href="mailto:Wanlong.Wu@edu.sait.ca">Wanlong.Wu@edu.sait.ca</a> |
            davidwu.web@gmail.com ｜403-888-3609
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/david-wanlong"
              className="underline text-blue-600"
            >
              linkedin.com/in/david-wanlong
            </a>
          </p>

          <h2 className="mt-4 font-semibold">Professional Profile</h2>
          <ul className="list-disc list-inside">
            <li>
              Proficient in developing dynamic and interactive website
              architecture.
            </li>
            <li>
              Experienced in modern web development tools and programming
              languages like JavaScript, React, and TypeScript.
            </li>
            <li>
              Skilled in preparing reports, manuals and other documentation on
              software status and maintenance.
            </li>
            <li>
              Excellent problem-solving skills, adaptability, and collaborative
              teamwork.
            </li>
          </ul>

          <h2 className="mt-4 font-semibold">Education</h2>
          <p>
            <strong>Diploma in Web Design & Development</strong>
            <br />
            SAIT – School of Advanced Digital Technology (2024.1 – Present)
          </p>
          <ul className="list-disc list-inside">
            <li>Database Programming and Testing</li>
            <li>Programming Language</li>
            <li>Web Application Development</li>
            <li>Web Security Fundamentals</li>
          </ul>

          <h2 className="mt-4 font-semibold">Project Experience</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Yonghai’s Oil-Painting Gallery Website</strong>
              <br />
              Built with React, Next.js, Tailwind CSS. <br />
              <a
                href="https://wwldavid.github.io/Yonghai-gallery/"
                className="underline text-blue-600"
              >
                View project
              </a>
            </li>
            <li>
              <strong>Personal Portfolio Website</strong>
              <br />
              Responsive design using modern frameworks and CSS. <br />
              <a
                href="https://wwldavid.github.io/personal_portfolio_responsive/"
                className="underline text-blue-600"
              >
                View project
              </a>
            </li>
          </ul>

          <h2 className="mt-4 font-semibold">Skills</h2>
          <ul className="list-disc list-inside">
            <li>
              Languages & Frameworks: JavaScript, Python, React, TypeScript,
              Next.js, D3.js, Tailwind CSS
            </li>
            <li>Tools: Photoshop, Illustrator, Figma, Git, Excel</li>
            <li>Soft Skills: Communication, multitasking, teamwork</li>
          </ul>

          <h2 className="mt-4 font-semibold">Volunteer Experience</h2>
          <p>
            Equipment organization, reception, and distribution of items at
            Foothill United Church (Bowness Church)
          </p>

          <h2 className="mt-4 font-semibold">Hobbies</h2>
          <p>Running, swimming, reading</p>
          <button
            onClick={toggleResume}
            className="absolute bottom-3 right-4 px-2 py-1 text-base border rounded-full border-gray-500 flex items-center gap-3 bg-[#f8f4e6] dark:text-black"
          >
            × Close Resume
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
