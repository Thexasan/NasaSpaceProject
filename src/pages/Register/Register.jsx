import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
const Register = () => {
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  const [password, setPassword] = React.useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="register pt-[150px] pb-[300px]">
        <div className="container">
          <div className="flex items-center justify-center w-[26%] m-auto">
            <Box component="form">
              <h1 className="text-[40px] mb-[15px] font-[500] text-[#212121] text-center">
                New user registration
              </h1>
              <TextField
                margin="normal"
                fullWidth
                label="Name"
                name="name"
                color="primary"
                autoFocus
                sx={{ mb: "13px" }}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Surname"
                name="surname"
                color="primary"
                autoFocus
                sx={{ mb: "13px" }}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Email"
                name="email"
                color="primary"
                type="email"
                autoFocus
                sx={{ mb: "13px" }}
              />
              <TextField
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
                sx={{ mt: "15px", display: "flex" }}
                control={<Checkbox sx={{ mt: "-45px" }} color="primary" />}
                label="By registering, you acknowledge that you have read and agree to the terms of the User Agreement and Privacy Policy"
              />

              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                sx={{ mt: 3, mb: 2, paddingY: "8px", paddingX: "22px" }}
              >
                Sign Up
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
