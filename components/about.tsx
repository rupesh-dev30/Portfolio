"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function About() {
  const { ref } = useSectionInView("About");
  const { theme } = useTheme();

  const isLight = theme === "light";
  const textColor = isLight ? "text-black" : "text-[#ffffffab]";
  const strongText = isLight ? "text-black" : "text-white";

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] text-center leading-10 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      {/* First paragraph with core skills and aspirations */}
      <p className={`mb-3 font-normal text-[18px] ${textColor}`}>
        I&apos;m an aspiring{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          Software Engineer
        </span>{" "}
        with a strong passion for{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          full-stack web and mobile development
        </span>
        . I specialize in building{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          scalable applications
        </span>{" "}
        using modern frameworks like{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          React, Next.js, React Native, Node.js and Nest.js
        </span>
        . My skills include creating responsive UIs, developing robust APIs, and
        implementing secure authentication systems.
      </p>

      {/* Second paragraph with certifications and problem-solving focus */}
      <p className={`mt-6 text-[18px] ${textColor}`}>
        I am an{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          AWS Academy-certified
        </span>{" "}
        professional with a solid understanding of{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          cloud computing, databases, and secure application development
        </span>
        . I&apos;m currently seeking a role where I can apply my skills in{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          problem-solving
        </span>{" "}
        and contribute to building impactful, innovative products.
      </p>

      {/* Third paragraph with hobbies and continuous learning */}
      <p className={`mt-6 text-[18px] ${textColor}`}>
        When I&apos;m not coding, I enjoy playing{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          video games
        </span>
        , watching{" "}
        <span className={`font-extrabold italic text-[20px] ${strongText}`}>
          movies
        </span>
        , and exploring the latest tech trends to stay current with the
        ever-evolving world of technology.
      </p>
    </motion.section>
  );
}
