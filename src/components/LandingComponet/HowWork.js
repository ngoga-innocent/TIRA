import React from "react";
import Logo from "../../Assets/Logo.png";
const HowWork = () => {
  return (
    <div className="w-full my-20">
      <div className="text-center">
        <h1 className="text-secondary text-4xl font-bold"> How does it work</h1>
        <h1 className="text-orange text-3xl font-bold mt-4">Tiracash App</h1>
      </div>
      <div className="md:flex justify-between items-center px-20 mt-20 ">
        <div>
          <div className="py-10 px-10 bg-gradient-to-r from-primary to-gradient1 rounded-lg w-[30rem]">
            <h1 className="text-white font-semibold text-2xl">
              Create new Account
            </h1>
            <p className="text-white font-normal text-l max-w-[18rem] mt-4">
              Create new account and complete all requirements
            </p>
          </div>
          <div className="w-[30rem] px-10 py-4 bg-slate-200 rounded-xl mt-6">
            <h1 className="font-semibold">Complete your profile Data</h1>
          </div>
          <div className="w-[30rem] px-10 py-4 bg-slate-200 rounded-xl mt-6">
            <h1 className="font-semibold">Finish and enjoy Your app</h1>
          </div>
          <div className="w-[30rem] px-10 py-4 bg-slate-200 rounded-xl mt-6">
            <h1 className="font-semibold">Get Started with transaction</h1>
          </div>
        </div>
        <div className="pt-20 bg-blue-100 rounded-3xl px-10 scroll-pb-10 ">
          <div className="w-[30rem] bg-white rounded-3xl text-center items-center justify-center -pb-15">
            <div className="flex items-center justify-center pt-32">
              <img src={Logo} alt="logo" className="w-10 mr-4" />
              <h1 className="text-3xl text-gray-500 font-bold">
                Tira<span className="text-primary">Cash</span>
              </h1>
            </div>
            <h2 className="text-primary text-xl font-bold">Appy for a Loan</h2>
            <div className="pt-30 py-10">
                <h2 className="text-primary font-bold text-xl">🥳 You made it!</h2>
                <div className="flex items-center justify-center mt-4">
                    <div className="h-2 bg-primary rounded-full w-10 mr-2" />
                    <div className="h-2 bg-primary rounded-full w-10 mr-2"  />
                    <div className="h-2 bg-primary rounded-full w-10" />
                </div>
            </div>
            <h2 className="text-gray-700 text-start ml-10"><span className="text-red-500">*</span>Bank Name</h2>
            <input contentEditable={false} className=" border-gray-400 border-2 w-[25rem] py-3 rounded-lg disabled:opacity-70" disabled />
            <h2 className="text-gray-700 text-start ml-10"><span className="text-red-500">*</span>Account Number</h2>
            <input contentEditable={false} className=" border-gray-400 border-2 w-[25rem] py-3 rounded-lg disabled:opacity-70" disabled />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowWork;
