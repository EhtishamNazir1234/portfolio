import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks, site } from "../data/portfolioData";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopHoverIndex, setDesktopHoverIndex] = useState(null);
  const [desktopHoverRect, setDesktopHoverRect] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });
  const { isDark, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const desktopMenuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  const updateDesktopHover = (index) => {
    setDesktopHoverIndex(index);
    if (!desktopMenuRef.current) return;
    const links = desktopMenuRef.current.querySelectorAll(".rn-desktop-link");
    const current = links[index];
    if (!current) return;
    setDesktopHoverRect({
      left: current.offsetLeft,
      top: current.offsetTop,
      width: current.offsetWidth,
      height: current.offsetHeight,
    });
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 100);
  });

  const navPillClass = `rn-desktop-pill ${
    scrolled
      ? isDark
        ? "rn-pill-dark-scrolled"
        : "rn-pill-light-scrolled"
      : "rn-pill-transparent"
  }`;

  return (
    <header className="header rn-header" id="header">
      <div className="rn-mobile-shell">
        <div className="rn-mobile-top">
          <a href="#home" className="rn-mobile-logo" onClick={closeMenu}>
            {site.name}
          </a>

          <div className="rn-mobile-actions">
            <button
              type="button"
              className="rn-icon-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className={`uil ${isDark ? "uil-sun" : "uil-moon"}`}></i>
            </button>

            <button
              type="button"
              className="rn-icon-btn"
              id="nav-toggle"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <i className={`uil ${menuOpen ? "uil-times" : "uil-apps"}`}></i>
            </button>
          </div>
        </div>

        <div className={`nav__menu rn-mobile-menu ${menuOpen ? "show-menu" : ""}`} id="nav-menu">
          <ul className="rn-mobile-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav__link rn-mobile-link ${link.id === "home" ? "active-link" : ""}`}
                  onClick={closeMenu}
                >
                  <i className={`${link.icon} nav__icon`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rn-desktop-shell">
        <motion.nav
          className={navPillClass}
          animate={{
            width: scrolled ? "100%" : "92%",
            y: scrolled ? 10 : 0,
          }}
          transition={{ type: "spring", stiffness: 380, damping: 36 }}
        >
          <a href="#home" className="rn-desktop-logo" onClick={closeMenu}>
            {site.name}
          </a>

          <div
            className="nav__menu rn-desktop-menu"
            id="nav-menu-desktop"
            ref={desktopMenuRef}
            onMouseLeave={() => setDesktopHoverIndex(null)}
          >
            {desktopHoverIndex !== null && (
              <motion.span
                className="rn-nav-hover-bg"
                initial={false}
                animate={desktopHoverRect}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              />
            )}
            {navLinks.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav__link rn-desktop-link ${link.id === "home" ? "active-link" : ""}`}
                onMouseEnter={() => updateDesktopHover(index)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="rn-icon-btn rn-desktop-theme"
            id="theme-button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={`uil ${isDark ? "uil-sun" : "uil-moon"}`}></i>
          </button>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
