import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import laptop from "../../assets/laptop.png";
import core from "../../assets/core.png";
import light from "../../assets/light.png";
import hole from "../../assets/hole.png";
import breket from "../../assets/breket.png";
import crystal from "../../assets/cristall.png";
import smile from "../../assets/smile.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { axiosRequest } from "../../utils/axiosRequest";
const Home = () => {
  const [project, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const { data } = await axiosRequest.get(
        "ScienceProject/get-science-projects"
      );
      setProjects(data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getProjects();
  }, []);
  return (
    <div>
      <div className="section1 py-[70px] ">
        <div className="container1">
          <div className="flex items-center justify-between">
            <div className="left w-[47%]">
              <h1 className="text-[36px] font-[500] ">
                <span className="text-[#0072CD] font-[400]">
                  Open project partners{" "}
                </span>{" "}
                the opportunity to interact with scientists from all over the
                world
              </h1>
              <h1 className="text-[20px] font-[400] text-[#000000] mt-[25px] mb-[20px] ">
                Only with Open project partners you will finally have the
                opportunity to find scientists and projects according to your
                interests. With us everyone has the opportunity to share their
                project ideas that can be realized by collaborating with other
                scientists because now on our site you can communicate with each
                other being on different continents.
              </h1>
              <Button
                sx={{ paddingY: "6px", paddingX: "32px" }}
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
              >
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
      <div className="section2 py-[100px]">
        <div className="container1">
          <div className="text-center">
            <h1 className="font-[500] text-[36px] text-[#000] mb-[20px]">
              Trends in the scientific world
            </h1>
            <p className="font-[400]  w-[43%] m-auto text-[20px] text-[#474747]">
              Never miss out on new information provided by scientists from
              around the world on a wide variety of sciences.
            </p>
          </div>
          <div className="flex items-center justify-center pt-[55px]">
            <div>
              <div>
                <img className="rounded-[4px]" src={light} alt="" />
              </div>
              <h1 className="text-[24px] font-[500] text-[#000] mt-[20px] leading-[32px] mb-[5px]">
                The sci-fi setting of "The Century After the Moon"
              </h1>
              <p className="text-[20px] font-[400] text-[#474747] mb-[33px] leading-[28px] w-[90%]">
                The main place of action is the fourth planet of a certain star
                system. According to legends, the ancestors of its inhabitants
                were able to travel between the stars...
              </p>
              <Button
                sx={{ paddingY: "6px", paddingX: "16px" }}
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
              >
                MORE
              </Button>
            </div>
            <div>
              <div>
                <img className="rounded-[4px]" src={core} alt="" />
              </div>
              <h1 className="text-[24px] font-[500] text-[#000] mt-[20px] leading-[32px] mb-[5px]">
                Movement of iron atoms in Earth's inner core detected Source.
              </h1>
              <p className="text-[20px] font-[400] text-[#474747] mb-[33px] leading-[28px] w-[90%]">
                he Earth's core is composed primarily of iron, although other
                elements may be present in small amounts...
              </p>
              <Button
                sx={{ paddingY: "6px", paddingX: "16px" }}
                variant="contained"
                endIcon={<ArrowForwardIosIcon />}
              >
                MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="sections3 pt-[80px] pb-[130px]">
        <div className="container1">
          <div className="text-center">
            <h1 className="font-[500] w-[35%] m-auto text-[36px] text-[#000] mb-[20px]">
              Current projects of young and experienced scientists
            </h1>
          </div>
          <div>
            {project.map((e) => {
              return <ProjectCard
                img={hole}
                heading={e?.name}
                id={e?.id}
                fullnames={e?.fullName}
                desc={
                  " In the process of biology research paper on the topic of bracket systems: indications for installation, types, features and care the author explained what braces are, who they are indicated for and what the principle of operation of different bracket systems."
                }
                clas = "first"
                subject={e?.scientificDirectionName}
              
              />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
