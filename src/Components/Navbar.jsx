import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "EhtishamNazirResume.pdf"; // Change to your preferred download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "technologies" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects1" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-neutral-900/80 backdrop-blur-md py-4"
            : "bg-white/80 backdrop-blur-md py-4"
          : "bg-transparent"
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

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-300 hover:text-cyan-400 focus:outline-none"
          >
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center  space-x-8">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark ? "text-yellow-400" : "text-neutral-600"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>

            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active"
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
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden mt-4 rounded-lg ${
                isDark ? "bg-neutral-800" : "bg-white"
              }`}
            >
              <div className="flex flex-col space-y-4 p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      delay={0}
                      isDynamic={true} // Add this to handle dynamic content
                      spyThrottle={500} // Add this to improve scroll spy performance
                      onClick={() => setIsMenuOpen(false)}
                      className="text-neutral-300 hover:text-cyan-400 block py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleResumeDownload}
                  className="w-full px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-neutral-900 transition-all"
                >
                  Resume
                </motion.button>
                <motion.button
                  onClick={toggleTheme}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full ${
                    isDark ? "text-yellow-400" : "text-neutral-600"
                  }`}
                >
                  {isDark ? (
                    <>
                      <FaSun size={20} />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <FaMoon size={20} />
                      <span>Dark Mode</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
