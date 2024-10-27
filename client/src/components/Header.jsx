import React, { useEffect, useState } from "react";
// icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// redux
import { useDispatch, useSelector } from "react-redux";
import { toggleLight } from "../store.js";
export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  // redux
  const dispatch = useDispatch();
  const light = useSelector((state) => state.light.value);

  const toggleMode = () => {
    dispatch(toggleLight(!light));
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div
      className={`border w-full shadow-sm z-50  sticky top-0 left-0 ${
        light ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <div
        className={`w-[90%] sm:w-4/5 mx-auto flex flex-row justify-between items-center py-2 `}
      >
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
        <div className="hidden sm:block">
          <ul className="flex gap-5 items-center ">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="sm:hidden">
          <IoMenuSharp className="cursor-pointer" onClick={toggleMenu} />
        </div>
        {showMenu && (
          <div className="w-[50%] bg-slate-50 absolute top-[100%] right-0 shadow-lg">
            <div className="pl-2 pt-2">
              <IoMdClose
                onClick={closeMenu}
                className="cursor-pointer"
                size={20}
              />
            </div>
            <ul className="flex flex-col  w-[50%] bg-slate-50 min-h-full py-5 gap-5 items-center  mx-auto">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Projects</li>
            </ul>
          </div>
        )}

        <div>
          {light ? (
            <FaMoon onClick={toggleMode} />
          ) : (
            <FaSun onClick={toggleMode} />
          )}
        </div>
      </div>
    </div>
  );
};
