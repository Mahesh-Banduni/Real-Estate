import React from "react";

import { Input } from "../index";
import { arrowRight } from "../../utils/icons";

const ContactForm = () => {
  return (
    <div className="w-11/12 m-auto my-10">
      <form action="">
        <div className="flex items-center justify-between gap-10">
          <Input
            label={"Full name"}
            type="text"
            placeholder={"Enter your name here"}
            className={"bg-transparent py-[0.35rem] px-2 capitalize "}
          />
          <Input
            label={"mobile number"}
            type="number"
            placeholder={"Enter your name here"}
            className={"bg-transparent py-[0.35rem] px-2 capitalize "}
          />
          <Input
            label={"Email address"}
            type="email"
            placeholder={"Enter your email here"}
            className={"bg-transparent py-[0.35rem] px-2 capitalize "}
          />
        </div>
        <div className="mt-5">
          <label
            className="capitalize font-medium text-xl text-[#4B4B4B]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="bg-[#F2F2F2] w-full mt-3 capitalize p-5 outline-none"
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="text"
          ></textarea>
        </div>
        <button
          disabled="true"
          className="text-xl flex items-center gap-1 justify-center text-white px-8 py-5 bg-[#BDBDBD]"
        >
          Leave us a Message
          <img className="w-5 h-5 mt-1" src={arrowRight} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
