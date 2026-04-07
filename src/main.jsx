import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ServicesProvider } from "./context/ServicesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ServicesProvider>
        <App />
      </ServicesProvider>
    </BrowserRouter>
  </React.StrictMode>
);