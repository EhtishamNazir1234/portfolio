import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";
import { projects } from "../data/portfolioData";
import { CardBody, CardContainer, CardItem } from "./ThreeDCard";
import MagneticButton from "./MagneticButton";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

const Portfolio = () => {
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.25, margin: "-80px" });

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper?.autoplay) return;

    if (isInView) swiper.autoplay.start();
    else swiper.autoplay.stop();
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className={`portfolio section ${isInView ? "portfolio--in-view" : ""}`}
      id="portfolio"
    >
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <div className="portfolio__container container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCreative]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={700}
          loop
          grabCursor
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          effect="creative"
          creativeEffect={{
            prev: {
              translate: ["-120%", 0, -200],
              rotate: [0, 0, -8],
              opacity: 0,
            },
            next: {
              translate: ["120%", 0, -200],
              rotate: [0, 0, 8],
              opacity: 0,
            },
          }}
          navigation={{
            nextEl: ".portfolio-swiper-next",
            prevEl: ".portfolio-swiper-prev",
          }}
          pagination={{
            clickable: true,
            el: ".portfolio-swiper-pagination",
            dynamicBullets: true,
          }}
          className="portfolio__swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <CardContainer className="portfolio__card-wrap">
                <CardBody className="portfolio__content grid portfolio__card">
                  <CardItem translateZ={90} className="portfolio__media">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="portfolio__img"
                    />
                  </CardItem>
                  <div className="portfolio__data">
                    <CardItem as="h3" translateZ={50} className="portfolio__title">
                      {project.title}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ={40}
                      className="portfolio__description"
                    >
                      {project.description}
                    </CardItem>
                    <CardItem
                      as="a"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      translateZ={65}
                      className="portfolio__button-shell"
                    >
                      <MagneticButton>
                        <span className="button button--flex button--small portfolio__button">
                          Demo
                          <i className="uil uil-arrow-right button__icon"></i>
                        </span>
                      </MagneticButton>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-button-next portfolio-swiper-next">
          <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev portfolio-swiper-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-pagination portfolio-swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;
