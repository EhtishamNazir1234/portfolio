import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { getThemeClasses } from '../utils/themeClasses';

const Projects = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  const projects = [
    {
      title: "Ibadah-Web App",
      description:
        "Ibadah is an Islamic-themed web application designed to help Muslims enhance their daily spiritual practices developed using MERN Stack.",
      image: "/ibadah.png", // Add your image path
      technologies: ["React", "Express.js", "Node.js", "MongoDB"],
      liveLink: "https://ibadah-mu.vercel.app/",
      githubLink: "https://github.com/EhtishamNazir1234/Ibadah",
    },
    {
      title: "IIFA TECH LMS",
      description:
        "IIFA TECH LMS is a Learning Management System designed to facilitate online learning and course management and to assist the organization in managing the internees, employees and the admins.",
      image: "/iifalms.png", // Add your image path
      technologies: ["React", "Express.js", "Node.js", "MongoDB"],
    },
    {
      title: "MERN Blog App",
      description:
        " MERN Blog app is a web app developed in MERN.It allows users to create, read, update, and delete blog posts with a responsive and user-friendly interface.The interesting thing in it is that it has no library used in it.",
      image: "/blog.png", // Add your image path
      technologies: ["React", "Express.js", "Node.js", "MongoDB"],
      liveLink: "https://mern-blog-ixd6.vercel.app/",
      githubLink: "https://github.com/EhtishamNazir1234/Mern-Blog",
    },
    // Add more projects as needed
  ];

  return (
    <section className={`${theme.background} ${theme.text} border-b ${theme.border}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${theme.card} group relative overflow-hidden rounded-lg ${theme.hover}`}
          >
            <div
              className="h-72 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-neutral-300 mb-4 text-center">
                {project.description}
              </p>
              <div className="flex gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-neutral-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-400 text-neutral-900 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-neutral-900 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
