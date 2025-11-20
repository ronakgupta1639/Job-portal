import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostJob from "./pages/PostJob";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
