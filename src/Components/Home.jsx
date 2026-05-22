import { site } from "../data/portfolioData";
import ProfileImage from "./ProfileImage";
import { SquigglyText } from "./SquigglyText";
import MagneticButton from "./MagneticButton";
import Globe3DBackground from "./Globe3DBackground";

const Home = () => {
  return (
    <section className="home section" id="home">
      <Globe3DBackground />
      <div className="home__overlay"></div>
      <div className="home__container container grid home__content-layer">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt"></i>
            </a>
            <a
              href={site.social.dribbble}
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-dribbble"></i>
            </a>
          </div>

          <div className="home__img">
            <ProfileImage alt={site.fullName} />
          </div>

          <div className="home__data">
            <h1 className="home__title">
              Hi, I am
              <SquigglyText
                stepDuration={70}
                scale={[6, 9]}
                className="home__title-squiggly"
              >
                {site.fullName}
              </SquigglyText>
            </h1>
            <h3 className="home__subtitle">{site.role}</h3>
            <p className="home__description">{site.homeDescription}</p>
            <MagneticButton className="home__contact-magnet">
              <a href="#contact" className="button button--flex">
                Contact Me
                <i className="uil uil-message button__icon"></i>
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt home__scroll-mouse"></i>
            <span className="home__scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home__scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
