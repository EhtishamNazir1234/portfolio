import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const experiences = [
  
  {
    role: "Frontend Developer",
    company: "IIfa Tech",
    duration: "2022 - 2023",
    description:
      "Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.",
    technologies: [
      <RiReactjsLine className="text-4xl text-cyan-400" />,
      <TbBrandNextjs className="text-4xl text-neutral-100" />,
    ],
  },
  
];

const Experience = () => {
  return (
    <section className="text-white border-neutral-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-neutral-800 pb-6">
              <p className="text-sm text-gray-400">{exp.duration}</p>
              <h3 className="text-xl font-semibold mt-2">
                {exp.role} -{" "}
                <span className="text-blue-400">{exp.company}</span>
              </h3>
              <p className="text-gray-300 mt-4">{exp.description}</p>
              <div className="flex gap-4 mt-4">
                {exp.technologies.map((icon, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border-4 border-neutral-800 p-2"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
