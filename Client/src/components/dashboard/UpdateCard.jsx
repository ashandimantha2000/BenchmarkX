import React from "react";
import updateCard from "../../components/dashboard/updateCard.json";

function UpdateCard() {
  return (
    <div className="pt-5 flex w-5/6 justify-between">
      {updateCard.map(
        (data) =>
          data.updateScores &&
          data.updateScores.map((pdata) => (
            <div key={pdata.id}>
              <div className="bg-slate-100 w-56 h-24 rounded-lg drop-shadow-xl shadow-slate-300 hover:scale-105 transition ease-in">
                <div className="flex justify-evenly pt-6">
                  <img
                    src={pdata.image}
                    alt="heart"
                    width={48}
                  />
                  <div className="flex-row">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {pdata.score}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {pdata.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default UpdateCard;
