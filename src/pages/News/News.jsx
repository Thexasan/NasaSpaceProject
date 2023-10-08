import wormhole from "../../assets/wormhole.mp4";
import galaxy from "../../assets/galaxy.mp4";
import earth from "../../assets/earth.mp4";

import d1 from "../../assets/d1.png";
import d2 from "../../assets/d2.png";
import d3 from "../../assets/d3.png";
import d4 from "../../assets/d4.png";
import d5 from "../../assets/d5.png";
import we from "../../assets/we.png";
import ScienceCard from "../../components/ScienceCard/ScienceCard";

import m1 from "../../assets/m1.png";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.png";
import m4 from "../../assets/m4.png";

import "swiper/swiper-bundle.css";
import left from "../../assets/left.png";
import right from "../../assets/right.png";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Seminar from "../../components/Seminar/Seminar";
const News = () => {

  return (
    <div>
      <div className="pt-[70px]">
        <div className="container1">
          <div className="flex justify-center gap-[30px]">
            <div className=" ">
              <video
                className="rounded-[10px]"
                autoPlay
                muted
                src={earth}
              ></video>
            </div>

            <div className="w-[62%] mt-[-5px]">
              <video
                className="rounded-[10px] h-[250px] "
                autoPlay
                muted
                src={galaxy}
              ></video>
              <video
                className="rounded-[10px] h-[300px]"
                autoPlay
                muted
                src={wormhole}
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[100px]">
        <div className="container1">
          <div>
            <h1 className="text-[#212121] font-[500] text-[32px] text-center mb-[80px]">
              LATEST SCIENCE NEWS
            </h1>
            <div className="flex items-center justify-between">
              <div>
                <ScienceCard
                  img={d5}
                  text1="SciNat for September 2023 #4: an algorithm to predict the effect of point mutations, interesting facts about baby crying, whether paralysis can be defeated, and how to..."
                  text2="SUNDAY, 24 SEPTEMBER"
                />
                <ScienceCard
                  img={d4}
                  text1="Mexican virologist Susana López Charretón uncovered rotaviruses’ secrets"
                  text2="SUNDAY, 24 SEPTEMBER"
                />
                <ScienceCard
                  img={d2}
                  text1="How a deadly fungus is so good at sticking to skin and other surfaces"
                  text2="SUNDAY, 24 SEPTEMBER"
                />
              </div>
              <div>
                <ScienceCard
                  img={we}
                  text1="Nanoparticles for coloring biomolecules and QLED displays - why the Nobel Prize in Chemistry was awarded (2023)"
                  text2="THURSDAY, 05 OCTOBER"
                />
                <ScienceCard
                  img={d3}
                  text1="Pathogen spillover driven by rapid changes in bat ecology"
                  text2="THURSDAY, 05 OCTOBER"
                />

                <ScienceCard
                  img={d1}
                  text1="Nature Index 2023 annual tables: first ranking of medical sciences shows big U.S. lead"
                  text2="THURSDAY, 05 OCTOBER"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[80px] pb-[80px]">
        <div className="container1">
          <h1 className="text-[#212121] font-[500] text-[32px] text-center mb-[80px]">
            Science seminars
          </h1>
          <div>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay options
              loop={true}
              pagination={{
                clickable: true,
              }}
            //   navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            //   Navigation, 
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Seminar
                  bg={m1}
                  text="Fallen Trees and Coding Dreams, or Near Real-Time Deforestation Monitoring"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg={m2}
                  text="How Stressors Shape Soil Communities & Their Functions in a Changing World"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg={m3}
                  text="Fallen Trees and Coding Dreams, or Near Real-Time Deforestation Monitoring"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg={m4}
                  text="When Worms and Germs Compete, Who Wins? REGISTERADD TO CALENDAR"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg={m1}
                  text="Fallen Trees and Coding Dreams, or Near Real-Time Deforestation Monitoring"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg={m2}
                  text="How Stressors Shape Soil Communities & Their Functions in a Changing World"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg={m3}
                  text="Fallen Trees and Coding Dreams, or Near Real-Time Deforestation Monitoring"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg={m4}
                  text="When Worms and Germs Compete, Who Wins? REGISTERADD TO CALENDAR"
                />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
};

export default News;
