import { Button } from "@mui/material";
import React, { useEffect } from "react";
import laptop from "../../assets/laptop.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="section1 pt-[70px]">
        <div className="container1">

          <div className="flex items-center justify-evenly">
            <div className="left w-[47%]">
              <h1 className="text-[36px] font-[400] ">
                <span className="text-[#0072CD] ">
                  Open project partners the opportunity{" "}
                </span>{" "}
                to interact with scientists from all over the world
              </h1>
              <h1 className="text-[20px] font-[400] text-[#000000] my-[20px] ">
                Only with Open project partners you will finally have the
                opportunity to find scientists and projects according to your
                interests. With us everyone has the opportunity to share their
                project ideas that can be realized by collaborating with other
                scientists because now on our site you can communicate with each
                other being on different continents.
              </h1>
              <Button variant="contained" endIcon={<ArrowForwardIosIcon />}>
                MORE
              </Button>
            </div>
            <div>
              <img className="w-[100%] m-auto" src={laptop} alt="" />
            </div>
            <div className="right"></div>
          </div>
        </div>

        </div>
    </div>
  );
};

export default Home;
