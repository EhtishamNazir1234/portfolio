import { useState } from "react";
import { qualifications } from "../data/portfolioData";

const TimelineBlock = ({ items }) => (
  <div className="qualification__sections">
    {items.map((item, index) => (
      <div key={index} className="qualification__data">
        {item.side === "right" && (
          <>
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {item.date}
              </div>
            </div>
          </>
        )}
        {item.side === "left" && (
          <>
            <div>
              <h3 className="qualification__title">{item.title}</h3>
              <span className="qualification__subtitle">{item.subtitle}</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i> {item.date}
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div></div>
          </>
        )}
      </div>
    ))}
  </div>
);

const Qualification = () => {
  const [tab, setTab] = useState("education");

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button ${tab === "education" ? "qualification__active" : ""}`}
            onClick={() => setTab("education")}
            role="button"
            tabIndex={0}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={`qualification__button ${tab === "work" ? "qualification__active" : ""}`}
            onClick={() => setTab("work")}
            role="button"
            tabIndex={0}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div
          className={`qualification__content ${tab === "education" ? "qualification__active" : ""}`}
          data-content=""
          id="education"
        >
          <TimelineBlock items={qualifications.education} />
        </div>

        <div
          className={`qualification__content ${tab === "work" ? "qualification__active" : ""}`}
          data-content=""
          id="work"
        >
          <TimelineBlock items={qualifications.work} />
        </div>
      </div>
    </section>
  );
};

export default Qualification;
