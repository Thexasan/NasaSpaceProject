import React from "react";
import sem from "./Seminar.module.css"
import { useSwiper } from "swiper/react";
const Seminar = ({ bg, text }) => {
  return (
    <div>
      <div
      
      
      >
        <img className={sem.hpto} src={bg} alt="" />
        <h1 className="text-center text-[white] text-[14px] font-[400] mt-[-50px] w-[70%] m-auto relative bottom-[20px]">{text}</h1>
   
      </div>

    </div>
  );
};

export default Seminar;
