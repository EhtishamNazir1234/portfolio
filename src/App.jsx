import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Qualification from "./Components/Qualification";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Project from "./Components/Project";
// import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";
import LoaderThree from "./Components/LoaderThree";
import { Toaster } from "react-hot-toast";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { usePortfolioUI } from "./hooks/usePortfolioUI";

const AppContent = () => {
  const { isDark } = useTheme();
  const [isPreloading, setIsPreloading] = useState(true);
  usePortfolioUI(isDark);

  useEffect(() => {
    const timer = setTimeout(() => setIsPreloading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isPreloading) {
    return (
      <div className="app-preloader" role="status" aria-live="polite">
        <LoaderThree />
      </div>
    );
  }

  return (
    <div className="app-root">
      <div className="global-dotted-glow" aria-hidden="true" />
      <div className="app-content">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(20, 17, 38, 0.95)",
              color: "#f3f0ff",
              border: "1px solid rgba(122, 92, 255, 0.35)",
              backdropFilter: "blur(6px)",
            },
          }}
        />
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Services />
          <Portfolio />
          <Project />
          {/* <Testimonial /> */}
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </div>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
