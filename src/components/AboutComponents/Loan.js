import React from "react";
import Oval1 from "../../Assets/Oval.png";
import Oval2 from "../../Assets/Oval (1).png";
import Oval3 from "../../Assets/Oval (3).png";
import Oval4 from "../../Assets/Oval (4).png";
import Oval5 from "../../Assets/Oval (5).png";
import Oval6 from "../../Assets/Oval (2).png";
import { LuCheckCheck } from "react-icons/lu";
export const Loan = () => {
  const Message = ({ icon, message, time }) => {
    return (
      <div className="flex items-center">
        <img src={icon} alt="#" className="self-end" />
        <div className="flex bg-msg  rounded-2xl justify-between w-[30rem] h-10 px-4 text-center self-end">
          <p className="text-center">{message}</p>
          <div className="text-bold self-end flex">
            <p className="text-bold self-end  text-sm text-clip text-gray-300">
              {time}
            </p>
            <div className="flex">
              <LuCheckCheck className="text-red" style={{ color: "blue" }} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="py-14 w-full flex px-14 bg-chatbg">
      <div className="w-full items-center justify-center flex flex-col">
        <div className="">
          <Message
            message="Hallo TiraCash,ik ben Gundogan"
            time="11:43"
            icon={Oval1}
          />
        </div>
        <div className="flex justify-between w-full mt-6">
          <Message
            message="HI tiraCash, I am Ghandi"
            time="11:43"
            icon={Oval2}
          />
          <Message
            message="HI tiraCash, I am Angel"
            time="11:43"
            icon={Oval6}
          />
        </div>

        <div className="w-[80rem] mt-20">
          <p className="font-bold text-3xl text-gray-700 w-max-[30rem] text-center">
            At TiraCash, we have revolutionized the way individuals access
            short-term loans with our cutting-edge micro-lending platform. Say
            goodbye to lengthy paperwork and complicated processes. Now, you can
            secure a loan at the lowest interest rate with just a few simple
            WhatsApp messages.
          </p>
        </div>
        
        <div className="flex justify-between w-full mt-6">
          <Message
            message="Olá TiraCash, sou Santos"
            time="11:43"
            icon={Oval3}
          />
          <Message
            message="Hola TiraCash, soy Roy"
            time="11:43"
            icon={Oval4}
          />
        </div>
        <div className="mt-6">
          <Message
            message="Salut TiraCash, je suis Eric."
            time="11:43"
            icon={Oval5}
          />
        </div>
      </div>
    </div>
  );
};
