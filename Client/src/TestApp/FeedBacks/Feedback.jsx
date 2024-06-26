import React from "react";

function Feedback() {
  return (
    <div className="absolute p-9 bottom-0 right-0 flex">
      <a href="/test/feedback" target="_blank">
        <button className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:scale-105 text-white font-bold py-2 px-6 rounded-t-xl rounded-l-xl">
          Feedback?
        </button>
      </a>
    </div>
  );
}

export default Feedback;
