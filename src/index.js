import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { createTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);
