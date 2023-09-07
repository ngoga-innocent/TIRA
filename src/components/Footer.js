import React from "react";
import IconUp from ".././Assets/Arrow---Up-3.png";
const Footer = () => {
  return (
    <div className="w-full py-14">
      <div className="float-right mr-20 flex-col justify-center items-center" onClick={()=>alert('yet to be done')}>
        <div className=" flex items-center justify-center h-[8rem] w-[8rem] rounded-full border-dashed border-primary border-2 ">
          <div className="rounded-full bg-primary h-[6rem] w-[6rem] flex items-center justify-center">
            <div className="rounded-xl border-white border-2 w-[3rem] h-[3rem] flex justify-center items-center">
              <img src={IconUp} alt="#" />
            </div>
          </div>
        </div>
        <p>Back to Top</p>
      </div>
      <div className="flex px-10">
         <div className="w-[50rem]">
            <p className="text-primary text-xl font-bold">Tiracash</p>
            <p className="text-primary text-lg mt-4">Customer service</p>
            <p className="text-gray-400">7/7 support By chat, phone,Email</p>
         </div>
         <div>
            second column
         </div>
      </div>
    </div>
  );
};
export default Footer;
