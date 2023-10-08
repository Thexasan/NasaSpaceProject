import React, { useEffect, useState } from "react";
import crystal from "../../assets/cristall.png";
import smile from "../../assets/smile.png";
import ProjectCard2 from "../../components/ProjectCard/ProjectCard2";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { axiosRequest } from "../../utils/axiosRequest";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import rustam from "../../assets/Rutam.pdf";
const AboutProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [thisProject, setThisProject] = useState({});
  const [user, setUser] = useState([]);

  // get Project
  async function getProject() {
    try {
      let { data } = await axiosRequest.get(
        `ScienceProject/get-science-project-by-id?id=${id}`
      );
      // console.log(data.data);
      setThisProject(data.data)
    } catch (error) {}
  }

  // get User
  async function getUser() {
    try {
      let { data } = await axiosRequest.get("User/get-users");
      setUser(data.data);
    } catch (error) {}
  }

  // useID
  // scientificDirectionName
  // name
  // projectFileName
  useEffect(() => {
    getProject();
  }, [id]);

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="section1 pb-[50px] pt-[70px]">
        <div className="container1 flex flex-wrap px-[50px] justify-between">
          <div className="w-[100%] text-center">
            <h1 className="text-[48px] leading-[36px]">{thisProject?.name}</h1>
          </div>
          <div className="rounded-[4px]  mb-[20px] border-solid  border-b-[2px] border-[#D1D1D1] pt-[20px]  pb-[40px]">
            <div className="flex  justify-center gap-[25px] pt-[20px]">
              <div>
                <img src={smile} alt="" />
              </div>
              <div className="w-[85%] flex flex-wrap justify-start content-between">
                <div className="w-[100%] flex flex-wrap">
                  <p className="w-[100%] font-[500] text-[20px] text-[#000]">
                    Work author:{" "}
                    <span className="font-[400] text-[#474747]">
                      {thisProject?.fullName}
                    </span>
                  </p>
                  <p className="w-[100%] font-[500] text-[20px] text-[#000]">
                    Subject :{" "}
                    <span className="font-[400] text-[#474747]">
                      {thisProject.scientificDirectionName}
                    </span>{" "}
                  </p>
                  <p className="text-[#474747] text-[20px] mt-[5px] button">
                    While working on a biology research project titled "Study of
                    the process of adaptation of an ant colony to an artificial
                    habitat", an 11th grade student conducted observations of
                    ant colonies under the influence of external factors to
                    study the process of adaptation of ants to an artificial
                    habitat.
                  </p>
                </div>
                <Button
                  sx={{ paddingY: "6px", paddingX: "16px" }}
                  variant="contained"
                  endIcon={<ArrowForwardIosIcon />}
                  onClick={() => navigate(`/chat/${thisProject?.userId}`)}
                >
                  DISCUSS
                </Button>
                {/* <h1>{thisProject?.projectFileName }</h1> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 px-[50px]  pb-[70px]">
        {thisProject?.projectFileName ? (
          <iframe
            className="mb-[30px] h-[100vh] w-[100%]"
            title="Embedded HTML Page"
            src={`http://65.108.148.136:8091/projects/${thisProject?.projectFileName}`}
          ></iframe>
        ) : null}
      </div>
    </div>
  );
};

export default AboutProject;
