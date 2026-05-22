import { useRef } from "react";
import { useInView } from "framer-motion";
import { site } from "../data/portfolioData";
import ProfileImage from "./ProfileImage";
import MagneticButton from "./MagneticButton";

const Project = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.25, once: true });

  return (
    <section
      ref={sectionRef}
      className={`project section ${isInView ? "project--in-view" : ""}`}
    >
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Contact me now and let&apos;s build your next web application
              together.
            </p>
            <MagneticButton className="project__contact-magnet">
              <a href="#contact" className="button button--flex button--white">
                Contact Me
                <i className="uil uil-message button__icon"></i>
              </a>
            </MagneticButton>
          </div>
          <ProfileImage alt={site.fullName} variant="project" />
        </div>
      </div>
    </section>
  );
};

export default Project;
