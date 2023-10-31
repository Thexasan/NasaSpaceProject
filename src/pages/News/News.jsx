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
import './New.css'

import planet from '../../assets/planet.png'

const News = () => {

  return (
    <div>
      <div className="pt-[60px]">
        <div className="container1">
          <div className="h-[580px] flex justify-between overflow-hidden items-center gradient rounded-[10px]">
            <div className="text-[white] ml-[100px]">
              <p className="text-[30px] text-justify text-[white]">INFO SPHERE</p>
              <p className="text-[85px] font-bold font-serif text-[gray]">SPACE</p>
              <p className="text-[16px] mt-[20px] text-justify w-[300px] italic font-bold text-[white]">Unlocking the Future of Science, One Collaboration at a Time.</p>
              
            </div>
            <div className="text-[white]">
            <p className="text-[16px] w-[300px] text-justify italic font-bold">"Connecting Minds, Accelerating Discoveries, Empowering Science."

This slogan emphasizes the core purpose of your platform: bringing together individuals and ideas to drive scientific progress.</p>
<p className="text-[18px] w-[300px]  italic font-bold">We create the Future!!!</p>
            </div>
            <img src={planet} className="h-[100%] object-cover" alt="" />
          </div>
        </div>
      </div>
      <div className="bgX pt-[60px]">
        <div className="container1">
          <div>
            <h1 className="text-[#212121] font-[500] text-[32px] text-center mb-[80px]">
              LATEST SCIENCE NEWS
            </h1>
            <div className="flex items-center justify-between">
              <div className="w-[100%] flex flex-wrap justify-evenly gap-[2px]">
                <ScienceCard
                  link="https://nasa.github.io/Transform-to-Open-Science/"
                  img="https://smd-cms.nasa.gov/wp-content/uploads/2021/10/topsbannersquare-e1692388644690.jpg"
                  text1="Transform to Open Science (TOPS)"
                  text2="Provides the visibility, advocacy, and community resources to support and enable the shift to open science."
                />
                <ScienceCard
                  link="https://science.nasa.gov/researchers/open-science/core-data-and-computing-services-program/"
                  img="https://smd-cms.nasa.gov/wp-content/uploads/2021/10/pia23780medium.jpg?resize=768,432"
                  text1="Core Data and Computing"
                  text2="The Core Data and Computing Services Program (CDCSP) will provide a layered architecture on which SMD science..."
                />
                <ScienceCard
                  link="https://science.nasa.gov/researchers/open-science/data-and-computing-architecture-study/"
                  img="https://smd-cms.nasa.gov/wp-content/uploads/2021/10/arc-2010-acd10-0054-007medium.jpg?resize=636,1024"
                  text1="Data and Computing Architecture Study"
                  text2="NASA’s Science Mission Directorate (SMD) Data and Computing Architecture study will investigate how a..."
                />
                <ScienceCard
                  link="https://science.nasa.gov/researchers/open-science/smd-ai-initiative/"
                  img="https://smd-cms.nasa.gov/wp-content/uploads/2021/10/ksc-20180515-ph-lch01-0022medium.jpg?resize=768,512"
                  text1="Artificial Intelligence and Machine Learning"
                  text2="NASA Science Mission Directorate’s (SMD) Strategy for Data Management and Computing for Groundbreaking..."
                />
                <ScienceCard
                  link="https://science.nasa.gov/researchers/open-science/#"
                  img="https://smd-cms.nasa.gov/wp-content/uploads/2021/10/img-0001.jpg?resize=768,576"
                  text1="Open-Source Science Awards"
                  text2="As part of a Year of Open Science, NASA is awarding $2.7 million across several different projects this year, with a total..."
                />
                <ScienceCard
                  link="https://science.nasa.gov/researchers/open-science/#:~:text=a%20significant%20public...-,Read%20More,-Science%20Mission%20Directorate"
                  img="https://smd-cms.nasa.gov/wp-content/uploads/2021/10/tops-booth.jpg?resize=768,576"
                  text1="Scientific Information Policy"
                  text2="The information produced as part of NASA’s scientific research activities represents a significant public..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[80px] pb-[80px]">
        <div className="container1">
          <h1 className="text-[#212121] font-[500] text-[32px] text-center mb-[80px]">
            Science resourses
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
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6MJu6_-g3bLiRqDnhhnpTXBKw8WH4q2QKg&usqp=CAU"
                  text="James Webb Space Telescope"
                  link="https://science.nasa.gov/mission/webb/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L7lGz1rTHPmJMEKaQGhi7SiDixMyuDgdCw&usqp=CAU"
                  text="Perseverance Rover"
                  link="https://science.nasa.gov/mission/mars-2020-perseverance/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvRfVstiIVVaFtswALG9QqX7Gx8zWUbFX0w&usqp=CAU"
                  text="Parker Solar Probe"
                  link="https://science.nasa.gov/mission/parker-solar-probe/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMCs0TwnsIMrL1mqR3jRZJV0BZlP9C_M6YQ&usqp=CAU"
                  text="Juno"
                  link="https://science.nasa.gov/mission/juno/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC6MJu6_-g3bLiRqDnhhnpTXBKw8WH4q2QKg&usqp=CAU"
                  text="James Webb Space Telescope"
                  link="https://science.nasa.gov/mission/webb/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L7lGz1rTHPmJMEKaQGhi7SiDixMyuDgdCw&usqp=CAU"
                  text="Perseverance Rover"
                  link="https://science.nasa.gov/mission/mars-2020-perseverance/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzvRfVstiIVVaFtswALG9QqX7Gx8zWUbFX0w&usqp=CAU"
                  text="Parker Solar Probe"
                  link="https://science.nasa.gov/mission/parker-solar-probe/"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Seminar
                  bg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMCs0TwnsIMrL1mqR3jRZJV0BZlP9C_M6YQ&usqp=CAU"
                  text="Juno"
                  link="https://science.nasa.gov/mission/juno/"
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
