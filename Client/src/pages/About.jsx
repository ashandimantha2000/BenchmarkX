import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

function About() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = localStorage.getItem("token");
  if (user === null) {
    window.location.href = "/signin";
  }
  return (
    <div className="flex h-screen overflow-hidden bg-light_background">
      <Helmet>
        <title>About | BenchmarkX</title>
      </Helmet>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-6 w-full max-w-9xl mx-auto flex-1">
            <h1 className="sub-heading">
              About <span className="text-gray-800">Benchmark</span>
              <span>
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                  X
                </span>
              </span>
            </h1>
            <hr />
          </div>
          <div className="px-7">
            <p>
              Welcome to BenchmarkX, the cutting-edge User Experience Evaluation
              and Digital Insights Platform designed to propel businesses into
              the future of digital innovation. In today's fast-paced world of
              technological advancement and digital transformation,
              understanding and optimizing user experiences have become
              paramount for success.
            </p>
            <br />
            <p>
              BenchmarkX stands at the forefront of this evolution, offering
              businesses a comprehensive solution to analyze, track, and enhance
              user interactions across various digital platforms. From web
              applications to mobile interfaces, BenchmarkX provides a holistic
              approach to evaluating user experiences, driving customer
              satisfaction, and maximizing business outcomes.
            </p>
            <br />
            
            <p>
              Built on industry-leading technologies and methodologies,
              BenchmarkX combines the agility of Agile and Lean UX with the
              precision of data science to deliver unparalleled results. By
              integrating with third-party applications and offering advanced
              data visualization capabilities, BenchmarkX enables businesses to
              stay ahead of the competition and deliver exceptional digital
              experiences.
            </p>
            <br />
            <p>
              Join the ranks of forward-thinking businesses revolutionizing user
              experience evaluation with BenchmarkX. Explore the possibilities,
              unlock insights, and embark on a journey towards digital
              excellence with BenchmarkX by your side. Welcome to the future of
              user experience evaluation. Welcome to BenchmarkX.
            </p>
            <a href="https://ashandimantha.vercel.app/" target="_blank">
              <button
                className="mt-7 bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Visit our website
              </button>
            </a>
          </div>
        </main>
        <br />
        <div className="px-7 pt-4 pb-10 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
          <h1 className="text-2xl  text-gray-800 font-extrabold ">
            Get in touch
          </h1>
          <hr />
          <div className="flex items-center mt-2 text-gray-600">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="pl-3">
              NSBM Green University, Pitipana, Homagana Sri Lanka
            </div>
          </div>

          <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="pl-3">+94 71 311 2927</div>
          </div>

          <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="pl-3">ashandimanthalk@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
