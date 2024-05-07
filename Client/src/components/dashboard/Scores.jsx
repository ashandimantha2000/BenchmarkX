import UpdateCard from "./UpdateCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Scores() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [averageSession, setAverageSession] = useState(0);
  const [bounceRate, setBounceRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [varientAClicks, setVarientAClicks] = useState(0); // New state variable
  const [varientBClicks, setVarientBClicks] = useState(0); // New state variable

  //Get NPS from Server
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

  // Calculate NPS (0-6 detractors, 7-8 passives, 9-10 promoters)
  const detractors = feedbacks.filter(
    (feedback) => feedback.recommend >= 0 && feedback.recommend <= 4
  ).length;
  const promoters = feedbacks.filter(
    (feedback) => feedback.recommend >= 7 && feedback.recommend <= 10
  ).length;
  const nps = (((promoters - detractors) / feedbacks.length) * 100).toFixed(2);

  //Get Session Duration
  useEffect(() => {
    fetch("http://localhost:5555/sessions")
      .then((response) => response.json())
      .then((data) => {
        setSessions(data.data); // Use data.data to access the sessions array
        const totalSessionTime = data.data.reduce(
          (total, session) => total + session.sessionDuration,
          0
        );
        setAverageSession((totalSessionTime / data.data.length).toFixed(2));

        // Calculate bounce rate
        const bounces = data.data.filter(
          (session) => session.sessionDuration < 5
        ).length;
        const bounceRate = ((bounces / data.data.length) * 100).toFixed(2);
        setBounceRate(bounceRate);

      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // Get varient A clicks from server
  useEffect(() => {
    axios
      .get("http://localhost:5555/varientA")
      .then((response) => {
        setVarientAClicks(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get varient B clicks from server
  useEffect(() => {
    axios
      .get("http://localhost:5555/varientB")
      .then((response) => {
        setVarientBClicks(response.data.count);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* {feedbacks.map((feedback, index) => (
        <div key={feedback._id}></div>
      ))} */}
      <div className="flex justify-between w-full">
        {/* Average Session Duration */}
        <UpdateCard
          title="Avg. Session"
          score={`${averageSession} sec.`}
          image="../src/assets/icons/Session.png"
        />
        {/* Bounce Rate */}
        <UpdateCard
          title="Bounce Rate"
          score={`${bounceRate}%`}
          image="../src/assets/icons/Bounce.png"
        />
        {/* Total CTAs */}
        <UpdateCard
          title="Total CTAs"
          score={`${varientAClicks + varientBClicks}`} // Use the state variables here
          image="../src/assets/icons/CTA.png"
        />
        {/* Net Promoter Score */}
        <UpdateCard
          title="NPS"
          score={`${nps}%`}
          image="../src/assets/icons/NPS.png"
        />
      </div>
    </div>
  );
}

export default Scores;