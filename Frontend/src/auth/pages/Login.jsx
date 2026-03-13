import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {

  const navigate = useNavigate()

  const { loading, handleLogin } = useAuth()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await handleLogin({ email, password })
    navigate("/home")
  }

  if (loading) {
    return (
      <div>Loading page</div>
    )
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          className="h-20 w-35"
          src="/HireZen-AI-logo.webp"
          alt="HireZen AI Logo"
        />
        <h1 className="text-7xl font-bold pt-5">Welcome Back</h1>
        <h1 className="opacity-50 font-light pt-2">
          Continue optimizing your career with HireZen AI
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 text-sm pt-10"
      >
        <div className="w-140 flex flex-col gap-2">
          <h1>Email</h1>
          <input
            type="email"
            placeholder="Enter your email here"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full px-3 py-2 border border-[#7a7a7a52] rounded-md"
          />

          <h1 className="pt-3">Password</h1>
          <input
            type="password"
            placeholder="Enter your password here"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full px-3 py-2 border border-[#7a7a7a52] rounded-md"
          />
        </div>

        <button
          type="submit"
          className="mt-5 w-full px-3 py-3 border border-[#7a7a7a52] rounded-md bg-[#3b359a]"
        >
          Login
        </button>
      </form>

      <h1 className="pt-5 text-sm">
        Don't have an account?{" "}
        <Link className="text-[#21c768]" to="/register">
          {" "}
          Create one
        </Link>
      </h1>
    </div>
  );
};

export default Login;
