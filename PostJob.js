import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Textarea } from "@mantine/core";
import { notifications } from "@mantine/notifications";

export default function PostJob() {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await axios.post("/jobs/add", form);

    notifications.show({
      title: "Job Posted",
      message: "Your job is live!",
      color: "green",
    });
  };

  return (
    <form className="max-w-xl mx-auto p-4" onSubmit={submit}>
      <h2 className="text-xl font-bold mb-4">Post a Job</h2>

      <Input
        placeholder="Job Title"
        className="mb-3"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />

      <Input
        placeholder="Company"
        className="mb-3"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      <Input
        placeholder="Location"
        className="mb-3"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      <Input
        placeholder="Salary"
        className="mb-3"
        value={form.salary}
        onChange={(e) => setForm({ ...form, salary: e.target.value })}
      />

      <Textarea
        placeholder="Description"
        className="mb-3"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <Button fullWidth type="submit">
        Post Job
      </Button>
    </form>
  );
}
