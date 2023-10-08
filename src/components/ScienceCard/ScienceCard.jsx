import React from "react";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const ScienceCard = ({ img, text1, text2, link }) => {
  return (
    <div className="mb-[80px]">
      <div className="w-[350px] rounded-[10px] bg-[#0f2341]">
        <img src={img} alt="" className="w-[100%] h-[245px] object-cover rounded-[10px]" />
        <h1 className="text-[#babebe] ml-[10px] text-[20px] font-[500] mt-[14px] w-[65%]">
          {text1}
        </h1>
        <h1 className="text-[white] ml-[10px] text-[20px] font-[500] mt-[10px] w-[325px]">
          {text2}
        </h1>
        <a target="_blank" href={link} className="w-[200px]  h-[50px] ml-[10px] text-[20px] font-bold text-[#919191] flex justify-start items-center">Read More <span className="ml-[10px]"><NearMeOutlinedIcon/></span></a>
      </div>
    </div>
  );
};

export default ScienceCard;
