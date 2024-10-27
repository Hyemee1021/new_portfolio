import React, { useState } from "react";
import projectImg from "../assets/project7.png";
import HyeMeePark from "../assets/hyemeePark.pdf";

import { ProjectBox } from "../components/ProjectBox";
export const Home = () => {
  const handleMouseEnter = () => {
    setShowDiv(true);
  };
  const handleMouseLeave = () => {
    setShowDiv(false);
  };

  const handleDownloadClick = () => {
    window.open(HyeMeePark, "_blank");
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
        <button
          className="font-semibold text-sm text-pink-600"
          onClick={handleDownloadClick}
        >
          My Resume
        </button>
      </div>
      {/* project */}
      <div className="mx-auto flex flex-col items-center justify-center">
        <h1 className="font-bold  text-2xl my-10">My Projects</h1>
        <div className="flex flex-col sm:flex-row gap-8">
          {/* Using ProjectBox components */}
          <ProjectBox
            projectName="NeighborMC"
            projectDescription="React, Node.js, Tailwind.css"
            projectImg={projectImg}
          />

          {/* 2 */}
          {/* Using ProjectBox components */}
          <ProjectBox
            projectName="NeighborMC"
            projectDescription="React, Node.js, Tailwind.css"
            projectImg={projectImg}
          />
        </div>
      </div>
    </div>
  );
};
