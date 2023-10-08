import React, { useEffect, useState } from "react";

import doctor from "../../assets/doctor.png";
import smile1 from "../../assets/smile1.png";
import doc1 from "../../assets/doc1.png";
import doc2 from "../../assets/doc2.png";

import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import vk from "../../assets/vk.png";
import ok from "../../assets/ok.png";
import rustam from "../../assets/Rutam.pdf";

import profcss from "./Profile.module.css";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { axiosRequest } from "../../utils/axiosRequest";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import NoData from "../../components/NoData/NoData";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/token";
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};
const Profile = () => {
  const navigate = useNavigate();

  const [three, setThree] = useState(
    localStorage.three
      ? localStorage.three
      : localStorage.setItem("three", "project")
  );
  const [personName, setPersonName] = React.useState([]);
  const [projectShow, setProjectShow] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [forName, setForName] = useState(null);
  const [direct, setDirect] = React.useState(null);
  const [direction, setDirection] = React.useState([]);
  const [subDirection, setSubDirection] = React.useState([]);
  const [nameProject, setNameProject] = React.useState("");
  const [vc, setVc] = React.useState([]);

  const [profile, setProfile] = React.useState({})

  const myid = getToken()?.sid

  const handleChange = (event) => {
    const { value } = event.target;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForName(file);
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile(fileUrl);
    }
  };
  async function getDirection() {
    try {
      const { data } = await axiosRequest.get(
        "Direction/getdirections"
      );
      setDirection(data.data);
    } catch (error) {}
  }
  async function getSubDirection() {
    try {
      const { data } = await axiosRequest.get(
        "Category/getcategories"
      );
      setSubDirection(data.data);
    } catch (error) {}
  }
  async function postProject(event) {
    event.preventDefault();

    let ar = [];
    personName.map((e) => {
      return subDirection.map((el) => {
        if (e == el.categoryName && direct == el.directionId) {
          ar.push(el.id);
        }
      });
    });

    try {
      let addProject = new FormData();
      addProject.append("ProjectFileName", forName);
      addProject.append("ScientificDirectionId", direct);
      addProject.append("Name", nameProject);

      for (let i = 0; i < ar.length; i++) {
        addProject.append("CategoryId", JSON.stringify(ar[i]));
      }

      const { data } = await axiosRequest.post(
        "ScienceProject/add-science-project",
        addProject
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function getProfile() {
    try {
      const { data } = await axiosRequest.get(
        `UserProfile/get/userProfile/by/id?userId=${myid}`
      );
      setProfile(data.data)
    } catch (error) {}
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getDirection();
    getSubDirection();
    getProfile()
  }, []);
  return (
    <div>
      <div className={profcss.prof}></div>
      <div className="mt-[-100px]">
        <div className="container1">
          <div className="flex items-center justify-between">
            <div className="pr1 ">
              <div className="flex  items-end">
                <div>
                  <img className="w-[200px] h-[200px] rounded-[100%]" src={`${import.meta.env.VITE_APP_FILES_URL}${profile?.avatar}`} alt="" />
                </div>

              </div>
              <h1 className="mb-[10px] mt-[40px] text-[#212121] font-[500]">
                Name:{" "}
                <span className="font-[400]">
                  {profile?.firstName} {profile?.lastName}
                </span>{" "}
              </h1>
              <h1 className="mb-[10px] text-[#212121] font-[500]">
                Place of employment:{" "}
                <span className="font-[400]">{profile?.location?.country}</span>{" "}
              </h1>
              <h1 className="mb-[10px] text-[#212121] font-[500]">
                Subject: <span className="font-[400]">Biology</span>{" "}
              </h1>
            </div>
            <div className="mb-[-100px]">
              <div className="mb-[30px]">
                <Button
                  sx={{ paddingY: "4px", paddingX: "16px", fontSize: "18px" }}
                  variant="contained"
                >
                  Publish project
                </Button>
              </div>
              <div>
                <Button 
                  onClick={()=>navigate(`/editProfile/${myid}`)}
                  sx={{ paddingY: "4px", paddingX: "40px", fontSize: "18px" }}
                  variant="contained"
                >
                  Edit profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`pt-[40px] ${profcss.gran} pb-[20px]`}>
        <div className="container1">
          <div className="flex items-center justify-evenly">
            <div
              style={{
                borderBottom: three == "projects" ? "2px solid #2196F3" : "",
              }}
            >
              <h1
                className="text-[#212121] text-[24px] text-center cursor-pointer"
                onClick={() => {
                  localStorage.setItem("three", "projects");
                  setThree(localStorage.getItem("three"));
                }}
              >
                Projects
              </h1>
            </div>
            <div
              style={{
                borderBottom: three == "partners" ? "2px solid #2196F3" : "",
              }}
            >
              <h1
                className="text-[#212121] text-[24px] text-center cursor-pointer"
                onClick={() => {
                  localStorage.setItem("three", "partners");
                  setThree(localStorage.getItem("three"));
                }}
              >
                Partners
              </h1>
            </div>
            <div
              style={{
                borderBottom: three == "aboutme" ? "2px solid #2196F3" : "",
              }}
            >
              <h1
                className="text-[#212121] text-[24px] text-center cursor-pointer"
                onClick={() => {
                  localStorage.setItem("three", "aboutme");
                  setThree(localStorage.getItem("three"));
                }}
              >
                About me
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pb-[200px] pt-[100px]"
        style={{ display: three != "projects" ? "none" : "block" }}
      >
        <div className="container1">
          {/* post  */}
          <form
            onSubmit={postProject}
            className="flex items-center justify-center flex-col"
          >
            <div>
              {projectShow ? (
                <div className=" flex flex-col">
                  <img className="w-[35%] m-auto" src={smile1} alt="" />
                  <h1 className=" m-auto my-[20px] text-[#212121] text-[24px] font-[500]">
                    There is nothing here yet. Your published projects will be
                    displayed here.
                  </h1>
                </div>
              ) : (
                <div>
                  <h1 className="text-[#212121] text-[24px] font-[500] text-center">
                    To publish the project you need to upload your file in PDF
                    format
                  </h1>
                  <div className="w-[500px] m-auto">
                    <TextField
                      margin="normal"
                      fullWidth
                      value={nameProject}
                      onChange={(e) => setNameProject(e.target.value)}
                      label="Name"
                      name="name"
                      color="darkBlue"
                      sx={{ mb: "30px", mt: "30px" }}
                    />
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder="Upload"
                      value={forName?.name}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton color="primary" component="label">
                              <input
                                type="file"
                                accept=".pdf"
                                style={{ display: "none" }}
                                onChange={handleFileChange}
                              />
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                              >
                                <path
                                  d="M12.5 16L7.5 11L8.9 9.55L11.5 12.15V4H13.5V12.15L16.1 9.55L17.5 11L12.5 16ZM6.5 20C5.95 20 5.479 19.804 5.087 19.412C4.695 19.02 4.49934 18.5493 4.5 18V15H6.5V18H18.5V15H20.5V18C20.5 18.55 20.304 19.021 19.912 19.413C19.52 19.805 19.0493 20.0007 18.5 20H6.5Z"
                                  fill="black"
                                  fill-opacity="0.72"
                                />
                              </svg>
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      sx={{ mb: "30px" }}
                    />
                    {selectedFile && (
                      <iframe
                        className="mb-[30px]"
                        title="Embedded HTML Page"
                        src={selectedFile}
                        width="100%"
                        height="400px"
                      ></iframe>
                    )}
                    <FormControl fullWidth sx={{ mb: "30px" }}>
                      <InputLabel>Direction</InputLabel>
                      <Select
                        value={direct}
                        label="Direction"
                        onChange={(e) => {
                          setDirect(e.target.value);
                          setPersonName([]);
                        }}
                      >
                        {direction.map((e) => {
                          return <MenuItem value={e.id}>{e.name}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>

                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel>Sub Direction</InputLabel>
                      <Select
                        sx={{ mb: "30px" }}
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(",")}
                        MenuProps={MenuProps}
                      >
                        {subDirection
                          .filter((e) => {
                            if (e.directionId == direct) {
                              return e;
                            }
                          })
                          .map((elem) => {
                            return (
                              <MenuItem key={elem.id} value={elem.categoryName}>
                                <ListItemText primary={elem.categoryName} />
                              </MenuItem>
                            );
                          })}
                      </Select>
                    </FormControl>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-[20px]">
              <Button
                onClick={() => {
                  setProjectShow(!projectShow);
                  setPersonName([]);
                  setDirect([]);
                  setSelectedFile(null);
                  setForName(null);
                }}
                sx={{ paddingY: "4px", paddingX: "80px", fontSize: "18px" }}
                variant="contained"
              >
                {projectShow ? "Publish project" : "Cancel"}
              </Button>
              {projectShow ? null : (
                <Button
                  type="submit"
                  sx={{ paddingY: "4px", paddingX: "80px", fontSize: "18px" }}
                  variant="contained"
                >
                  Submit
                </Button>
              )}
            </div>
          </form>
          {/* post end */}
        </div>
      </div>
      <div
        className="pb-[200px] pt-[100px]"
        style={{ display: three != "partners" ? "none" : "block" }}
      >
        <div className="container1">
          <ProjectCard
            img={doc2}
            subject="Chemist"
            wAuthor="Laura Bassi"
            clas="second"
            desc="
            It was an honor to work on the same project with such an outstanding scientist. I got a great experience from this work.
            "
          />
          <ProjectCard
            img={doc1}
            subject="Chemist"
            wAuthor="Anna Barinova"
            clas="second"
            desc="
            This work changed my life I learned a lot of new things. I will say that working on one project is not easy, but it is a lot of benefit for the world and for myself. 
            "
          />
        </div>
      </div>
      <div
        className="pb-[200px] pt-[100px]"
        style={{ display: three != "aboutme" ? "none" : "block" }}
      >
        <div className="container1">
          <div className="flex items-start justify-between gap-[20x]">
            <div className="w-[70%]">
              <h1 className="text-[#212121] font-[700] mb-[14px] text-[24px]">
                My autobiography
              </h1>
              <p className="text-[24px] text-[#474747]">
                I, Stanislav Semyon Timofeyevich, born in 1979, graduated with
                honors from the Faculty of Physics of Lomonosov Moscow State
                University in 2001. Faculty of Physics of Lomonosov Moscow State
                University in 2001. Since 2001 I have been working <br /> in
                Federal State Budgetary Institution of Science at the Institute
                of General Institute of General Physics named after A.M.
                Prokhorov. A.M. Prokhorov Institute of General Physics of the
                Russian Academy of Sciences. I have worked as a junior
                researcher I have worked as a junior researcher, research
                associate, senior <br />
                researcher. At present At present I work as a scientific
                secretary of the Institute. In 2005 I defended Candidate's
                thesis in the specialty "theoretical physics" in IOF RAS, and in
                2014 he defended his doctoral thesis in the specialty "laser
                <br />
                physics" at Lomonosov Moscow State University. physics" at
                Lomonosov Moscow State University. I am the author of 80
                publications in I am the author of 80 publications in refereed
                scientific journals and proceedings, one monograph.
              </p>
            </div>
            <div className="w-[20%] text-center rounded-[20px] border-[#0072CD] border   border-solid pt-[20px] pb-[20px] ">
              <h1 className="text-center text-[20px] font-[500] text-[#000] pb-[20px]">
                USER PROFILES
              </h1>
              <div className="flex items-center justify-center  mb-[20px] gap-[10px] border-[#0072CD] border-solid border-b-2 w-[63%] pb-[5px] m-auto">
                <div>
                  <img src={facebook} alt="" />
                </div>
                <div>
                  <h1>Stanislav Semyon</h1>
                </div>
              </div>
              <div className="flex items-center justify-center  mb-[20px] gap-[10px] border-[#0072CD]  border-solid border-b-2 w-[63%] pb-[5px] m-auto">
                <div>
                  <img src={instagram} alt="" />
                </div>
                <div>
                  <h1>Stanislav Semyon</h1>
                </div>
              </div>
              <div className="flex items-center justify-center  gap-[10px] mb-[20px] border-[#0072CD]  border-solid border-b-2 w-[63%] pb-[5px] m-auto">
                <div>
                  <img src={vk} alt="" />
                </div>
                <div>
                  <h1>Stanislav Semyon</h1>
                </div>
              </div>
              <div className="flex items-center justify-center  gap-[10px] mb-[20px] border-[#0072CD]  border-solid border-b-2 w-[63%] pb-[5px] m-auto">
                <div>
                  <img src={ok} alt="" />
                </div>
                <div>
                  <h1>Stanislav Semyon</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
