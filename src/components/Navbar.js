import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between px-4 h-24 place-items-center">
      <div className="flex items-center ">
        {/* Logo */}
        <img src={Logo} alt="logo" />
        <div className="flex px-3">
          <h1 className="text-[#7D7D7D] font-bold text-3xl">tira</h1>
          <h1 className="text-[#27374D] font-bold text-3xl">cash</h1>
        </div>
      </div>
      {/* Navbar Links */}
      <div className="hidden md:flex items-center space-x-20">
        <div className="">
          <ul className="flex space-x-20">
            <li className="text-primary text-xl font-semibold hover:text-secondary">
              <a href="home.html"> Home </a>
            </li>
            <li className="text-primary text-xl font-semibold hover:text-secondary">
              <a href="home.html"> About Us </a>
            </li>
            <li className="text-primary text-xl font-semibold hover:text-secondary">
              <a href="home.html"> Contact Us </a>
            </li>
            <li className="text-primary text-xl font-semibold hover:text-secondary">
              <a href="home.html"> Sign in </a>
            </li>
          </ul>
        </div>

        <button className="rounded bg-primary p-2 flex items-center justify-between">
          <a href="home.html" className="text-white font-bold mr-1">
            Open an account
          </a>
          <BsArrowUpRight size={20} color="white" />
        </button>
      </div>
      {/* DROP DOWN */}
      <div className="md:hidden flex   justify-between">
        <div
          className={
            open
              ? "fixed mt-8  left-6 top-10 pt-3 ease-in-out duration-500 h-full w-6/12 pb-20 z-30 bg-white"
              : "hidden"
          }
        >
          <ul>
            <li className="text-primary text-l font-semibold hover:text-secondary">
              <a href="home.html"> Home </a>
            </li>
            <li className="text-primary text-l font-semibold hover:text-secondary">
              <a href="home.html"> About Us </a>
            </li>
            <li className="text-primary text-l font-semibold hover:text-secondary">
              <a href="home.html"> Contact Us </a>
            </li>
            <li className="text-primary text-l font-semibold hover:text-secondary">
              <a href="home.html"> Sign in </a>
            </li>
          </ul>
          <button className="rounded bg-primary p-1 mt-3">
            <a href="home.html" className="text-white font-bold">
              Open an account
            </a>
          </button>
        </div>

        {open ? (
          <AiOutlineClose
            size={20}
            className="mt-6"
            onClick={() => setOpen(!open)}
          />
        ) : (
          <AiOutlineMenu
            size={20}
            className="mt-6"
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
    </nav>
  );
};
export default Navbar;
