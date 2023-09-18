import React from "react";
import Mission from "../../Assets/About.png";
export const OurMission = () => {
  return (
    <div className="flex items-center justify-center w-full mt-20 ">
      <div className="md:flex justify-center items-center">
        <div className="">
          <div className="flex">
            <div className="h-[32rem] w-[28rem] bg-gradient-to-l from-secondary to-gray-400 rounded-s-[150rem] rounded-e-full -rotate-[30deg]" />
            <img
              src={Mission}
              alt="#"
              className="-ml-[28rem] z-10 mt-14 w-[38rem]"
            />
          </div>
          {/* //caret to be done */}
        </div>
        <div className="w-[36rem]">
          <h2 className="text-orange text-3xl font-bold mb-14">Our Mission</h2>
          <p className="text-gray-700 text-xl font-semibold">
            
            Our mission is to provide access to capital for people who need it
            to start or grow their businesses. We believe that everyone deserves
            a chance to succeed, and we're here to help make that happen.
          </p>
        </div>
      </div>
    </div>
  );
};
