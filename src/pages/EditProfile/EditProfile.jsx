import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import procss from "./EditProfile.module.css";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Close, Upload } from "@mui/icons-material";
import { axiosRequest } from "../../utils/axiosRequest";
import { fileToBase64 } from "../../utils/fileToBase64";
const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});
  const [name, setName] = useState("");
  const [second, setSecond] = useState("");
  const [cover, setCover] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = async (e) => {
    let file = await fileToBase64(e.target.files[0]);
    setCover(file);
    setImage(e.target.files[0]);
  };
  async function getProfile() {
    try {
      const { data } = await axiosRequest.get(
        `UserProfile/get/userProfile/by/id?userId=${id}`
      );
      setProfile(data?.data);
      setName(data?.data?.firstName);
      setSecond(data?.data?.lastName);
      setImage(data?.data?.avatar);
    } catch (error) {}
  }
  async function getLocations() {
    try {
      const { data } = await axiosRequest.get("Location/get-locations");
      setLocations(data.data);
    } catch (error) {}
  }
  async function changeProfile() {
    try {
      let formData = new FormData();
      formData.append("Avatar", image);
      formData.append("FirstName", name);
      formData.append("LastName", second);
      formData.append("LocationId", 3);
      formData.append("Gender", 2);
      formData.append("Dob", "0001-01-01T00:00:00");
      const { data } = await axiosRequest.put(
        "UserProfile/update/userProfile",
        formData
      );
      navigate("/profile");
    } catch (error) {}
  }
  useEffect(() => {
    getProfile();
    getLocations();
  }, []);
  return (
    <div>
      <div className=" pb-[100px] pt-[100px]">
        <div className="container1">
          <div className="flex items-center justify-center">
            <div className="pr1 ">
              <div className="flex justify-center  items-end">
                {!image ? (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "120px",
                        height: "120px",
                        border: "2px dashed #C9DCEC",
                        borderRadius: "100%",
                        mt: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <label htmlFor="Images">
                        <Box
                          sx={{
                            borderRadius: "100px",
                            width: "100+px",
                            height: "64px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Upload />
                          <Typography>Upload</Typography>
                        </Box>
                        <input
                          type="file"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          multiple
                          id="Images"
                          accept="image/*"
                          style={{ display: "none" }}
                        />
                      </label>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    sx={{
                      width: "180px",
                      height: "180px",
                      border: "2px dashed #C9DCEC",
                      mt: "20px",
                      borderRadius: "100%",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={
                        cover
                          ? cover
                          : `${import.meta.env.VITE_APP_FILES_URL}${image}`
                      }
                      alt="alt"
                      style={{
                        width: 175,
                        height: 175,
                        objectFit: "cover",
                        borderRadius: "100%",
                      }}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 5,
                        width: "22px",
                        height: "22px",
                        borderRadius: "100%",
                        right: 5,
                        color: "#fff",
                        background: "rgba(0, 0, 0, 0.48)",
                        "&:hover": {
                          background: "rgba(0, 0, 0, 0.48)",
                        },
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCover("");
                        setImage(null);
                      }}
                    >
                      <Close style={{ height: 15 }} />
                    </IconButton>
                  </Box>
                )}
              </div>
              <h1 className="mb-[10px] mt-[40px] text-[#212121] font-[500]">
                <span className="font-[400]"></span>{" "}
                <TextField
                  margin="normal"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Name"
                  name="firstName"
                  color="darkBlue"
                  sx={{ mb: "10px", mt: "10px" }}
                />
                <TextField
                  margin="normal"
                  fullWidth
                  value={second}
                  onChange={(e) => setSecond(e.target.value)}
                  placeholder="Last Name"
                  name="lastName"
                  color="darkBlue"
                  sx={{ mb: "20px", mt: "20px" }}
                />
                <Button
                  onClick={() => changeProfile()}
                  fullWidth
                  variant="contained"
                >
                  Submit
                </Button>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
