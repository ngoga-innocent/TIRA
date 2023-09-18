import React from "react";
import WhyUs from '../../Assets/WhyUs.png'
export const Choose = () => {
    
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex items-center justify-center text-center ">
        <div>
          <h1 className="text-4xl font-bold mb-20">
            Why Coose <span className="text-orange font-bold ">TiraCash?</span>
          </h1>
          <div className="flex items-center">
          <div className="bg-primary h-24 w-1 mr-4" />
            <div className="max-w-[25rem] text-start">
              <p className="text-secondary text-xl font-semibold font-serif pt-4">
                We offer a variety of loans to fit your needs, and our interest
                rates are competitive. We also have a variety of repayment
                options to fit your budget.
              </p>
              <p className="text-secondary text-xl font-semibold font-serif pt-9">
                We're committed to providing our borrowers with the best
                possible experience. We offer 24/7 customer support, and we're
                always available to answer your questions.
              </p>
            </div>
            <div className="w-[55rem]">
                <img src={WhyUs} alt="#"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
