import React, { useEffect, useState } from "react";

import doctor from "../../assets/doctor.png";
import smile1 from "../../assets/smile1.png";
import "./Profile.css";
import { Button } from "@mui/material";
const Profile = () => {
  const [three, setThree] = useState(
    localStorage.three
      ? localStorage.three
      : localStorage.setItem("three", "project")
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="prof"></div>
      <div className="mt-[-100px]">
        <div className="container1">
          <div className="flex items-center justify-between">
            <div className="pr1 ">
              <div className="flex  items-end">
                <div>
                  <img src={doctor} alt="" />
                </div>
                <div className="mt-[-50px]">
                  <h1>0 Projects</h1>
                </div>
              </div>
              <h1 className="mb-[10px] mt-[40px] text-[#212121] font-[500]">
                Name:{" "}
                <span className="font-[400]">
                  Stanislav Semyon Timofeyevich
                </span>{" "}
              </h1>
              <h1 className="mb-[10px] text-[#212121] font-[500]">
                Place of employment:{" "}
                <span className="font-[400]">Not specified</span>{" "}
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
      <div className="pt-[40px] gran pb-[20px]">
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
      <div className="pb-[200px] pt-[100px]">
        <div className="container1">
          <div className="text-center flex items-center justify-center flex-col">
            <div>
              <img src={smile1} alt="" />
            </div>
            <h1 className="w-[45%] m-auto my-[20px] text-[#212121] text-[24px] font-[500]">
              There is nothing here yet. Your published projects will be
              displayed here.
            </h1>
            <Button
              sx={{ paddingY: "4px", paddingX: "16px", fontSize: "18px" }}
              variant="contained"
            >
              Publish project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
