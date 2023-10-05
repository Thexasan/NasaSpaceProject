import React from "react";
import { Link, Outlet } from "react-router-dom";
import globus from "../assets/globus.png";
import bigglob from "../assets/bigglob.png";

import { styled } from "@mui/material/styles";
import { Button, IconButton, InputBase, Menu, MenuItem } from "@mui/material";
import "./Layout.css";
import { AccountCircle } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  backgroundColor: "#F5F5F5",
  "&:hover": {
    backgroundColor: "#F5F5F5",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  left: "87%",
  float: "right",

  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "8px 16px",
    width: "392px",

    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "350px",
      "&:focus": {
        width: "400px",
      },
    },
  },
}));

const Layout = () => {
  const [profile, setProfile] = React.useState(null);
  const handleMenu = (event) => {
    setProfile(event.currentTarget);
  };
  const handleClose = (event) => {
    setProfile(null);
  };

  return (
    <div>
      <div className="navbar">
        <div className="container1">
          <div className="flex items-center justify-between walk">
            <div className="flex items-center gap-[50px]">
              <Link to="/">
                <img src={globus} alt="" />
              </Link>
              <div>
                <Search>
                  <SearchIconWrapper>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M21.75 21.246L16.086 15.582C17.4471 13.948 18.1258 11.8522 17.981 9.73047C17.8361 7.60877 16.8789 5.62459 15.3084 4.19068C13.7379 2.75678 11.675 1.98355 9.54893 2.03186C7.42284 2.08017 5.39723 2.94629 3.89347 4.45005C2.38971 5.95381 1.52359 7.97942 1.47528 10.1055C1.42697 12.2316 2.2002 14.2945 3.6341 15.865C5.06801 17.4355 7.05219 18.3927 9.17389 18.5375C11.2956 18.6824 13.3914 18.0036 15.0255 16.6425L20.6895 22.3065L21.75 21.246ZM2.99996 10.3065C2.99996 8.97152 3.39585 7.66648 4.13754 6.55645C4.87924 5.44641 5.93345 4.58125 7.16685 4.07036C8.40025 3.55947 9.75745 3.42579 11.0668 3.68624C12.3762 3.94669 13.5789 4.58957 14.5229 5.53357C15.4669 6.47758 16.1098 7.68031 16.3703 8.98968C16.6307 10.2991 16.497 11.6563 15.9862 12.8897C15.4753 14.1231 14.6101 15.1773 13.5001 15.919C12.39 16.6607 11.085 17.0565 9.74996 17.0565C7.96036 17.0546 6.24463 16.3428 4.97919 15.0773C3.71375 13.8119 3.00195 12.0961 2.99996 10.3065Z"
                        fill="black"
                        fill-opacity="0.38"
                      />
                    </svg>
                  </SearchIconWrapper>
                  <StyledInputBase placeholder="Search" />
                </Search>
              </div>
            </div>

            <div>
              <ul className="flex items-center justify-evenly gap-[20px]">
                <Link to="/catalog">
                  <li className="text-[#0288D1] text-[16px] font-[400]  border-b border-[#0288D1]">
                    Catalog
                  </li>
                </Link>
                <Link to="/catalog">
                  <li className="text-[#0288D1] text-[16px] font-[400]  border-b border-[#0288D1]">
                    Science News
                  </li>
                </Link>
                <Link to="/catalog">
                  <li className="text-[#0288D1] text-[16px] font-[400]  border-b border-[#0288D1]">
                    Scientific seminars
                  </li>
                </Link>
                <Link to="/catalog">
                  <li className="text-[#0288D1] text-[16px] font-[400]  border-b border-[#0288D1]">
                    About us
                  </li>
                </Link>
              </ul>
            </div>
            <div className="flex items-center justify-evenly gap-[20px]">
              <div>
                <Link to="/register">
                  <Button color="primary" variant="contained" >
                    Registration
                  </Button>
                </Link>
              </div>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                >
                  <AccountCircle />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={profile}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(profile)}
                  onClose={handleClose}
                  sx={{ mt: "45px" }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
                <h1 className="text-[12px] mt-[-11px] ml-[8px] font-[400] #000000de">
                  Log in
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <div className="footer">
        <div className="container1">
          <div className="bg-[#F6F6F6] py-[33px]   flex items-center justify-evenly gap-[100px]">
            <div className="mr-[20px]">
              <Link to="/">
                <img src={bigglob} alt="" />
              </Link>
            </div>
            <div>
              <h1 className="text-[#202020] font-[500] text-[20px] mb-[14px]">
                About the project
              </h1>
              <ul>
                <li className="mb-[10px]">Report a problem</li>
                <li>Information support</li>
              </ul>
            </div>
            <div className="mr-[-150px]">
              <h1 className="text-[#202020] font-[500] text-[20px] mb-[15px]">
                Contact us
              </h1>
              <ul>
                <li className="mb-[10px]">Email address</li>
                <li>93 546 34 66</li>
              </ul>
            </div>
            <div className="">
              <h1 className="w-[53%] mx-auto  text-center font-[400] text-[16px]">
                Only with Open project partners you will finally have the
                opportunity to find scientists and projects according to your
                interests.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
