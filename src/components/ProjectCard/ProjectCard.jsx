import { Button } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const ProjectCard = ({ img, name, subject, wAuthor, desc }) => {
  return (
    <div className="rounded-[4px]  mb-[20px] border-solid  border-b-[2px] border-[#D1D1D1] pt-[20px] pr-[24px] pb-[40px] pl-[24px]">
      <div className="flex  justify-center gap-[25px] pt-[20px]">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="w-[85%]">
          <h1 className="text-[#000] text-[28px] font-[500]">{name}</h1>
          <p className="font-[500] text-[20px] text-[#000]">
            Subject :{" "}
            <span className="font-[400] text-[#474747]">{subject}</span>{" "}
          </p>
          <p className="font-[500] text-[20px] text-[#000]">
            Work author{" "}
            <span className="font-[400] text-[#474747]">{wAuthor}</span>
          </p>
          <p className="text-[#474747] text-[20px] mt-[5px]">{desc}</p>
        </div>
      </div>

      <div className="flex items-start  justify-end mt-[-30px] mr-[30px]">
        <Button
          sx={{ paddingY: "6px", paddingX: "16px" }}
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
        >
          MORE
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
