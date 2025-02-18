import React from "react";
import profilePic from"../assets/me.jpg"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl h-80 w-auto"
              src={profilePic}
              alt="aboutimg"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="mx-20 mt-20  text-wrap text-justify">
              Ehtisham Nazir here, a passionate software developer with a BS in
              IT from M.A.O Postgraduate College (affiliated with the University
              of the Punjab). I bring a blend of skills in React, graphic
              design, office management, and hardware maintenance. My journey in
              tech has driven me to explore software development, where I apply
              my technical and creative skills to build functional and engaging
              applications. With a commitment to continuous learning and
              excellence, I’m eager to take on projects that challenge my
              abilities and allow me to contribute meaningful solution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
