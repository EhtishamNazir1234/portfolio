import React, { useEffect } from "react";
import { RiGithubFill, RiReactjsLine } from "react-icons/ri";
import { useTheme } from "../context/ThemeContext";
import { getThemeClasses } from "../utils/themeClasses";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const Technologies = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  const danceAnimation = {
    hidden: { y: 0 },
    dance: {
      y: [-10, 0, -10],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const technologies = [
    {
      icon: RiGithubFill,
      color: "text-white-400",
      name: "GitHub",
      url: "https://github.com",
    },
    {
      icon: RiReactjsLine,
      color: "text-cyan-400",
      name: "React",
      url: "https://reactjs.org",
    },
    {
      icon: SiMongodb,
      color: "text-green-500",
      name: "MongoDB",
      url: "https://www.mongodb.com",
    },
    {
      icon: DiMysql,
      color: "text-green-900",
      name: "MySQL",
      url: "https://www.mysql.com",
    },
    {
      icon: FaNodeJs,
      color: "text-green-500",
      name: "Node.js",
      url: "https://nodejs.org",
    },
  ];

  return (
    <section
      className={`${theme.background} ${theme.text} border-b ${theme.border}`}
    >
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {technologies.map((tech, index) => (
            <motion.a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-2xl border-4 ${
                isDark ? "border-neutral-800" : "border-gray-200"
              } p-6
                relative group cursor-pointer no-underline block`}
              initial="hidden"
              animate="dance"
              variants={danceAnimation}
              transition={{
                delay: index * 0.2, // Creates sequence effect
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              whileHover={{
                scale: 1.1,
                y: 0, // Stop dancing on hover
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <tech.icon
                className={`text-7xl ${tech.color} transition-transform group-hover:scale-110`}
              />
              <motion.span
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full
                  text-sm opacity-0 group-hover:opacity-100 group-hover:-bottom-8
                  ${
                    isDark
                      ? "bg-neutral-800 text-neutral-300"
                      : "bg-gray-100 text-gray-800"
                  }`}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {tech.name}
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
