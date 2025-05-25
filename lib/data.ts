import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import DevForum from "@/public/devForum.png";
import twitter from "@/public/twitter.png";
import hinglish from "@/public/hinglish.png";
import store from "@/public/store.png";
import mess from "@/public/mess.png";

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
    title: "Hinglish Programming Language",
    description:
      "Hinglish Programming Language ek mazedaar interpreted language hai jismein aap Hinglish syntax se code likh sakte ho – jaise 'print karo.",
    tags: [
      "React.js",
      "Tailwind CSS",
      "TypeScript",
      "ShadCN",
    ],
    imageUrl: hinglish,
    projectLink: "https://hinglish-language.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/Hinglish-Language"
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
    githubLink: "https://github.com/rupesh-dev30/DevForum"
  },
  {
    title: "Mess Management App",
    description:
      "Mess Management app simplifies menu and order with an admin panel for staff and a user panel for customers to place orders.",
    tags: [
      "React Native",
      "Expo",
      "Supabase",
      "Supabase auth",
    ],
    imageUrl: mess,
    projectLink: "https://github.com/rupesh-dev30/Mess-Management",
    githubLink: "https://github.com/rupesh-dev30/Mess-Management"
  },

  {
    title: "Store Karle",
    description:
      "Store-Karle is like a google drive, here you can store anything on cloud upto 2GB",
    tags: ["Next.js", "ShadCN", "Appwrite","TypeScript", "TailwindCSS"],
    imageUrl: store,
    projectLink: "https://store-management-six.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/Store-Karle"
  },
  {
    title: "Full Stack Twitter Clone",
    description: "Twitter clone",
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
    githubLink: "https://github.com/rupesh-dev30/Full-Stack-Twitter-Clone"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "C",
  "C++",
  "Python",
  "Java",
  "Framer Motion",
] as const;
