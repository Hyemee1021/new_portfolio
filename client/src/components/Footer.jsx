import React from "react";

export const Footer = () => {
  return (
    <div className=" w-full mt-20 mx-auto  border-t-4 border-purple-600 rounded-t-lg ">
      <div className=" w-[90%] flex flex-col  items-start mx-auto md:flex-row py-8 ">
        <div className="flex-1 ">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl py-1 px-2 mr-3 ">
            Hyemee's
          </span>
          <span>space</span>
        </div>
        {/* menu */}
        <div className="flex-1">
          <h1 className="font-bold">Menu</h1>
          <ul className="flex gap-5 items-center ">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="flex-1">
          <h1 className="font-bold">Follow Me</h1>
          <ul className="flex gap-5 items-center ">
            <li>Github</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="w-full">Hyemee's space is made by Hyemee Park </div>
    </div>
  );
};
