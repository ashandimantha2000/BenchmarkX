import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VarientA() {

  const [varientAClicks, setvarientAClicks] = useState(0);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //Define toast message
  const success = () => toast("You Clicked the Purple Button!");

  const validateForm = () => {
    if (email === "") {
      setErrorMessage("Email is required");
      return false;
    }
    // Reset error message if validation passes
    setErrorMessage("");
    return true;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setvarientAClicks(varientAClicks + 1);
    success();

    try {
      const response = await fetch('http://localhost:5555/varientA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ varientAClicks: varientAClicks + 1 }),
      });

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("Purple Button Clicks =" + varientAClicks);

  return (
    <div>
      <form className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
        <input
          className="border pl-4 rounded-l-lg w-2/3"
          type="email"
          required
          placeholder="Your email here"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <button
          onClick={handleClick}
          type="submit"
          className="py-3 px-4 bg-purple-500 hover:bg-palette-dark text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
          focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        >
          Subscribe
        </button>
        
      </form>
      <div className="flex justify-center text-red-500">{errorMessage && <p>{errorMessage}</p>}</div>
      <ToastContainer />
    </div>
  );
}

export default VarientA;