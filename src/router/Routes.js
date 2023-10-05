import { lazy } from "react";

export const Layout = lazy(() => import("../layout/Layout"));
export const Home = lazy(() => import("../pages/Home/Home"));
export const Catalog = lazy(() => import("../pages/Catalog/Catalog"));
export const AboutProject = lazy(() => import("../pages/AboutProject/AboutProject"));
export const Profile = lazy(() => import("../pages/Profile/Profile"));
export const Register = lazy(() => import("../pages/Register/Register"));
export const Chat = lazy(() => import("../pages/Chat/Chat"));

