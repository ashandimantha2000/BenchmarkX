import UpdateCard from "./UpdateCard";
import { useState, useEffect } from "react";
import axios from "axios";

function Scores() {
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

  // Calculate NPS (0-6 detractors, 7-8 passives, 9-10 promoters)
  const detractors = feedbacks.filter(
    (feedback) => feedback.recommend >= 0 && feedback.recommend <= 4
  ).length;
  const promoters = feedbacks.filter(
    (feedback) => feedback.recommend >= 7 && feedback.recommend <= 10
  ).length;
  const nps = (((promoters - detractors) / feedbacks.length) * 100).toFixed(2);

  return (
    <div>
      {/* {feedbacks.map((feedback, index) => (
        <div key={feedback._id}></div>
      ))} */}
      <div className="flex justify-between w-full">
        <UpdateCard
          title="NPS"
          score={`${nps}%`}
          image="../src/assets/icons/heart.png"
        />
        <UpdateCard
          title="Bounce Rate"
          score="3/5"
          image="../src/assets/icons/Bounce.png"
        />
        <UpdateCard
          title="Avg. Session"
          score="-"
          image="../src/assets/icons/Custom.png"
        />
        <UpdateCard
          title="N/A"
          score="-"
          image="../src/assets/icons/heart.png"
        />
      </div>
    </div>
  );
}

export default Scores;
