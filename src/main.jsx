import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2196F3",
      light: "#42a5f5",
      dark: "#1563d0",
      contrastText: "#fff",
    },
    darkBlue: {
      main: "#0072CD",
      light: "#42a5f5",
      dark: "#1563d0",
      contrastText: "#fff",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
