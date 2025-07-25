"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  projectLink,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const isEven = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-12 cursor-pointer max-w-3xl"
    >
      <section
        className={`bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 transition border border-black/5 rounded-lg overflow-hidden flex flex-col sm:flex-row ${
          isEven ? "sm:flex-row-reverse" : ""
        } hover:bg-gray-200 w-full`}
      >
        {/* Image */}
        <div className="sm:w-1/2 relative min-h-[200px]">
          <Link href={projectLink} target="_blank">
            <Image
              src={imageUrl}
              alt="Project preview"
              fill
              className={`object-cover transition-transform duration-300 group-hover:scale-[1.03] group-hover:rotate-1 ${
                isEven
                  ? "rounded-l-lg sm:rounded-r-none"
                  : "rounded-r-lg sm:rounded-l-none"
              }`}
            />
          </Link>
        </div>

        {/* Text Content */}
        <div className="flex-1 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold dark:text-white">{title}</h3>
            <p className="mt-3 text-gray-700 dark:text-white/70">
              {description}
            </p>
          </div>
          <ul className="flex flex-wrap mt-6 gap-2">
            {tags.map((tag, i) => (
              <li
                key={i}
                className="bg-black/70 dark:text-white/70 text-white px-3 py-1 text-xs uppercase tracking-wider rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          <Link
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-white hover:underline text-sm font-medium"
          >
            View Project ↗
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
