import { Helmet } from "react-helmet";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Signin() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5555/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.token);
      console.log(res);
      if (res === "OK") {
        navigate("/");
      }
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
    <div>
      <Helmet>
        <title>Sign In | BenchmarkX</title>
      </Helmet>
      <div className="flex justify-center">
        <img
          src="../src/assets/images/Logo-Text.png"
          alt="logo"
          width={150}
          className="absolute pt-10"
        />
      </div>
      <div className="flex justify-between">
        <div className="p-44 h-screen">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 inline-block text-transparent bg-clip-text">
            Sign In
          </h1>
          <h2>Enter your email and password to sign in</h2>
          <div className="pt-6 w-full max-w-xs">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="Email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={data.email}
                  required
                />
                {error && (
                  <p className="text-red-500 text-xs italic">{error}</p>
                )}
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="************"
                  onChange={handleChange}
                  value={data.password}
                  required
                  name="password"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  SIGN IN
                </button>
              </div>
              <div className="flex items-center pt-7">
                <p>Don’t have an account?</p>
                <div className="pl-5 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                  Contact Us
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
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

export default Signin;