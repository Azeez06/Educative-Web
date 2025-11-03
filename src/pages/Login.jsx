import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication
    if (email === "admin@example.com" && password === "123456") {
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Invalid email or password. Try admin@example.com / 123456");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - image */}
      <div className="hidden md:flex md:w-1/2 bg-[#002B5B] justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
          alt="Students working"
          className="object-cover w-full h-full opacity-80"
        />
      </div>

      {/* Right side - form */}
      <div className="flex w-full md:w-1/2 justify-center items-center px-6 py-12 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src="/logo.png" alt="My Logo" className="h-12" />
          </div>

          {/* Welcome text */}
          <h2 className="text-3xl font-bold text-center text-[#002B5B] mb-2">
            Welcome Back
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Sign in to continue your journey of learning and growth.
          </p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="azeezsulaimon05@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00BFFF] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00BFFF] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#002B5B] text-white font-semibold hover:bg-[#013870] transition duration-200 shadow-md"
            >
              Sign In
            </button>

            <p className="text-center mt-4 text-[#00BFFF] hover:underline cursor-pointer">
              Forgot password?
            </p>

            <p className="text-center mt-2 text-gray-600">
              Don’t have an account?{" "}
              <span
                onClick={() => alert("Redirect to signup page (coming soon)")}
                className="text-[#00BFFF] font-medium hover:underline cursor-pointer"
              >
                Create one
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
