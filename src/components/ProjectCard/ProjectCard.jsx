import { Button } from "@mui/material";
import React from "react";
import css from "./ProjectCard.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({ img, heading, subject, fullnames, clas, desc ,id }) => {
  const navigate = useNavigate()
  return (
    <div className={clas == "first" ? css.first : css.second}>
      <div className="  justify-center sm:flex-col md:flex md:flex-row sm:justify-center sm:text-center md:text-start gap-[25px] pt-[20px]">
        <div className="text-center flex items-center justify-center">
          <img  src={img} alt="" />
        </div>
        <div className="md:w-[85%] sm:my-[50px] md:my-[0px]">
          <h1
            style={{ display: !heading ? "none" : "block" }}
            className="text-[#000] text-[28px] font-[500]"
          >
            {heading}
          </h1>
          <p
            className={`font-[500] text-[20px] text-[#000] ${
              clas == "second" ? "mb-[20px]" : ""
            }`}
          >
            Subject :{" "}
            <span className="font-[400] text-[#474747]">{subject}</span>{" "}
          </p>
          <p
            className={`font-[500] text-[20px] text-[#000] ${
              clas == "second" ? "mb-[20px]" : ""
            }`}
          >
            Work author:{" "}
            <span className="font-[400] text-[#474747]">{fullnames}</span>
          </p>
          <p className={`text-[#474747] text-[20px] mt-[5px]`}>{desc}</p>
        </div>
      </div>

      <div className="sm:flex sm:justify-center  sm:text-center md:text-start md:items-start  md:justify-end md:mt-[-30px] md:mr-[30px]">
        {clas == "first" ? (
          <Button
          onClick={()=>{navigate(`/aboutProject/${id}`)}}
            sx={{ paddingY: "6px", paddingX: "16px" }}
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
          >
            MORE
          </Button>
        ) : (
          <Button
            sx={{ paddingY: "8px", paddingX: "32px" }}
            variant="outlined"
          >
            View Project
          </Button> 
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
