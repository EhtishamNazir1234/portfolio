import React from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Experience from "./Components/Expererience";
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const { isDark } = useTheme();
  
  return (
    <main
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-neutral-900" : "bg-white"
      }`}
    >
      <div
        className={`overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 ${
          isDark ? "text-neutral-300" : "text-neutral-800"
        }`}
      >
        <div>
          <div
            className={`fixed inset-0 z-[-2] h-screen w-screen ${
              isDark
                ? "bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                : "bg-gray-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"
            }`}
          ></div>
          <Navbar />
          <main className="pt-16">
            <div>
              <section id="hero" className="min-h-screen pt-16">
                <Hero />
              </section>
              <section id="about" className="pt-24">
                <About />
              </section>
              <section id="technologies" className="pt-24">
                <Technologies />
              </section>
              <section id="experience" className="pt-24">
                <Experience />
              </section>
              <section id="projects1" className="min-h-screen pt-10">
                <Projects />
              </section>
              <section id="contact" className="pt-24">
                <Contact />
              </section>
            </div>
          </main>
        </div>
      </div>
    </main>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;