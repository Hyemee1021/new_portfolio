import React, { useState } from "react";
import projectImg from "../assets/project7.png";
import HyeMeePark from "../assets/hyemeePark.pdf";
import { useSelector } from "react-redux";

export const ProjectBox = ({ projectName, projectDescription, projectImg }) => {
  const [showDiv, setShowDiv] = useState(false);

  //   theme
  const theme = useSelector((state) => state.light.value);
  console.log("global state" + theme);

  const handleMouseEnter = () => {
    setShowDiv(true);
  };
  const handleMouseLeave = () => {
    setShowDiv(false);
  };
  return (
    <div
      className={`rounded-md shadow-md overflow-hidden transition-transform ease-in-out duration-300 flex-1 ${
        showDiv ? "border-pink-300 border-2" : ""
      } ${theme ? "bg-white " : "bg-slate-700"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`relative overflow-hidden `}>
        <img
          src={projectImg}
          alt=""
          className={`rounded-md transition-transform  duration-300 ease-in-out ${
            showDiv ? "scale-110" : "scale-100"
          }`}
        />
      </div>
      <div className="my-8 w-[90%] mx-auto ">
        <h2 className="font-semibold">NeighborMC</h2>
        <p className="text-sm my-3">React, Node.js, Tailwind.css</p>
        {showDiv && (
          <button
            className={`text-pink-600 hover:text-purple-600  text-sm font-semibold transition-opacity ease-in-out duration-500 ${
              showDiv ? "opacity-100" : "opacity-0"
            }`}
          >
            Visit
          </button>
        )}
      </div>
    </div>
  );
};