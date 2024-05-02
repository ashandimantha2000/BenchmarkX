import React from "react";

function signin() {
  return (
    <div>
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
            <form>
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="************"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  SIGN IN
                </button>
              </div>
              <div className="flex items-center pt-7">
                <p>Don’t have an account?</p>
                <a
                  className="pl-5 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
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

export default signin;
