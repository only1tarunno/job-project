import star from "../assets/star.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-container mx-auto px-5 lg:px-0">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="pb-3 text-[#0a0b09] text-3xl text-center my-3 lg:text-5xl font-bold"
        >
          Testimonials
        </h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="test-card"
              >
                <p>
                  &quot;Choosing them was the best decision we made for our
                  wedding. They took the stress out of planning and made our day
                  feel like a fairytale. Everything was beyond our
                  expectations.&quot;
                </p>
                <img src={star} alt="" />
                <h3>Michael and Emily</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="test-card"
              >
                <p>
                  &quot;We couldn&apos;t have asked for a better team to plan
                  our wedding! They turned our vision into a reality with
                  professionalism and creativity. Every detail was
                  perfect.&quot;
                </p>
                <img src={star} alt="" />
                <h3 className="text-[#0a0b09] font-bold text-xl">
                  Sarah and John
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="test-card"
              >
                <p>
                  &quot;Our wedding was a dream come true. They listened to our
                  ideas and brought them to life in ways we couldn&apos;t have
                  imagined. The entire process was enjoyable, and the result was
                  magical&quot;
                </p>
                <img src={star} alt="" />
                <h3>Anne V</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="test-card"
              >
                <p>
                  &quot;Choosing them was the best decision we made for our
                  wedding. They took the stress out of planning and made our day
                  feel like a fairytale. Everything was beyond our
                  expectations.&quot;
                </p>
                <img src={star} alt="" />
                <h3>Michael and Emily</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="test-card"
              >
                <p>
                  &quot;We couldn&apos;t have asked for a better team to plan
                  our wedding! They turned our vision into a reality with
                  professionalism and creativity. Every detail was
                  perfect.&quot;
                </p>
                <img src={star} alt="" />
                <h3 className="text-[#0a0b09] font-bold text-xl">
                  Sarah and John
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="test-card"
              >
                <p>
                  &quot;Our wedding was a dream come true. They listened to our
                  ideas and brought them to life in ways we couldn&apos;t have
                  imagined. The entire process was enjoyable, and the result was
                  magical&quot;
                </p>
                <img src={star} alt="" />
                <h3>Anne V</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
