import React from "react";

export default function ResumeModal({ onClose }) {
  return (
    <div className="relative text-left mt-8 p-6 bg-white text-black dark:bg-[#1e1e1e] dark:text-white rounded-lg shadow-md w-full max-w-2xl mx-auto border dark:border-gray-700 text-sm leading-6">
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
          Proficient in developing dynamic and interactive website architecture.
        </li>
        <li>
          Experienced in modern web development tools and programming languages
          like JavaScript, React, and TypeScript.
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
        Equipment organization, reception, and distribution of items at Foothill
        United Church (Bowness Church)
      </p>

      <h2 className="mt-4 font-semibold">Hobbies</h2>
      <p>Running, swimming, reading</p>
      <button
        onClick={onClose}
        className="absolute bottom-3 right-4 px-2 py-1 text-base border rounded-full border-gray-500 flex items-center gap-3 bg-[#f8f4e6] text-black dark:bg-gray-200 dark:text-black"
      >
        × Close Resume
      </button>
    </div>
  );
}
