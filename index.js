import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";

// DEFAULT AXIOS CONFIG
axios.defaults.baseURL = "http://localhost:5000";


axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = "Bearer " + token;
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
