import React, { useState } from "react";
// icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(showInput);
  return (
    <div className="border w-full relative">
      <div className="w-[90%] sm:w-4/5 mx-auto  flex flex-row justify-between items-center text-gray-500  py-2">
        {/* logo */}
        <div className=" flex gap-2 items-center">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl py-1 px-2 ">
            Hyemee's
          </div>
          <div>space</div>
        </div>
        {/* search bar */}
        <div className="flex gap-2 items-center">
          <AiOutlineSearch onClick={toggleInput} />
          <input type="text" className="hidden md:block bg-slate-100" />
          <input
            type="text"
            className={`${
              showInput ? " absolute top-10 left-0 w-full md:block " : "hidden"
            }   bg-slate-100 rounded-md pl-3 py-1`}
            placeholder="Search.."
          />
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-5 items-center ">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="md:hidden">
          <IoMenuSharp className="cursor-pointer" onClick={toggleMenu} />
        </div>
        {showMenu && (
          <div className="w-[50%] bg-slate-100 absolute top-[100%] right-0">
            <ul className="flex flex-col  w-[50%] bg-slate-100 min-h-full py-5 gap-5 items-center  mx-auto">
              <li className="cursor-pointer">Home</li>
              <li lassName="cursor-pointer">About</li>
              <li lassName="cursor-pointer">Projects</li>
            </ul>
          </div>
        )}

        <div>
          <FaMoon />
        </div>
      </div>
    </div>
  );
};