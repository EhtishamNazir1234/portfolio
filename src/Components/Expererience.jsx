import React from "react";
// import { RiReactjsLine } from "react-icons/ri";
// import { TbBrandNextjs } from "react-icons/tb";
import {  useTheme } from "../context/ThemeContext";
const experiences = [
  {
    role: "Full Stack Developer",
    company: "IIfa Tech",
    year: "2024 - Present ",
    description:
      "Designed and developed user interfaces for web applications using Node.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    technologies: ["React.js","Express.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
];

const Experience = () => {
  const { isDark } = useTheme();
  return (
     <section
      id="projects"
      className={`border-b ${
        isDark
          ? "border-neutral-800 bg-neutral-900 text-white"
          : "border-gray-200 bg-white text-neutral-900"
      }`}
    >
    <div className="border-b border-neutral-900 pb-4 "> {/* Added pt-24 for top padding */}
      <h2 className="text-4xl text-center my-10">Experience</h2>
      <div className="max-w-5xl mx-auto px-4">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="mb-8 grid grid-cols-1 lg:grid-cols-4 gap-4"
          >
            <div className="lg:text-right">
              <p className="text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="lg:col-span-3 mx-20">
              <h3 className="text-xl font-medium">
                {experience.role}-{experience.company}
              </h3>

              <p className="text-neutral-300 mb-5 font-light">{experience.description}</p>
              <div className="flex gap-3">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-medium bg-purple-500/10 text-purple-400 rounded-md border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}    
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Experience;
