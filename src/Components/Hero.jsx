import React from "react";
import profilePic from "../assets/me.jpg"

const Hero = () => {
  return (
    <div className="border-b   border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-center mx-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl  ">
            Ehtisham Nazir
          </h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Front-End Developer
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            As a dedicated front-end developer specializing in React, I focus on
            creating intuitive, high-performance user interfaces that bring
            dynamic ideas to life. I enjoy transforming complex requirements
            into seamless, responsive experiences, blending both creativity and
            technical skill. With a keen eye for detail and a commitment to
            clean, efficient code, I aim to build applications that are both
            visually appealing and highly functional. Let’s connect to discuss
            how I can contribute to your next project!
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-end">
          <img
            className=" rounded-lg shadow-lg w-full lg:w-auto max-w-sm"
            src={profilePic}
            alt="Ehtisham Nazir"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
