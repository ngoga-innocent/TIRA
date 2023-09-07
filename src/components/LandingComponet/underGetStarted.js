import React from "react";
import First from "../../Assets/first.svg";
import Second from "../../Assets/secondLanding.svg";
import Third from "../../Assets/third.svg";

const UnderGetStarted = () => {
  return (
    <div className="md:flex items-center justify-evenly px-36">
      <div className="flex-1">
        <img alt="img" src={First} className="w-74 ml-20" />
        <img alt="img" src={Second} className="w-70 -mt-10 " />
        <img alt="img" src={Third} className="w-74 -mt-16 ml-56" />
        {/* <div className="h-14 w-[30rem] rounded-[10px] bg-primary rotate-45 -mt-44 mr-20 opacity-40" /> */}
      </div>
      <div className="flex-1">
        <h1 className="text-4xl max-w-lg text-primary font-bold">
          Secure your <span className="text-orange">future </span> with a loan
          today with us
        </h1>
        <div className="h-2 w-36 bg-primary my-6" />

        <div>
          <p className="text-black font-medium text-lg">
            Tiracash understand taking out a loan is a common way to finance
            various needs and goals, such as starting a business, paying for
            college tuition, making home improvements, or dealing with
            unexpected emergencies.
          </p>
          <button className="rounded-full text-black font-bold border-solid border-2 my-10 px-10 py-5 border-primary ">
              Learn More 
            </button>
        </div>
      </div>
    </div>
  );
};

export default UnderGetStarted;
