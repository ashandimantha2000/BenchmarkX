import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
    const user = localStorage.getItem("token");
    if (user === null) {
      window.location.href = "/signin";
    }
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    retypePassword: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password !== data.retypePassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const url = "http://localhost:5555/register";
      navigate('/signin');
      const { data: res } = await axios.post(url, data);
      alert('Registration successful! Please login to continue.');
      // 
      
      
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-light_background">
      <Helmet>
        <title>Reset Password | BenchmarkX</title>
      </Helmet>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex">
        <div className="px-32 pt-24 w-fit">
          <h1 className="pb-2 text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 inline-block text-transparent bg-clip-text">
            Reset Your Password
          </h1>
          <h2>
            Enter your old password and new password.
          </h2>
          <div className="pt-10 w-full max-w-xs">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Old Password
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="Password"
                  type="password"
                  name="password"
                  placeholder="Email"
                  value={data.password}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  New Password
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full  px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="password"
                  type="password"
                  placeholder="************"
                  name="password"
                  value={data.password}
                  required
                  onChange={handleChange}
                />
              </div>
              {/* retype password*/}
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="repeat-password"
              >
                Repeat New Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
                id="repeat-password"
                type="password"
                placeholder="************"
                value={data.retypePassword}
                required
                name="retypePassword"
                onChange={handleChange}
              />
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex items-center justify-between pt-7">
                <button
                  className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Reset Password
                </button>
              </div>

              <div className="flex items-center pt-7">
                <p>Any technical Issues?</p>
                <Link
                  className="pl-5 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                to="/about"
                >
                  Contact Us
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="flex justify-end">
          <img
            src="../src/assets/images/auth-back.svg"
            alt="background-image"
            className="h-screen"
          />
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;