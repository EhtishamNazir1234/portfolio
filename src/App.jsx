import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Experience from "./Components/Expererience";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div>
        <div className="fixed inset-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <Navbar />
        <main className="pt-16">
          {" "}
          {/* Added padding-top to main container */}
          <section id="hero" className="pt-16">
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
        </main>
      </div>
    </div>
  );
};

export default App;