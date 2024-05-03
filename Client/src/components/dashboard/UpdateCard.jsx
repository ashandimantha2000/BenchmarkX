import React from "react";
import updateCard from "../../components/dashboard/updateCard.json";

function UpdateCard(props) {
  return (
    <div className="pt-5 flex w-5/6 justify-between">

            <div key="">
              <div className="bg-slate-100 w-56 h-24 rounded-lg drop-shadow-xl shadow-slate-300">
                <div className="flex justify-evenly pt-6">
                  <img
                    src={props.image}
                    alt="heart"
                    width={48}
                  />
                  <div className="flex-row">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {props.score}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {props.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
 
    </div>
  );
}

export default UpdateCard;
