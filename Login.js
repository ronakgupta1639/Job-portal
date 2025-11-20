import React, { useState } from "react";
import axios from "axios";
import { Button, Input } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      notifications.show({
        title: "Login Successful",
        message: "Welcome!",
        color: "green",
      });

      nav("/");
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
      <h2 className="text-xl font-bold mb-4">Login</h2>

      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="mb-3"
      />

      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="mb-3"
      />

      <Button fullWidth type="submit">
        Login
      </Button>
    </form>
  );
}
