import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@mantine/core";

export default function Profile() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios.get("/apply/myapplications").then((res) => setApps(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">My Applications</h2>

      {apps.map((a) => (
        <Card key={a._id} shadow="sm" className="mb-3">
          <h3 className="font-semibold">{a.jobTitle}</h3>
          <p>Status: {a.status}</p>
        </Card>
      ))}
    </div>
  );
}
