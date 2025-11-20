import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Input } from "@mantine/core";
import { notifications } from "@mantine/notifications";

export default function JobDetails() {
  const { id } = useParams();       // Get job ID from URL
  const [job, setJob] = useState(null); // Store single job details
  const [file, setFile] = useState(null); // Store uploaded resume

  // Fetch single job from backend
  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.log("Error fetching job:", err));
  }, [id]);

  if (!job) return <h2>Loading...</h2>; // Show while fetching

  // Apply function
  const apply = async () => {
    if (!file) {
      notifications.show({
        title: "Error",
        message: "Please select a file",
        color: "red",
      });
      return;
    }

    const data = new FormData();
    data.append("resume", file);

    try {
      await axios.post(`http://localhost:5000/apply/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      notifications.show({
        title: "Applied",
        message: "Application Sent",
        color: "green",
      });
    } catch (err) {
      console.log("Error applying:", err);
      notifications.show({
        title: "Error",
        message: "Application failed",
        color: "red",
      });
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p>{job.location}</p>
      <p className="my-4">{job.description || "No description available"}</p>

      <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <Button className="mt-3" fullWidth onClick={apply}>
        Apply Now
      </Button>
    </div>
  );
}

