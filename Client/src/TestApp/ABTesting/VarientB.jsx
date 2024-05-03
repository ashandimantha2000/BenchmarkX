//Red Button Variant
import React, { useState } from "react";
function VarientB() {
  //Function to get the CTA count
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Red Button Clicks =" + count);
  return (
    <div>
      <form className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
        <input
          className="border pl-4 rounded-l-lg w-2/3"
          type="email"
          required
          placeholder="Your email here"
        />
        <button
          onClick={handleClick}
          type="submit"
          className="py-3 px-4 bg-red-600 hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default VarientB;
