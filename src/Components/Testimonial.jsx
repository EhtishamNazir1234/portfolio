import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials } from "../data/portfolioData";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container container swiper">
        <Swiper
          modules={[Pagination]}
          loop
          spaceBetween={40}
          grabCursor
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            568: { slidesPerView: 2 },
          }}
          className="testimonial__container"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="testimonial__content">
                <div className="testimonial__data">
                  <div className="testimonial__header">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="testimonial__img"
                    />
                    <div>
                      <h3 className="testimonial__name">{item.name}</h3>
                      <span className="testimonial__client">{item.role}</span>
                    </div>
                  </div>
                  <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                  </div>
                </div>
                <p className="testimonial__description">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
