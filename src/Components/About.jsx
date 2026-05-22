import { site } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = site.resumePath;
    link.download = "EhtishamNazirResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          src={site.profiles.about}
          alt={site.fullName}
          className="about__img"
        />

        <div className="about__data">
          <p className="about__description">{site.aboutDescription}</p>

          <div className="about__info">
            {site.stats.map((stat) => (
              <div key={stat.name}>
                <span className="about__info-title">{stat.title}</span>
                <span
                  className="about__info-name"
                  dangerouslySetInnerHTML={{ __html: stat.name }}
                />
              </div>
            ))}
          </div>

          <div className="about__buttons">
            <MagneticButton>
              <button type="button" className="button button--flex" onClick={downloadResume}>
                Download CV
                <i className="uil uil-download-alt button__icon"></i>
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
