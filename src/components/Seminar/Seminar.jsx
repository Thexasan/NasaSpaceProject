import React from "react";
import sem from "./Seminar.module.css"
import { useSwiper } from "swiper/react";
const Seminar = ({ bg, text, link }) => {
  return (
    <div className="w-[px] h-[200px] rounded-[15px]">
        {/* <img  className={sem.hpto} className src={bg} alt="" /> */}
        <img className="w-[100%] h-[200px] object-cover rounded-[10px]" src={bg} alt="" />
        <h1  style={{backgroundColor:"rgba(0,0,0,0.6)"}} className="text-center text-[rgb(255,255,255)] rounded-[10px] text-[16px] font-bold mt-[-90px] w-[90%] py-[10px] m-auto relative bottom-[20px]">{text}</h1>
        <a target="_blank" href={link} className="text-[14px] font-bold  cursor-pointer text-[white] mt-[-30px] ml-[30px] relative">Read More</a>
    </div>
  );
};

export default Seminar;
