import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import DevForum from "@/public/devForum.png";
import ViNEXT from "@/public/vinext.png";
import twitter from "@/public/twitter.png";

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
    location: "Chandigarh, India",
    description:
      "Pursuing Bachelor of Technology in Computer Science & Engineering (Core)",
    remarks: "Current CGPA: 8.2",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Present*",
  },
  {
    title: "Kendriya Vidyalaya, Bokaro Thermal",
    location: "Bokaro, India",
    description: "Completed Intermediate in Computer Science (Non Medical)",
    remarks: "Percentage: 87%",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2021",
  },
  {
    title: "Kendriya Vidyalaya, Bokaro Thermal",
    location: "Bokaro, India",
    description: "Completed Matriculation",
    remarks: "Percentage: 85%",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2019",
  },
] as const;

export const projectsData = [
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
    projectLink: "https://dev-forum-rupesh-dev30s-projects.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/DevForum"
  },
  {
    title: "ViNEXT",
    description:
      "Video conferencing web application with a focus on high-quality video streaming and low-latency communication.",
    tags: ["Next.js", "ShadCN", "Clerk", "Stream", "TypeScript", "TailwindCSS"],
    imageUrl: ViNEXT,
    projectLink: "https://vinext-five.vercel.app/",
    githubLink: "https://github.com/rupesh-dev30/VINEXT"
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
