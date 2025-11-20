import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
//import { Notifications } from "@mantine/notifications";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <MantineProvider>
    
    <App />
  </MantineProvider>
);
