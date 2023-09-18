import React from "react";
import icon from "../../Assets/icon1.png";
import image1 from "../../Assets/image 1.png";
import image2 from "../../Assets/imagekey2.png"
import image3 from "../../Assets/imagekey3.png"
import image4 from "../../Assets/imagekey4.png"
import image5 from "../../Assets/imagekey5.png"
import image6 from "../../Assets/imagekey6.png"
import icon2 from '../../Assets/iconkey2.png'
import icon3 from "../../Assets/iconkey3.png"
import icon4 from "../../Assets/iconkey4.png"
import icon5 from "../../Assets/iconkey5.png"
import icon6 from "../../Assets/iconkey6.png"
export const KeyFeature = () => {
  const SingleItem = ({ Image, Icon, title, paragraph }) => {
    return (
      <div className="w-[32rem]">
        <div className="flex flex-col items-center ">
          <img src={Image} alt="Image" />
          <div className="w-[9rem] h-[7rem] bg-white items-center -mt-[3.5rem] rounded-3xl justify-center flex flex-col border-2">
            <img src={Icon} alt="Icons" />
          </div>
        </div>

        <h1 className="text-center text-xl font-bold mt-9">{title}</h1>
        <p className="text-xl text-center">{paragraph}</p>
      </div>
    );
  };
  return (
    <div className="flex flex-col w-full items-center py-20">
      <h2 className="text-orange text-3xl font-bold mb-6">Key Features</h2>
      <h4 className="text-center text-2xl max-w-[70rem] text-gray-800 mb-10">
        Our micro-lending platform offers a variety of features that makes it
        easy for borrowers to get the money they need, including:
      </h4>
      <div className="flex">
        <SingleItem
          paragraph="Our Platform enables partners, beneficiaries,and admins to authenticate securely"
          Icon={icon}
          Image={image1}
          title="Seamless Authentication"
        />
        <SingleItem
          paragraph="We simplify the KYC process by allowing users to submit their data via WhatsApp. Our platform..."
          Icon={icon2}
          Image={image2}
          title="KYC Data Verification"
        />
        <SingleItem
          paragraph="Our platform automates loan status checks, enabling partners to determine if a user..."
          Icon={icon3}
          Image={image3}
          title="Efficient Loan Management"
        />
      </div>
      <div className="flex mt-14">
        <SingleItem
          paragraph="Once a loan is approved, our platform seamlessly connects with K-Remit to disburse funds to... "
          Icon={icon4}
          Image={image4}
          title="Secure Fund Disbursement"
        />
        <SingleItem
          paragraph="Loans between Rwf 5000-10000 are pre-approved, allowing borrowers to receive funds quickly. Our platform expedites... "
          Icon={icon5}
          Image={image5}
          title="Instant Loan Approval"
        />
        <SingleItem
          paragraph="Borrowers can make loan payments easily through theK-Pay API. The platform guides users..."
          Icon={icon6}
          Image={image6}
          title="Convenient Loan Payments"
        />
      </div>
    </div>
  );
};
