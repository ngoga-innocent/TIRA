import React from "react";
import Money from "../../Assets/money.png";
const Apply = () => {
  return (
    <div className="h-[40rem] bg-primary py-32 w-full md:flex items-center justify-center">
      <div className="flex items-center justify-center">
      <div className="w-[14rem] h-[7rem] bg-white rounded-3xl transform rotate-45 -ml-[22rem]"/>
        <div className="h-[30rem] w-96 from-cyan-400 to-cyan-100 bg-gradient-to-t rounded-full ml-14" />
        <img src={Money} alt="#" className="-ml-96 h-[30rem]" />
        
      </div>
      <div className="w-[55rem]">
        <h1 className="text-white text-3xl font-bold max-w-[40rem] mb-14">
          Join us in crreating economic opportunities and transforming lives.
        </h1>
        <div className="flex">
          <div className="h-20 w-2 bg-cyan-200 mr-4" />
          <p className="text-gray-400 text-semibold text-xl">
            "Our micro-lending platform makes it easy for anyone to get a loan,
            even if they don't have a perfect credit score. We offer loans of up
            to 10,000 RWF and our interest rates are competitive. We also have a
            variety of repayment options to fit your needs.
          </p>
        </div>
        <button className="rounded-xl bg-white py-6 px-20 mt-14"> <h1 className="font-bold text-primary">Apply now</h1></button>
      </div>
    </div>
  );
};

export default Apply;
