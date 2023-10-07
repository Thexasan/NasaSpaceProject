import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import science from "../../assets/science.png";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";
import { useDispatch } from "react-redux";
import { handleChange } from "../../reducers/States";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show1, setShow1] = React.useState(false);
  const [password, setPassword] = React.useState("");
  const [show2, setShow2] = React.useState(false);
  const [congrats, setCongrats] = React.useState(false);
  const congr = useRef(null);

  
  const handleEvent = (event) => {
    if (event.target == congr.current) {
      setCongrats(false);
    }
  };

  const SignUp = async (event) => {
    event.preventDefault();
    try {
      let obj = {
        firstName: event.target["firstName"].value,
        lastName: event.target["lastName"].value,
        userName: event.target["userName"].value,
        email: event.target["email"].value,
        password: event.target["password"].value,
        confirmPassword: event.target["confirmPassword"].value,
      };
      const { data } = await axiosRequest.post("Account/register", obj);
      setCongrats(true);
    } catch (error) {}
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div onClick={(event) => handleEvent(event)}>
      <div className="register w-full">
        <div className="max-w-[3000px] m-auto">
          <div className="flex items-center justify-between w-[100%] m-auto gap-[60px] ">
            <div className="w-[30%] m-auto">
              <form onSubmit={SignUp}>
                <h1 className="text-[40px] mb-[15px] font-[500] text-[#212121] text-center">
                  Registration
                </h1>
                <TextField
                  required
                  margin="normal"
                  fullWidth
                  label="First Name"
                  name="firstName"
                  color="primary"
                  sx={{ mb: "13px" }}
                />
                <TextField
                  required
                  margin="normal"
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  color="primary"
                  sx={{ mb: "13px" }}
                />
                <TextField
                  required
                  margin="normal"
                  fullWidth
                  label="Username"
                  name="userName"
                  color="primary"
                  sx={{ mb: "13px" }}
                />
                <TextField
                  required
                  margin="normal"
                  fullWidth
                  label="Email"
                  name="email"
                  color="primary"
                  sx={{ mb: "13px" }}
                />
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  name="password"
                  label="Password"
                  type={show1 ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  color="primary"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {show1 ? (
                          <IconButton onClick={() => setShow1(false)}>
                            <VisibilityOffOutlinedIcon />
                          </IconButton>
                        ) : (
                          <IconButton onClick={() => setShow1(true)}>
                            <RemoveRedEyeOutlinedIcon />
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {password.length != 0 && password.length <= 6 ? (
                  <h1 className="text-[red] ml-[10px] mb-[15px] text-[12px] font-[500]">
                    The password must be at least 6 characters long
                  </h1>
                ) : (
                  <h1 className="ml-[10px] mb-[15px] text-[12px] font-[500] text-[#666666]">
                    The password must be at least 6 characters long
                  </h1>
                )}
                <TextField
                  required
                  fullWidth
                  margin="normal"
                  name="confirmPassword"
                  label="Confirm password"
                  type={show2 ? "text" : "password"}
                  color="primary"
                  sx={{ mb: "13px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {show2 ? (
                          <IconButton onClick={() => setShow2(false)}>
                            <VisibilityOffOutlinedIcon />
                          </IconButton>
                        ) : (
                          <IconButton onClick={() => setShow2(true)}>
                            <RemoveRedEyeOutlinedIcon />
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControlLabel
                  required
                  sx={{ mt: "15px", display: "flex" }}
                  control={<Checkbox sx={{ mt: "-25px" }} color="primary" />}
                  label="By registering, you acknowledge that you have read and agree to the terms of the User Agreement and Privacy Policy"
                />

                <Button
                  type="submit"
                  fullWidth
                  color="primary"
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    paddingY: "8px",
                    paddingX: "22px",
                    fontSize: "20px",
                  }}
                >
                  Sign Up
                </Button>
              </form>
            </div>

            <img src={science} alt="" />
          </div>
        </div>
      </div>
      {congrats ? (
        <div className="modal" ref={congr}>
          <div
            className="bg-[white] w-[560px] "
            style={{
              padding: "20px 13px 40px 20px",
              borderRadius: "24px",
              boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div
              className="float-right cursor-pointer"
              onClick={() => setCongrats(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.875 7.125L7.125 16.875M7.125 7.125L16.875 16.875"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex items-center flex-col   text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="181"
                height="180"
                viewBox="0 0 181 180"
                fill="none"
              >
                <path
                  d="M79.25 120.454L51.125 92.3231L59.0731 84.375L79.25 104.546L121.916 61.875L129.875 69.8344L79.25 120.454Z"
                  fill="#2196F3"
                />
                <path
                  d="M90.5 11.25C74.9248 11.25 59.6992 15.8686 46.7489 24.5218C33.7985 33.1749 23.7049 45.474 17.7445 59.8637C11.7841 74.2534 10.2246 90.0874 13.2632 105.363C16.3018 120.639 23.802 134.671 34.8154 145.685C45.8288 156.698 59.8607 164.198 75.1367 167.237C90.4127 170.275 106.247 168.716 120.636 162.756C135.026 156.795 147.325 146.702 155.978 133.751C164.631 120.801 169.25 105.575 169.25 90C169.25 69.1142 160.953 49.0838 146.185 34.3153C131.416 19.5469 111.386 11.25 90.5 11.25ZM90.5 157.5C77.1498 157.5 64.0994 153.541 52.999 146.124C41.8987 138.707 33.2471 128.165 28.1382 115.831C23.0293 103.497 21.6925 89.9251 24.297 76.8314C26.9015 63.7377 33.3303 51.7103 42.7703 42.2703C52.2104 32.8302 64.2377 26.4015 77.3314 23.797C90.4252 21.1925 103.997 22.5292 116.331 27.6381C128.665 32.747 139.207 41.3987 146.624 52.499C154.041 63.5993 158 76.6498 158 90C158 107.902 150.888 125.071 138.23 137.73C125.571 150.388 108.402 157.5 90.5 157.5Z"
                  fill="#2196F3"
                />
              </svg>
              <h1 className="my-[20px] text-[#000] text-[24px] font-[500]">
                Congratulations on a successful registration!
              </h1>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  dispatch(handleChange({type:"loginModal", value:true}))
                  setCongrats(false)
                  navigate("/")
                }}
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "300px",
                  paddingY: "8px",
                  fontSize: "20px",
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Register;
