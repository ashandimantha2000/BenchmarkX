import { Helmet } from "react-helmet";
import { useState } from "react";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    // Perform sign in logic if validations pass
    if (!emailError && !passwordError) {
      // Perform sign in logic here
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
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={validateEmail}
                />
                {emailError && (
                  <p className="text-red-500 text-xs italic">{emailError}</p>
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={validatePassword}
                />
                {passwordError && (
                  <p className="text-red-500 text-xs italic">{passwordError}</p>
                )}
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
                <a
                  className="pl-5 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/signup"
                >
                  Sign Up
                </a>
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
