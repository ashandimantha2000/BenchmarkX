import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function FeedbackForm() {
  // Slider Values
  const [recommend, setRecommend] = useState(5);

  // Yes/No Answer
  const [again, setAgain] = useState("");

  // Slider setState
  const handleChange = (event) => {
    setRecommend(event.target.value);
  };

  // Yes/No Answer setState
  const handleAgainChange = (event) => {
    setAgain(event.target.value);
  };

  // Send Data to the server
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveFeedback = () => {
    const data = {
      recommend,
      again,
      feedback,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/feedback", data)
      .then(() => {
        setLoading(false);
        navigate("/Test");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to save book");
        setLoading(false);
      });
  };

  return (
    <div className="bg-gradient-to-r from-sky-400 to-blue-600">
      <Helmet>
        <title>Feedback | BenchmarkX</title>
      </Helmet>
      <div className="flex justify-center">
        <img
          src="../src/assets/images/Logo-Text.png"
          alt="logo"
          width={150}
          className="absolute pt-10"
        />
      </div>
      <div className="flex justify-center h-screen items-center">
        <div className="w-7/12">
          <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                On a scale from 0 to 10, how likely are you to recommend our
                website to a friend or colleague?
              </label>
              <div className="flex items-center justify-center">
                <div className="w-full">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={recommend}
                    onChange={handleChange}
                    className="w-full bg-gradient-to-r from-sky-400 to-blue-600 appearance-none rounded-full h-3"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">0</span>
                    <span className="text-sm">1</span>
                    <span className="text-sm">2</span>
                    <span className="text-sm">3</span>
                    <span className="text-sm">4</span>
                    <span className="text-sm">5</span>
                    <span className="text-sm">6</span>
                    <span className="text-sm">7</span>
                    <span className="text-sm">8</span>
                    <span className="text-sm">9</span>
                    <span className="text-sm">10</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm">Very unlikely</span>
                    <span className="text-sm">Very likely</span>
                  </div>
                </div>
              </div>
              <br />
              <div>
                <p className="block text-gray-700 text-sm font-bold mb-2">
                  Would you use our website again?
                </p>
                <div className="w-1/6 flex justify-between items-center">
                  <input
                    type="radio"
                    id="yes"
                    name="answer"
                    value="Yes"
                    onChange={handleAgainChange}
                  />
                  <label htmlFor="yes">Yes</label>
                  <br />
                  <input
                    type="radio"
                    id="no"
                    name="answer"
                    value="No"
                    onChange={handleAgainChange}
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
              <br />
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="feedback"
              >
                Your Feedback
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Enter Your Feedback"
              />
            </div>
            <br />
            <br />
            <div className="flex items-center justify-between">
              <button
                onClick={handleSaveFeedback}
                className="bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Send
              </button>
            </div>
          </form>
          <p className="text-center text-white">
            &copy;2024 BenchmarkX. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;