import user_image from "./user-image.jpg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import nextjs from "./nextjs.png";
import python from "./python.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";

import more_icon from "./more_icon.png";
import contact_icon from "./contact_icon.png";

import more_icon_dark from "./more_icon_dark.png";
import contact_icon_dark from "./contact_icon_dark.png";

import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";

import right_arrow from "./right-arrow.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  contact_icon,
  contact_icon_dark,
  more_icon,
  more_icon_dark,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  nextjs,
  python,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,

  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,

  right_arrow,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Toronto NCLM church website ",
    description:
      "This is a website I am currently working on independently. On this website, I have developed an activity creating and applying function and a sermon player for streaming the church’s video and audio materials. I use two layers of external services for data storage: Cloudflare R2 and Supabase. Cloudflare R2 is used to store .mp3 and .mp4 files, while Supabase is used to manage database tables and file link information.",
    bgImage: "/work-4.png",
    techStack: "Next.js, Prisma, Tailwind CSS, Cloudflare R2, Supabase.",
    createdAt: "May, 2025 --- August, 2025",
    link: "https://newcreationlife.vercel.app/",
  },
  {
    title: "Mental Health App",
    description:
      "Capstone project --- This is a mobile application with comprehensive features to promote mental health. I am currently developing it with my team. I am solely responsible for the coding, while my teammates handle UI, UX, and graphic design.",
    bgImage: "/work-2.png",
    techStack:
      "The tech stack includes Next.js, Prisma, Tailwind CSS, and Railway for database management. I also integrate external services such as OpenAi, Daily, Twilio, and NextAuth.",
    createdAt: "May, 2025 --- August, 2025",
    link: "https://mental-health-seven-lake.vercel.app/",
  },
  {
    title: "Invoice Notebook",
    description: "Full Stack Frond End App",
    bgImage: "/work-1.png",
    techStack: "Next.js, Tailwind CSS, drizzle-orm, stripe",
    createdAt: "May, 2025",

    link: "https://wanlong-full-stack-invoice.vercel.app/",
  },
  {
    title: "Hamburger Home",
    description: "React App",
    bgImage: "/work-3.png",
    techStack: "React",
    createdAt: "March, 2025 ",
    link: "https://buy-hamburger-home.vercel.app/",
  },
];

export const designData = [
  {
    bgImage: "/images/design1.jpg",
    title: "Logo Design",
    description: "Good design is innovative...",
    carouselImages: [
      "/images/logo_design/logo1.jpg",
      "/images/logo_design/logo2.jpg",
      "/images/logo_design/logo3.jpg",
      "/images/logo_design/logo4.jpg",
      "/images/logo_design/logo5.jpg",
      "/images/logo_design/logo6.jpg",
      "/images/logo_design/logo7.jpg",
      "/images/logo_design/logo8.jpg",
      "/images/logo_design/logo9.jpg",
      "/images/logo_design/logo10.jpg",
      "/images/logo_design/logo11.jpg",
      "/images/logo_design/logo12.jpg",
    ],
  },
  {
    bgImage: "/images/design3.jpg",
    title: "Starry Night Manipulation",
    description: "Tribute to Van Gogh...",
    carouselImages: [
      "/images/star_design/star1.jpg",
      "/images/star_design/star2.jpg",
      "/images/star_design/star3.jpg",
      "/images/star_design/star4.jpg",
    ],
  },
  {
    bgImage: "/images/design2.jpg",
    title: "Creative drawing",
    description: "Assembly of ART...",

    carouselImages: [
      "/images/brand_design/dream1.jpg",
      "/images/brand_design/dream2.jpg",
      "/images/brand_design/dream3.jpg",
      "/images/brand_design/dream4.jpg",
      "/images/brand_design/dream5.jpg",
      "/images/brand_design/dream6.jpg",
      "/images/brand_design/dream7.jpg",
      "/images/brand_design/dream8.jpg",
      "/images/brand_design/dream9.jpg",
    ],
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Develop Stacks",
    description: "HTML, CSS, Tailwind, JavaScript, React, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description:
      "I will graduate from the Southern Alberta Institute of Technology on August 31.",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Built Projects",
    description:
      "I have developed multiple projects. At present, I’m building a website for New Creation Life Ministries Church in Toronto and working on my capstone project — a mental health application.",
  },
];

export const toolsData = [
  assets.vscode,
  assets.nextjs,
  assets.mongodb,
  assets.python,
  assets.git,
];

export const processData = [
  {
    type: "image",
    src: "/process/process1.jpg",
    alt: "process1",
  },
  {
    type: "image",
    src: "/process/process2.jpg",
    alt: "process2",
  },
  {
    type: "image",
    src: "/process/process3.jpg",
    alt: "proces3",
  },
  {
    type: "image",
    src: "/process/process4.jpg",
    alt: "process4",
  },
  {
    type: "image",
    src: "/process/step1.jpg",
    alt: "Step1",
  },
  {
    type: "image",
    src: "/process/step2.jpg",
    alt: "Step2",
  },
  {
    type: "image",
    src: "/process/step3.jpg",
    alt: "Step3",
  },
  {
    type: "image",
    src: "/process/step4.jpg",
    alt: "Step4",
  },
  {
    type: "image",
    src: "/process/step5.jpg",
    alt: "Step5",
  },
  {
    type: "image",
    src: "/process/step6.jpg",
    alt: "Step6",
  },
  {
    type: "image",
    src: "/process/step7.jpg",
    alt: "Step7",
  },
  {
    type: "image",
    src: "/process/step8.jpg",
    alt: "Step8",
  },
  {
    type: "image",
    src: "/process/step9.jpg",
    alt: "Step9",
  },
  {
    type: "image",
    src: "/process/step10.jpg",
    alt: "Step10",
  },
  {
    type: "image",
    src: "/process/step11.jpg",
    alt: "Step11",
  },
  {
    type: "image",
    src: "/process/step12.jpg",
    alt: "Step12",
  },
  {
    type: "image",
    src: "/process/step13.jpg",
    alt: "Step13",
  },
  {
    type: "image",
    src: "/process/step14.jpg",
    alt: "Step14",
  },
];
