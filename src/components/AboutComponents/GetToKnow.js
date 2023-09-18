import React from "react";
const GetToKnow = () => {
  return (
   <div className="flex items-center justify-center mt-10">
     <div className="container bg-gradient-to-r from-gray-200 to-gray-50 w-full flex items-center justify-center rounded-[4rem] py-20 mt-10 te ">
      <div className="justify-center text-center">
        <h1 className="text-[3rem] text-primary font-bold pb-10">
          Get to Know
          <span className="text-orange bg-rose-200 rounded-xl px-2">
            about us
          </span>
        </h1>
        <p className="max-w-[50rem] text-xl font-semibold text-gray-700">
          We're a team of experienced financial professionals who are passionate
          about helping people achieve their financial goals. We understand that
          starting or growing a business can be a daunting task, and we're here
          to make the process as easy as possible.
        </p>
      </div>
    </div>
   </div>
  );
};

export default GetToKnow;
