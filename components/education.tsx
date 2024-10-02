"use client";

import React from "react";
import SectionHeading from "./section-heading";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { education } from "@/lib/data";
import { IoIosSchool } from "react-icons/io";

export default function Education() {
  const { ref } = useSectionInView("Education");
  const { theme } = useTheme();

  return (
    <section id="education" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 w-[50vw] m-auto">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#d1d5db" : "rgba(255, 255, 255, 0.2)"}
      >
        {education.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(62, 62, 65, 0.295)",
              color: theme === "light" ? "#000" : "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                theme === "light" ? "rgb(209, 213, 219)" : "rgb(168, 187, 202)"
              }`,
            }}
            date={item.date}
            iconStyle={{
              background:
                theme === "light" ? "rgb(209, 213, 219)" : "rgb(26, 25, 53)",
              color: "#fff",
            }}
            icon={<IoIosSchool />}
          >
            <h3 className="vertical-timeline-element-title font-extrabold">
              {item.title}
            </h3>
            <h4
              className={`vertical-timeline-element-subtitle ${
                theme === "light" ? "text-[#0000008e]" : "text-[#ffffff8e]"
              }`}
            >
              {item.location}
            </h4>
            <p>{item.description}</p>
            <p>{item.remarks}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
