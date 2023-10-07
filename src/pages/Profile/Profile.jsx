import React, { useEffect, useState } from "react";

import doctor from "../../assets/doctor.png";
import smile1 from "../../assets/smile1.png";
import "./Profile.css";
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Profile = () => {
  const [three, setThree] = useState(
    localStorage.three
      ? localStorage.three
      : localStorage.setItem("three", "project")
  );

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [selectedFile, setSelectedFile] = useState(null);
  const [age, setAge] = React.useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

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
      <div>
        <div className="container1">
          <h1 className="text-[#212121] text-[24px] font-[500] text-center">
            To publish the project you need to upload your file in PDF format
          </h1>
          <div className="w-[30%] m-auto">
            <TextField
              margin="normal"
              fullWidth
              label="Name"
              name="name"
              color="darkBlue"
              sx={{ mb: "30px" }}
            />
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Upload"
              value={selectedFile?.name}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton color="primary" component="label">
                      <input
                        type="file"
                        accept="image/*"
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
            <FormControl fullWidth sx={{ mb: "30px" }}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Category"
                onChange={(e) => setAge(e.target.value)}
              >
                <MenuItem value={10}>Biology</MenuItem>
                <MenuItem value={20}>Mathematics</MenuItem>
                <MenuItem value={30}>Physics</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <ListItemText primary={name} />
                    <Checkbox checked={personName.indexOf(name) > -1} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
