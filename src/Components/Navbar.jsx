import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

// Simple utility to merge Tailwind class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Desktop navbar body (centered pill that shrinks on scroll)
const NavBody = ({ children, visible, isDark }) => {
  return (
    <motion.div
      animate={{
        width: visible ? "75%" : "100%",
        y: visible ? 10 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "mx-auto hidden max-w-6xl items-center justify-between rounded-full px-4 py-2 lg:flex",
        visible
          ? isDark
            ? "bg-white"
            : "bg-black/90"
          : "bg-transparent"
      )}
    >
      {children}
    </motion.div>
  );
};

// Center nav items with animated hover outline
const NavItems = ({ items, onItemClick, isDark, visible }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "relative hidden flex-1 flex-row items-center justify-center space-x-2 text-sm lg:flex pointer-events-auto",
        // In dark mode: when navbar is "settled" at top (not shrunk yet => !visible),
        // buttons should be white. When shrunk with white bg (visible), make them dark.
        isDark ? (visible ? "text-zinc-800" : "text-white") : "text-zinc-300"
      )}
    >
      {items.map((item, idx) => (
        <ScrollLink
          key={item.name}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          onMouseEnter={() => setHovered(idx)}
          onClick={() => {
            if (onItemClick) onItemClick();
          }}
          className="relative px-4 py-1.5 cursor-pointer"
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-outline"
              className="absolute inset-0 rounded-full border border-white/40"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}

          <span
            className={cn(
              "relative z-20 transition-colors",
              isDark
                ? visible
                  ? "hover:text-zinc-900"
                  : "hover:text-white"
                : "hover:text-zinc-50"
            )}
          >
            {item.name}
          </span>
        </ScrollLink>
      ))}
    </motion.div>
  );
};

// Mobile navbar container (glass effect on scroll)
const MobileNav = ({ children, visible, isDark }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(255, 255, 255, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        isDark ? "bg-white" : "bg-transparent"
      )}
    >
      {children}
    </motion.div>
  );
};

const MobileNavHeader = ({ children }) => {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      {children}
    </div>
  );
};

const MobileNavMenu = ({ children, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// EN logo – kept exactly as before (text logo) but clickable to scroll to top
const NavbarLogo = () => {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="relative z-20 flex items-center py-1 px-4 text-sm text-black focus:outline-none"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
      >
        EN
      </motion.div>
    </button>
  );
};

const NavbarButton = ({ children, className, ...props }) => {
  return (
    <button className={cn(className)} {...props}>
      {children}
    </button>
  );
};

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  const handleResumeDownload = () => {
    const resumePath = "/EhtishamNazirResume.pdf";
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "EhtishamNazirResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "technologies" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects1" },
    { name: "Contact", to: "contact" },
  ];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      {/* Desktop navbar using new pill-style layout */}
      <motion.div className="pointer-events-none flex w-full justify-center px-4">
        <NavBody visible={visible} isDark={isDark}>
          {/* Left: EN logo */}
          <div className="pointer-events-auto">
            <NavbarLogo />
          </div>

          {/* Center: nav items (same order / names as before) */}
          <NavItems items={navItems} isDark={isDark} visible={visible} />

          {/* Right: theme toggle + resume button (same behavior) */}
          <div className="flex items-center gap-4 pointer-events-auto">
            <motion.button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full",
                isDark ? "text-yellow-400" : "text-neutral-200"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>

            <NavbarButton
              onClick={handleResumeDownload}
              className="hidden md:block px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-neutral-900 transition-all"
            >
              Resume
            </NavbarButton>
          </div>
        </NavBody>
      </motion.div>

      {/* Mobile navbar using the new style but same items / buttons */}
      <div className="px-4 w-full lg:hidden flex justify-center">
        <MobileNav visible={visible} isDark={isDark}>
          <MobileNavHeader>
            <NavbarLogo />

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
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMenuOpen}>
            <div className="flex flex-col space-y-4 w-full">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-neutral-800 hover:text-cyan-400 block py-2 cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </motion.div>
              ))}

              <NavbarButton
                onClick={handleResumeDownload}
                className="w-full px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-neutral-900 transition-all"
              >
                Resume
              </NavbarButton>

              <button
                onClick={toggleTheme}
                className={cn(
                  "flex items-center justify-center gap-2 px-6 py-2 rounded-full",
                  isDark ? "text-yellow-400" : "text-neutral-600"
                )}
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
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </div>
    </div>
  );
};

export default Navbar;
