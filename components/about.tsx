"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";  // Import useTheme hook

export default function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();  // Get the current theme

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] text-center leading-10 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p
        className={`mb-3 font-normal text-[18px] ${
          theme === "light" ? "text-black" : "text-[#ffffffab]"  // Conditionally apply text color
        }`}
      >
        As a{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"  // Conditionally apply text color
          }`}
        >
          BTech
        </span>{" "}
        student with a deep passion for{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          full-stack web development
        </span>
        , I am dedicated to mastering{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          data structures & algorithms
        </span>
        , and various programming languages, including{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          C, C++, Javascript, Java, and Python
        </span>
        . I love the challenge of applying theoretical knowledge to{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          real-world projects
        </span>
        , and{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          problem-solving
        </span>{" "}
        is the aspect of development I enjoy the most. My core focus lies in
        building{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          efficient
        </span>{" "}
        and scalable systems, and I am always eager to learn new technologies.
        Currently, I&apos;m advancing my skills in web development with tools
        like{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          React, Next.js, Node.js
        </span>
        , and more. I am seeking opportunities to grow as a{" "}
        <span className="font-medium">software developer</span> and contribute
        to innovative projects.
      </p>

      <p className={`text-[18px] mt-6 ${theme === "light" ? "text-black" : "text-[#ffffffab]"}`}>
        <span className="font-normal">When I&apos;m not coding</span>, I love playing
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          {" "}
          video games , watching movies, and exploring new technology{" "}
        </span>
        <span className="font-medium"></span>. I&apos;m always curious about the
        latest advancements in tech and enjoy staying up-to-date with emerging
        trends. These activities help me unwind while also fueling my passion
        for{" "}
        <span
          className={`font-extrabold italic text-[20px] ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          continuous learning.
        </span>
      </p>
    </motion.section>
  );
}
