import React, { useState } from "react";
// project images
import projectImg from "../assets/project7.png";
import projectImg2 from "../assets/project5.png";
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
        <h1 className="font-bold  text-3xl">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl py-1 px-2 ">
            Hyemee's
          </span>{" "}
          space
        </h1>
        <p className="my-10 text-sm">
          This is my space to showcase my projects and share highlights from my
          development journey. From responsive designs to interactive
          interfaces, each project reflects my dedication to building
          user-friendly and visually appealing web experiences.
        </p>
        <button
          className="font-semibold text-sm text-pink-600 hover:text-purple-600"
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
            projectDescription="Mongodb, NodeJS, React ,React-bootstrap, HTML"
            projectImg={projectImg}
            projectUrl="https://medical-center-frontend-delta.vercel.app/"
          />

          {/* 2 */}
          {/* Using ProjectBox components */}
          <ProjectBox
            projectName="Travel Management"
            projectDescription="Mongodb, NodeJS, React ,React-bootstrap, HTML"
            projectImg={projectImg2}
            projectUrl="https://tour-manager-frontend.vercel.app/home"
          />
        </div>
      </div>
    </div>
  );
};
