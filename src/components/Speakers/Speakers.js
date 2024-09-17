import React from "react";
import "./Speakers.css";
import { Dataspeakers } from "../Dataforspeakers.js";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function Speakers() {
  return (
    <div className="crspeakers">
      <div className="creative">
        <h3>
          {" "}
          Creative <span>speakers</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet.
        </p>
      </div>
      <div className="container">
        <div className="speakers">
        <Swiper
  breakpoints={{
    // الشاشات الصغيرة
    0: {
      slidesPerView: 1,
      spaceBetween: 10, // قلل المسافة بين الشرائح على الشاشات الصغيرة
    },
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // الشاشات المتوسطة
    639: {
      slidesPerView: 2,
      spaceBetween: 15, // زيادة بسيطة في المسافة على الشاشات المتوسطة
    },
    865: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // الشاشات الكبيرة
    1024: {
      slidesPerView: 3,
      spaceBetween: 30, // المسافة تكون أكبر على الشاشات الكبيرة
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay, Pagination, Navigation]}
  navigation
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
>

          
            {Dataspeakers.map((spe) => {
               console.log(spe);
              return (
                <SwiperSlide key={spe.id}>
                  <div className="speaker">
                    <img src={spe.image} alt=" " />
                    <div className="text-speaker">
                      <h4>{spe.title}</h4>
                      <p className="spe-desc">{spe.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
