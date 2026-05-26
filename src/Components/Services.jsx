import { useState } from "react";
import { services } from "../data/portfolioData";
import MagneticButton from "./MagneticButton";
import ServicesHoverGlow from "./ServicesHoverGlow";

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container">
        <ServicesHoverGlow className="services__hover-layout">
          {services.map((service, index) => (
            <div key={service.title} className="services__content">
              <div>
                <i className={`${service.icon} services__icon`}></i>
                <h3 className="services__title">{service.title}</h3>
              </div>
              <MagneticButton className="services__button-wrap">
                <span
                  className="services__button"
                  onClick={() => setActiveModal(index)}
                  role="button"
                  tabIndex={0}
                >
                  View More
                  <i className="uil uil-arrow-right services__button-icon"></i>
                </span>
              </MagneticButton>
            </div>
          ))}
        </ServicesHoverGlow>
      </div>

      {services.map((service, index) => (
        <div
          key={service.title}
          className={`services__modal ${activeModal === index ? "active-modal" : ""}`}
          onClick={() => setActiveModal(null)}
        >
          <div
            className="services__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <i
              className="uil uil-times services__modal-close"
              onClick={() => setActiveModal(null)}
            ></i>
            <h3 className="services__modal-title">{service.modalTitle}</h3>
            <ul className="services__modal-services grid">
              {service.points.map((point) => (
                <li key={point} className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p>{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
