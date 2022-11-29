import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import slide1 from "../Images/s1.png";
import slide2 from "../Images/s2.png";
import slide3 from "../Images//s3.png";
import slide4 from "../Images/s4.webp";
import slide5 from "../Images/s5.webp";
import slide6 from "../Images/s6.png";
import slide7 from "../Images/s7.png";
import slide8 from "../Images/s8.png";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

function Slider() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='relative'>
        <div data-aos='zoom-out' className='slide'>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper md:hidden'
          >
            <SwiperSlide>
              <img
                src={slide4}
                alt={slide4}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide5}
                alt={slide5}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide6}
                alt={slide6}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
          </Swiper>

          {/*  */}
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper hidden md:block'
          >
            <SwiperSlide>
              <img
                src={slide1}
                alt={slide1}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide2}
                alt={slide2}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide3}
                alt={slide3}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide7}
                alt={slide7}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={slide8}
                alt={slide8}
                animate={{ scale: 1 }}
                initial={{ scale: 1.1 }}
                transition={{ type: "tween", duration: 2 }}
                className='h-[45%] w-[100vw]'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Slider;
