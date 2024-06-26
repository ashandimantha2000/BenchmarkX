import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const user = localStorage.getItem("token");
  if (user === null) {
    window.location.href = "/signin";
  }
  const registerSuccess = () => toast("You have created the account successfully!");
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
      // navigate('/signin');
      // alert("Registration successful! Please login to continue.");
      registerSuccess();
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
        <title>Create a New Account | BenchmarkX</title>
      </Helmet>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex">
        <div className="px-32 pt-24 w-fit">
          <h1 className="pb-2 text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 inline-block text-transparent bg-clip-text">
            Create a New User Account
          </h1>
          <h2>
            Enter the details to create a <span className="font-bold">new</span>{" "}
            user account.
          </h2>
          <div className="pt-10 w-full max-w-xs">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  id="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
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
                Repeat Password
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
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
                  Register the New User
                </button>
              </div>

              <div className="flex items-center pt-7">
                <p>Any technical issues?</p>
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
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signup;