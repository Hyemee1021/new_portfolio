import React from "react";

export const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      {/* intro */}
      <div className="my-20">
        <h1 className="font-bold  text-3xl">Welcome to my Blog</h1>
        <p className="my-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          excepturi impedit itaque cum! Unde cum illum quasi. Natus ducimus
          beatae maxime minus, soluta quibusdam culpa a, aut excepturi id qui.
        </p>
        <button className="font-semibold text-sm text-pink-500">
          My Resume
        </button>
      </div>
      <div>
        <h1>My Projects</h1>
        <div className="flex flex-col sm:flex-row">
          <div></div>
        </div>
      </div>
    </div>
  );
};
