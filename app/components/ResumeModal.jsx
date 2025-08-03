import React from "react";

export default function ResumeModal({ onClose }) {
  return (
    <div className="relative text-left mt-8 p-6 bg-white text-black dark:bg-[#1e1e1e] dark:text-white rounded-lg shadow-md w-full max-w-4xl mx-auto border dark:border-gray-700 text-sm leading-6">
      <p>
        <strong>Wanlong Wu</strong>
        <br />
        Web Designer & React Web Developer
        <br />
        4115 67 St NW, Calgary, AB, Canada
        <br />
        <a href="mailto:davidwu.web@gmail.com">davidwu.web@gmail.com</a> ｜
        403-888-3609
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
          like JavaScript, React, Next.js, Tailwind CSS, and TypeScript.
        </li>
        <li>
          Skilled in preparing reports, manuals, and other documentation on the
          status, operation and maintenance of software.
        </li>
        <li>
          Excellent problem-solving skills, adaptability, and collaborative
          teamwork in delivering high-quality digital solutions.
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
      <p className="mt-2 font-semibold">Key Skills from Education:</p>
      <ul className="list-disc list-inside">
        <li>Developed wireframes, storyboards, and interactive designs.</li>
        <li>
          Built dynamic, responsive websites with component-based frameworks.
        </li>
        <li>
          Integrated user-focused design principles to refine and optimize
          digital products.
        </li>
      </ul>

      <h2 className="mt-4 font-semibold">Project Experience</h2>
      <ul className="space-y-6">
        <li>
          <p className="font-semibold">
            Capstone Project: Mental Health Mobile App —{" "}
            <span className="font-normal">
              Next.js, Prisma, Tailwind CSS, Railway, OpenAI, Twilio, Daily,
              NextAuth
            </span>
          </p>
          <p>
            Led full-stack development of a mobile-focused wellness app
            promoting mental well-being. Solely responsible for the coding;
            teammates focused on UI/UX and branding. Integrated AI chat support
            (OpenAI), secure video chat (Daily), SMS alerts (Twilio), and user
            authentication (NextAuth). Used Prisma for database ORM and hosted
            the PostgreSQL database on Railway.
          </p>
          <a
            href="https://mental-health-seven-lake.vercel.app/welcome"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        </li>

        <li>
          <p className="font-semibold">
            Toronto NCLM Church Website —{" "}
            <span className="font-normal">
              Next.js, Tailwind CSS, Supabase, Cloudflare R2
            </span>
          </p>
          <p>
            Independently developed a dynamic church website. Implemented
            features including an event creation system and a custom sermon
            media player supporting both audio and video streaming. Leveraged
            Supabase for structured database management and file links, and used
            Cloudflare R2 to store large media files (.mp3, .mp4).
          </p>
          <a
            href="https://newcreationlife.vercel.app/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        </li>

        <li>
          <p className="font-semibold">
            Yonghai’s Oil-Painting Gallery Website —{" "}
            <span className="font-normal">HTML, CSS, JavaScript</span>
          </p>
          <p>
            Built a static promotional website for a family-run oil painting
            business. Practiced foundational JavaScript interactivity and CSS
            layout techniques to create an elegant gallery interface.
          </p>
          <a
            href="https://wwldavid.github.io/Yonghai-gallery/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        </li>
        <li>
          <p className="font-semibold">
            Personal Portfolio Website —{" "}
            <span className="font-normal">Next.js, Tailwind CSS</span>
          </p>
          <p>
            Designed and developed a responsive personal portfolio to showcase
            web development skills. Emphasized modern layout techniques,
            optimized accessibility, and clean UI using Tailwind utility
            classes.
          </p>
          <a
            href="https://wanlong-portfolio.vercel.app/"
            className="underline text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
          </a>
        </li>
      </ul>

      <h2 className="mt-4 font-semibold">Skills</h2>
      <ul className="list-disc list-inside">
        <li>
          <strong>Programming & Development:</strong> JavaScript, React,
          Next.js, Tailwind CSS
        </li>
        <li>
          <strong>Code Mastery:</strong> Efficient at writing, modifying,
          integrating, and testing code
        </li>
        <li>
          <strong>Design Tools:</strong> Photoshop, Illustrator, Figma
        </li>
        <li>
          <strong>Other Tools:</strong> Git, MS Excel, MS Word
        </li>
        <li>
          <strong>Soft Skills:</strong> Communication, multitasking under
          pressure, teamwork
        </li>
      </ul>

      <h2 className="mt-4 font-semibold">Volunteer Experience</h2>
      <p>
        Assisted with equipment organization, reception, and distribution of
        items; responsible for maintenance and cleaning tasks at Foothill United
        Church (Bowness).
      </p>

      <h2 className="mt-4 font-semibold">Hobbies</h2>
      <p>Running, swimming, reading</p>

      <button
        onClick={onClose}
        className="absolute bottom-3 right-4 group bg-gradient-to-r from-[#4c6473] to-[#2f5d50] hover:from-[#84b9cb] hover:to-[#4c6473] text-white p-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <svg
          className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
