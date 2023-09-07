import React from "react";

import GetAppImage from "../../Assets/GetApp.png";
import AppleIcon from '../../Assets/AppleStore.png'
import PlayIcon from '../../Assets/PlayStore.png'
const GetApp = () => {
  return (
    <div className="md:flex justify-center items-center w-full h-screen">
      <img src={GetAppImage} alt="" className="h-screen" />
      <div className="flex-1 max-w-[40rem] ml-11">
        <h1 className="text-orange font-bold text-4xl mb-10">GET THE APP NOW!</h1>
        <p className="text-xl text-gray-500 font-semibold">
          Need quick access to loans? Download TiraCash, the user-friendly
          micro-lending app that puts fast cash at your fingertips. Get the
          financial support you need with a few taps on your phone and enjoy
          hassle-free borrowing today!
        </p>
        <div className="md:flex mt-14">
         <img src={PlayIcon} alt="#" className="mr-8" />
         <img src={AppleIcon} alt="#" />
        </div>
      </div>
    </div>
  );
};
export default GetApp;
