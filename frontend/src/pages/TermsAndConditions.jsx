import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="pt-10 w-[85%] m-auto font-interRegular">
      <div className="flex items-center justify-center">
        <h1 className="text-center max-sm:text-2xl font-interSemiBold text-3xl text-primary-color my-10 border-b-2 pb-2 border-primary-color">
          Terms And Conditions
        </h1>
      </div>
      <div className="border-4 p-10 border-primary-color bg-second-color w-full ">
        <p>
          Buying a property is the biggest and most expensive decision a person
          makes in their lifetime. Hiring a real estate lawyer smoothens the
          whole process of buying a property.
        </p>
        <div className="gap-5 p-10 w-full grid grid-cols-2 grid-rows-1 max-md:grid-cols-1 max-md:grid-rows-2 ">
          <ul className="list-disc ">
            <li>
              <span className="capitalize font-interSemiBold">
                {" "}
                Document Verification{" "}
              </span>
              All the Property documents like title check, sale deed are
              diligently examined by the legal expert before the property deed
              is made final.
            </li>
            <li>
              <span className="capitalize font-interSemiBold">
                {" "}
                Protection from Legal Disputes{" "}
              </span>
              A legal expert verifies the property for any legal disputes that
              might get a buyer into trouble.
            </li>
          </ul>
          <ul className="list-disc">
            <li>
              <span className="capitalize font-interSemiBold">
                {" "}
                Safeguards from Fraudulent Sellers{" "}
              </span>
              All the Property documents like title check, sale deed are
              diligently examined by the legal expert before the property deed
              is made final.
            </li>
            <li>
              <span className="capitalize font-interSemiBold">
                {" "}
                Hassle-free Process{" "}
              </span>
              A legal expert verifies the property for any legal disputes that
              might get a buyer into trouble.
            </li>
          </ul>
        </div>
        <Link className="btn bg-primary-color text-white" to="/contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
