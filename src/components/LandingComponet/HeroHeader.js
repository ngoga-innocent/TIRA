import React from "react";
import Hero from "../../Assets/hero.png";
import Learn from "../../Assets/learnicon.png";
const HeroHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full">
      <div className="sm:flex sm:flex-col sm:justify-center sm:items-center md:flex md:flex-row-reverse md:justify-end ">
        <img src={Hero} alt="Hero header" className="md:ml-52" />
        <div className="justify-center">
          <div className="text-primary flex items-center justify-center font-bold text-2xl space-x-1 max-w-[23rem] ">
            <h1 className="">
              Up to
              <span className="text-orange px-2"> 10,000 RWF</span>
              Competitive interest rates. Flexible repayment terms.
            </h1>
          </div>
          <p className="max-w-[23rem] text-primary mt-14">
            Get the money you need to start your business or grow your existing
            one
          </p>
          <div className="mt-10 space-x-16 flex items-center w-full">
            <button className="rounded-full text-white font-bold bg-primary px-5 py-2 ">
              Get Started
            </button>
            <button className="rounded-full text-primary font-bold  flex  items-center">
              <img src={Learn} alt="lrn" className="w-3 h-3" />
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroHeader;
