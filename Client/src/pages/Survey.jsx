import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import { Helmet } from "react-helmet";

function Survey() {
  const user = localStorage.getItem("token");
  if (user === null) {
    window.location.href = "/signin";
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/feedback")
      .then((response) => {
        setFeedbacks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 10);
  };

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 10);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-light_background">
      <Helmet>
        <title>Onsite Surveys | BenchmarkX</title>
      </Helmet>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="p-10 relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        
        <h1 className="text-emerald-500 text-xl font-bold">Onsite Surveys</h1>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase ">
            <tr>
              <th scope="col" className="px py-3">
                Feedback
              </th>
              <th scope="col" className="px-6 py-3">
                Score
              </th>
              <th scope="col" className="px-6 py-3">
                ReVisit
              </th>
            </tr>
          </thead>
          {loading ? (
            <Spinner />
          ) : (
            <tbody>
              {feedbacks.slice(0, visible).map((feedback, index) => (
                <tr
                  key={feedback._id}
                  className=" border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {feedback.feedback}
                  </th>
                  <td className="px-6 py-4">{feedback.recommend}/10</td>
                  <td className="px-6 py-4">{feedback.again}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="flex justify-center pt-10">
          {visible < feedbacks.length && (
            <button
              className="w-fit bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={showMoreItems}
            >
              Show More
            </button>
          )}
          {visible > feedbacks.length && (
            <button
              className="w-fit bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={showLessItems}
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Survey;
