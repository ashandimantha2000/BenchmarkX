import React from "react";

function WelcomeBanner() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="relative bg-indigo-200 dark:bg-indigo-500 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Background illustration */}
      <div
        className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block"
        aria-hidden="true"
      >
        <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
          {/* SVG code */}
        </svg>
      </div>

      {/* Content */}
      <div className="relative">
        {/* added gradient to the text */}
        <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
          {greeting}, Benchmark
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
            X
          </span>{" "}
          👋
        </h1>
        <p className="dark:text-indigo-200">Make. Test. Analyze. Insight. Evaluate.</p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
