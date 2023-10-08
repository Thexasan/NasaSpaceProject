import React from "react";

const ScienceCard = ({ img, text1, text2 }) => {
  return (
    <div className="mb-[80px]">
      <div className="">
        <img src={img} alt="" />
        <h1 className="text-[#212121] text-[20px] font-[500] mt-[14px] w-[65%]">
          {text1}
        </h1>
        <h1 className="text-[#9E9E9E] text-[20px] font-[500] mt-[10px]">
          {text2}
        </h1>
      </div>
    </div>
  );
};

export default ScienceCard;
