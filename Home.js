import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "@mantine/core";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/jobs/all")
      .then((res) => {
        setJobs(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <h2 className="text-center text-2xl font-semibold mt-20 text-gray-700">
        Loading...
      </h2>
    );

  if (jobs.length === 0)
    return (
      <h2 className="text-center text-2xl font-semibold mt-20 text-gray-700">
        No jobs available
      </h2>
    );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Available Jobs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((j) => (
          <Card
            key={j.id}
            shadow="lg"
            padding="lg"
            radius="md"
            className="hover:scale-105 transition-transform duration-300 bg-white flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{j.title}</h3>
            <p className="text-gray-600 mb-1">{j.company}</p>
            <p className="text-gray-500 mb-4">{j.location}</p>

            <div className="mt-auto flex justify-end">
              <Link to={`/job/${j.id}`}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Details
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
