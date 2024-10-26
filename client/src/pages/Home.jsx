import React, { useState } from "react";
import projectImg from "../assets/project7.png";
export const Home = () => {
  const [showDiv, setShowDiv] = useState(false);

  console.log(showDiv);

  const handleMouseEnter = () => {
    setShowDiv(true);
  };
  const handleMouseLeave = () => {
    setShowDiv(false);
  };
  return (
    <div className="w-[90%] mx-auto">
      {/* intro */}
      <div className="my-20">
        <h1 className="font-bold  text-3xl">Welcome to my Blog</h1>
        <p className="my-10 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          excepturi impedit itaque cum! Unde cum illum quasi. Natus ducimus
          beatae maxime minus, soluta quibusdam culpa a, aut excepturi id qui.
        </p>
        <button className="font-semibold text-sm text-pink-500">
          My Resume
        </button>
      </div>
      {/* project */}
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-center">
        <h1 className="font-bold  text-2xl my-10">My Projects</h1>
        <div className="flex flex-col sm:flex-row">
          {/* project box */}
          <div
            className="rounded-md bg-white shadow-md overflow-hidden transition duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className=" relative overflow-hidden">
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
        </div>
      </div>
    </div>
  );
};
