import { useEffect } from "react";

export function usePortfolioUI(isDark) {
  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  useEffect(() => {
    const header = document.getElementById("header");
    const scrollUp = document.getElementById("scroll-up");
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      const scrollY = window.pageYOffset;

      if (header) {
        if (scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
      }

      if (scrollUp) {
        if (scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      }

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute("id");
        const links = document.querySelectorAll(`.nav__menu a[href="#${sectionId}"]`);

        if (!links.length) return;

        links.forEach((link) => {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        });
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}
