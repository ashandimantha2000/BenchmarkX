import { Helmet } from "react-helmet";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const errors = {};

    // if (!email) {
    //   errors.email = "Email is required";
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = "Invalid email format";
    // }

    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!repeatPassword) {
      errors.repeatPassword = "Repeat password is required";
    } else if (repeatPassword !== password) {
      errors.repeatPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log("Form submitted");
    } else {
      setErrors(errors);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Create a New Account | BenchmarkX</title>
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
        <div className="px-48 pt-32 h-screen">
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
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  id="Email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
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
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.password ? "border-red-500" : ""
                  }`}
                  id="password"
                  type="password"
                  placeholder="************"
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">
                    {errors.password}
                  </p>
                )}
                {/* retype password*/}
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="repeat-password"
                >
                  Repeat Password
                </label>
                <input
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.repeatPassword ? "border-red-500" : ""
                  }`}
                  id="repeat-password"
                  type="password"
                  placeholder="************"
                  value={repeatPassword}
                  required
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                {errors.repeatPassword && (
                  <p className="text-red-500 text-xs italic">
                    {errors.repeatPassword}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register the New User
                </button>
              </div>

              {/* <div className="flex items-center pt-7">
                <p>Already have an account?</p>
                <a
                  className="pl-5 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="/signin"
                >
                  Sign In
                </a>
              </div> */}
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

export default Signup;
