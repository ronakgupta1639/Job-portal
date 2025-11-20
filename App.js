import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostJob from "./pages/PostJob";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />

      <BrowserRouter>
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/postjob" element={<PostJob />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;

