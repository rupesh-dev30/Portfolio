import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import DevForum from "@/public/devForum.png";
import twitter from "@/public/twitter.png";
import hinglish from "@/public/hinglish.png";
import store from "@/public/store.png";
import mess from "@/public/mess.png";
import gta from "@/public/gta.png";
import foodDeliveryImage from "@/public/foodDeliveryImage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const education = [
  {
    title: "Chandigarh Engineering College - CGC Landran",
    location: "SAS Nagar Mohali, Punjab, India",
    description:
      "Pursuing Bachelor of Technology in Computer Science & Engineering (Core)",
    remarks: "Current CGPA: 8.2",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present*",
  },
  {
    title: "Kendriya Vidyalaya, Bokaro Thermal",
    location: "Bokaro Thermal, Jharkhand, India",
    description: "Completed Intermediate in Computer Science (Non Medical)",
    remarks: "Percentage: 87%",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Kendriya Vidyalaya, Bokaro Thermal",
    location: "Bokaro Thermal, Jharkhand, India",
    description: "Completed Matriculation",
    remarks: "Percentage: 85%",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
  {
    title: "GTA VI GSAP Website Clone",
    description:
      "Recreate the viral GTA VI website using React, Tailwind CSS, and GSAP. Includes scroll-driven video sync, parallax effects, pinned sections, image masking, and cinematic SplitText animations. A responsive, motion-rich experience powered by Vite and GSAP’s ScrollTrigger.",
    tags: ["React.js", "GSAP", "Tailwind CSS", "Vite"],
    imageUrl: gta,
    projectLink: "https://gta-vi-landing-page-zeta.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/GTA-VI-Landing-Page",
  },
  {
    title: "Food Delivery App",
    description:
      "A full-stack mobile food delivery app built with React Native, TypeScript, and Tailwind CSS (via NativeWind). Features Google Authentication, dynamic search, cart functionality, smooth navigation, and a modern responsive UI. Powered by Appwrite for backend, database, auth, and file storage. Follows scalable architecture with excellent developer experience.",
    tags: [
      "React Native",
      "Expo",
      "Appwrite",
      "NativeWind",
      "Tailwind CSS",
      "TypeScript",
      "Zustand",
      "Sentry",
    ],
    imageUrl: foodDeliveryImage, // replace with the actual image import
    projectLink:
      "https://github.com/rupesh-dev30/Food-Delivery-React-Native-App",
    githubLink:
      "https://github.com/rupesh-dev30/Food-Delivery-React-Native-App",
  },
  {
    title: "Hinglish Programming Language",
    description:
      "Hinglish Programming Language ek mazedaar interpreted language hai jismein aap Hinglish syntax se code likh sakte ho – jaise 'print karo.",
    tags: ["React.js", "Tailwind CSS", "TypeScript", "ShadCN"],
    imageUrl: hinglish,
    projectLink: "https://hinglish-language.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/Hinglish-Language",
  },
  {
    title: "DevForum",
    description:
      "DevForum allows developers to ask questions, provide answers, and engage in discussions within a community-driven platform.",
    tags: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "ShadCN",
      "Clerk",
    ],
    imageUrl: DevForum,
    projectLink: "https://devforum-eight.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/DevForum",
  },
  {
    title: "Mess Management App",
    description:
      "Mess Management app simplifies menu and order with an admin panel for staff and a user panel for customers to place orders.",
    tags: ["React Native", "Expo", "Supabase", "Supabase auth"],
    imageUrl: mess,
    projectLink: "https://github.com/rupesh-dev30/Mess-Management",
    githubLink: "https://github.com/rupesh-dev30/Mess-Management",
  },

  {
    title: "Store Karle",
    description:
      "Store-Karle is like a google drive, here you can store anything on cloud upto 2GB",
    tags: ["Next.js", "ShadCN", "Appwrite", "TypeScript", "TailwindCSS"],
    imageUrl: store,
    projectLink: "https://store-management-six.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/Store-Karle",
  },
  {
    title: "Full Stack Twitter Clone",
    description:
      "A full-featured Twitter clone with tweet posting, image uploads, and user profiles. Built with React, Express, MongoDB, and Cloudinary, this project demonstrates end-to-end web development with RESTful APIs and modern UI libraries.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful API",
      "JavaScript",
      "Cloudinary",
      "DaisyUI",
    ],
    imageUrl: twitter,
    projectLink: "https://twitter-clone-fdnp.onrender.com/",
    githubLink: "https://github.com/rupesh-dev30/Full-Stack-Twitter-Clone",
  },
] as const;

export const skillsData = [
  // Frontend Technologies
  "HTML",
  "CSS",
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "ReactJS",
  "React Native",
  "Next.js",
  "Redux",
  "Tailwind",
  "Tailwind CSS",
  "Framer Motion",

  // Backend Technologies
  "Node.js",
  "Express",
  "ExpressJS",
  "Nest.js",
  "Hono.js",
  "RESTful APIs",
  "JWT",
  "OAuth",

  // Databases & ORM
  "MongoDB",
  "PostgreSQL",
  "Prisma",

  // Dev & Cloud Tools
  "AWS Lambda",
  "S3",
  "EC2",
  "Git",
  "Docker",
  "Postman",
  "Clerk",

  // Languages
  "C",
  "C++",
  "Python",
  "Java",

  // AI Tools
  "ChatGPT",
  "Gemini",
  "Claude",
] as const;
