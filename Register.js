import React, { useState } from "react";
import axios from "axios";
import { Button, Input, Select } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "jobseeker",
  });

  const [file, setFile] = useState(null);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("password", form.password);
      data.append("role", form.role);
      if (file) data.append("resume", file);

      await axios.post("/auth/register", data);

      notifications.show({
        title: "Success",
        message: "Registered Successfully",
        color: "green",
      });

      nav("/login");
    } catch (err) {
      notifications.show({
        title: "Error",
        message: err.response?.data?.msg || err.message,
        color: "red",
      });
    }
  };

  return (
    <form
      onSubmit={submit}
      className="max-w-md mx-auto p-6 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <Input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
        className="mb-3"
      />

      <Input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
        className="mb-3"
      />

      <Input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        required
        className="mb-3"
      />

      <Select
        label="Select Role"
        data={[
          { value: "jobseeker", label: "Job Seeker" },
          { value: "recruiter", label: "Recruiter" },
        ]}
        value={form.role}
        onChange={(value) => setForm({ ...form, role: value })}
        className="mb-3"
      />

      <Input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <Button fullWidth type="submit">
        Register
      </Button>
    </form>
  );
}
