import React,{useState} from "react";
import { BsArrowUpRight } from "react-icons/bs";
const FAQ = () => {
    const [clicked,setClicked]=useState(0)
  const faqQuestion = [
    {
      question: "TiraCash is Bank",
      answer:
        "Tiracash is revolutionizing access to micro-loan facilities through an innovative micro-lending platform. Our solution combines the power of everyday tools and services to provide a seamless, user friendly, experience for partners and borrowers. With our platform we aim to bridge gap in micro-lending and empower individuals to meet their financials needs quickly and efficiently.",
    },
    {
      question: "Who is eligible to get a Tiracash loan",
      answer: "Who is eligible to get a Tiracash loan",
    },
    {
      question: "Who is eligible of loan works",
      answer: "Who is eligible of loan works",
    },
  ];
  return (
    <div className="w-full  md:flex px-20 justify-between">
      <div>
        <h1 className="text-orange font-extrabold text-4xl max-w-[30rem]">
          Frequently Asked Question About TiraCash
        </h1>
        <button className="rounded bg-primary py-4 px-7 flex items-center justify-between mt-12">
          <a href="home.html" className="text-white font-bold mr-1">
            Check more FAQ
          </a>
          <BsArrowUpRight size={20} color="white" />
        </button>
      </div>
      <div className="px-5 items-start justify-start w-[50%] ">
        {faqQuestion.map((item,index)=>{
            return(
                <div onClick={()=>setClicked(index)} className="bg-zinc-100 rounded-xl py-4 mb-14 px-12 items-center justify-center">
                    <p className="text-xl text-gray-600 py-2">{item?.question}</p><br/>
                    
                    {clicked===index && <div>
                    <hr className="mb-4 h-2" style={{color:"black"}}/>
                        <span className="text-gray-700 pt-3" > {item?.answer}</span>
                    </div>}
                </div>
            )
        })}
      </div>
    </div>
  );
};
export default FAQ;
