import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";

function OnsiteSurveys() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/feedback")
      .then((response) => {
        setFeedbacks(response.data.data); // Corrected function name
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-slate-100 w-4/5 h-fit rounded-lg drop-shadow-xl shadow-slate-300 mt-8 mr-11 p-7">
      <h1 className="text-emerald-500 text-xl font-bold">Onsite Surveys</h1>

      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase ">
              <tr>
                <th scope="col" className="px-6 py-3">
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
                {feedbacks.map((feedback, index) => (
                  <tr
                    key={feedback._id}
                    className=" border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
        </div>
      </div>
    </div>
  );
}

export default OnsiteSurveys;
