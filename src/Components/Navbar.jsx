import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
// import logo from "../assets/logo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    // Update this path to match your resume file name
    const resumePath = "/EhtishamNazirResume.pdf";
    
    // Create a link element
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = "EhtishamNazirResume.pdf"; // Change to your preferred download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "technologies" },
    { name: "Experience", to: "experience" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed  w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-neutral-900/80 backdrop-blur-md py-4"
          : "bg-transparent "
      }`}
    >
      <div className="container mx-auto py-3 px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl mx-6 font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
          >
            EN
          </motion.div>

          <div className="hidden md:flex items-center  space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="text-neutral-300 hover:text-cyan-400 cursor-pointer transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={handleResumeDownload}
            className="hidden md:block px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-neutral-900 transition-all"
          >
            Resume
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-neutral-300 hover:text-cyan-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
