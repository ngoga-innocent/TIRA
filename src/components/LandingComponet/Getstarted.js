import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import Line from "../../Assets/line.svg";
const GetStarted = () => {
  return (
    <div className=" w-full items-center justify-center align-middle flex flex-col mb-7">
      <h1 className="text-orange font-bold align-middle m-11 md:text-2xl">
        How To Get Started
      </h1>
      {/* for large device */}
      <div className="hidden md:flex flex-col items-center">
        <div className="md:flex items-center">
          <div className="rounded-full p-2 bg-blue-300">
            <IoIosPeople size={25} />
          </div>

          <img src={Line} alt="lne" className="hidden md:block" />
          <div className="rounded-full p-2 bg-blue-300">
            <BsWhatsapp size={25} />
          </div>
          <img src={Line} alt="lne" />
          <div className="rounded-full p-2 bg-blue-300">
            <FiRefreshCw size={25} />
          </div>
        </div>
        <div className="flex space-x-20   ">
          <div className="flex flex-col items-center text-center ">
            <div className=" mt-14 max-w-[15rem]">
              <h2 className="mb-2 font-medium ">Register & Sign in</h2>
              <p>Register to be able to access the platform and contents.</p>
            </div>
          </div>

          <div className="flex flex-col  items-center text-center">
            <div className=" mt-14 max-w-[15rem]">
              <h2 className="mb-2 font-medium ">Connect on Whatsapp</h2>
              <p>
                Connect with us through whatsapp to get started with the process
                of acquiring what we offer.
              </p>
            </div>
          </div>
          <div className="flex flex-col  items-center text-center ">
            <div className="mt-14 max-w-[15rem] ">
              <h2 className="mb-2 font-medium ">Start process</h2>
              <p>Start the process of acquiring the loans we offer.</p>
            </div>
          </div>
        </div>
      </div>
      {/* for small devices */}
      <div className="md:hidden">
        <div className=" flex flex-col items-center justify-center">
          <div className="rounded-full p-2 bg-blue-300">
            <IoIosPeople size={25} />
          </div>
          <div className="flex flex-col items-center text-center ">
            <div className=" mt-2 max-w-[15rem]">
              <h2 className="mb-2 font-medium ">Register & Sign in</h2>
              <p>Register to be able to access the platform and contents.</p>
            </div>
          </div>
        </div>
        {/* whatsapp */}
        <div className="flex flex-col items-center justify-center mt-8">
          <div className="rounded-full p-2 bg-blue-300">
            <BsWhatsapp size={25} />
          </div>
          <div className="flex flex-col  items-center text-center">
            <div className=" mt-2 max-w-[15rem]">
              <h2 className="mb-2 font-medium ">Connect on Whatsapp</h2>
              <p>
                Connect with us through whatsapp to get started with the process
                of acquiring what we offer.
              </p>
            </div>
          </div>
        </div>
        {/* Started */}
        <div className="flex flex-col  items-center text-center mt-8">
          <div className="rounded-full p-2 bg-blue-300">
            <FiRefreshCw size={25} />
          </div>
          <div className="flex flex-col  items-center text-center ">
            <div className="mt-2 max-w-[15rem] ">
              <h2 className="mb-2 font-medium ">Start process</h2>
              <p>Start the process of acquiring the loans we offer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetStarted;
