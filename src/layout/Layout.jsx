import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import globus from "../assets/globus.png";
import bigglob from "../assets/bigglob.png";

import { styled } from "@mui/material/styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import st1 from "./Layout.module.css";
import { AccountCircle } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../reducers/states";
import { axiosRequest } from "../utils/axiosRequest";
import { destroyToken, saveToken } from "../utils/token";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [show1, setShow1] = React.useState(false);
  const [password, setPassword] = React.useState("");

  const [profile, setProfile] = React.useState(null);
  const loginModal = useSelector((state) => state.states.loginModal);

  const [forgot, setForgot] = React.useState(false);
  const handleMenu = (event) => {
    setProfile(event.currentTarget);
  };
  const handleClose = () => {
    setProfile(null);
  };

  const SignIn = async (event) => {
    event.preventDefault();
    try {
      let user = {
        userName: event.target["userName"].value,
        password: event.target["password"].value,
      };
      const { data } = await axiosRequest.post("Account/login", user);
      saveToken(data.data);
      navigate("/");
      setPassword("");
      dispatch(handleChange({ type: "loginModal", value: false }))``;
    } catch (error) {}
  };

  return (
    <div>
      <div className="navbar">
        {/* <h1>{num}</h1> */}
        <div className={st1.walk}>
          <div className="container1">
            <div className="flex items-center justify-between">
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
                  <Link to="/">
                    <li
                      style={{ color: pathname == "/" && "#0288D1"  }}
                      className="text-[16px] text-[#9E9E9E] font-[400]"
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/catalog">
                    <li
                      style={{
                        color: pathname == "/catalog" && "#0288D1" ,
                      }}
                      className=" text-[#9E9E9E] text-[16px] font-[400]"
                    >
                      Catalog
                    </li>
                  </Link>
                  <Link to="/catalog">
                    <li className="text-[#9E9E9E] text-[16px] font-[400]">
                      Science News
                    </li>
                  </Link>
                  <Link to="/catalog">
                    <li className="text-[#9E9E9E] text-[16px] font-[400]">
                      Scientific seminars
                    </li>
                  </Link>
                  <Link to="/catalog">
                    <li className="text-[#9E9E9E] text-[16px] font-[400]">
                      About us
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="flex items-center justify-evenly gap-[20px]">
                <div>
                  {localStorage.getItem("access_token") ? (
                    <div className="text-center">
                      <IconButton
                        onClick={() => navigate("/chat")}
                        sx={{ mt: "8px" }}
                      >
                        <MessageOutlinedIcon />
                      </IconButton>
                      <h1 className="text-[12px] mt-[-11px]  font-[400] text-[#000000de]">
                        Message
                      </h1>
                    </div>
                  ) : (
                    <Link to="/register">
                      <Button color="primary" variant="contained">
                        Registration
                      </Button>
                    </Link>
                  )}
                </div>
                <div>
                  {localStorage.getItem("access_token") ? (
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                    >
                      <AccountCircle />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={() =>
                        dispatch(
                          handleChange({ type: "loginModal", value: true })
                        )
                      }
                      size="large"
                    >
                      <AccountCircle />
                    </IconButton>
                  )}

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
                    onClose={() => handleClose()}
                    sx={{ mt: "45px" }}
                  >
                    <MenuItem
                      onClick={() => {
                        navigate("/profile");
                        handleClose();
                      }}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate("/");
                        destroyToken();
                        handleClose();
                      }}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                  <h1 className="text-[12px] mt-[-11px] ml-[8px] font-[400] text-[#000000de]">
                    Log in
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <div
        className="footer"
        style={{ display: pathname == "/chat" ? "none" : "block" }}
      >
        <div className="bg-[#F6F6F6] py-[33px]  ">
          <div className="container1">
            <div className="flex items-center justify-evenly gap-[100px]">
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

      <Dialog
        open={loginModal}
        onClose={() => {
          setPassword("");
          dispatch(handleChange({ type: "loginModal", value: false }));
        }}
      >
        <div
          style={{
            padding: "15px 20px",
            borderRadius: "10px",
          }}
        >
          <div
            className="float-right cursor-pointer"
            onClick={() =>
              dispatch(handleChange({ type: "loginModal", value: false }))
            }
          >
            <svg
              className="mt-[10px] ml-[-35px]"
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
          <form
            onSubmit={SignIn}
            className="flex items-center flex-col   pt-[50px]"
          >
            <h1 className="my-[20px] text-[#000] text-[24px] w-[90%] font-[500]">
              Welcome. log in to use all features of the site
            </h1>
            <div className="w-[89%]">
              <TextField
                margin="normal"
                fullWidth
                label="Username"
                name="userName"
                color="primary"
                sx={{ mb: "10px" }}
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
            </div>

            <div className="flex items-center gap-[10px] ">
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "172px",
                  paddingY: "8px",
                  fontSize: "16px",
                  paddingX: "22px",
                }}
              >
                Log in
              </Button>
              <Button
                onClick={() => {
                  dispatch(handleChange({ type: "loginModal", value: false }));
                  navigate("/register");
                }}
                color="primary"
                variant="outlined"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: "200px",
                  paddingY: "8px",
                  paddingX: "22px",

                  fontSize: "15px",
                }}
              >
                Create account
              </Button>
            </div>
            <h1
              className="text-[#2196F3] text-[18px]  my-[20px] font-[500] cursor-pointer"
              onClick={() => {
                dispatch(handleChange({ type: "loginModal", value: false }));
                setForgot(true);
              }}
            >
              FORGOT PASSWORD?
            </h1>
          </form>
        </div>
      </Dialog>
      <Dialog open={forgot} onClose={() => setForgot(false)}>
        <div
          style={{
            padding: "24px 30px",
            borderRadius: "10px",
            width: "420px",
          }}
        >
          <div
            className="float-right cursor-pointer"
            onClick={() => setForgot(false)}
          >
            <svg
              className="mt-[2px] ml-[-25px]"
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
          <div className="flex items-center flex-col   pt-[20px]">
            <h1 className="my-[20px] text-center text-[#000] text-[20px] w-[90%] font-[500]">
              Forgot password?
            </h1>
            <h1 className="">
              Enter the email address you used when you registered and we will
              send you instructions on how to reset your password.
            </h1>
            <br />
            <h1 className="">
              For security reasons, we do NOT store your password. So rest
              assured, we will never send your password via email.
            </h1>
            <TextField
              margin="normal"
              fullWidth
              label="Email"
              name="email"
              color="primary"
              type="email"
              sx={{ mb: "10px" }}
            />

            <Button
              fullWidth
              color="primary"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              Send
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Layout;
