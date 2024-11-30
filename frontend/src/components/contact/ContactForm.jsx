import React from "react";

import { Input } from "../index";
import { arrowRight } from "../../utils/icons";
import useContact from "../../hooks/useContact";

const ContactForm = () => {
  const { errors, handleSubmit, message, register, submitForm } = useContact();

  return (
    <div className="w-11/12 m-auto my-10">
      <form onSubmit={handleSubmit(submitForm)} action="">
        <div className="flex items-center justify-between gap-10 max-lg:flex-wrap max-lg:justify-center max-lg:gap-5">
          <div className="flex flex-col w-full">
            <Input
              label={"Full name"}
              type="text"
              placeholder={"Enter your name here"}
              className={"bg-transparent py-[0.35rem] px-2 "}
              {...register("fullName", {
                required: true,
              })}
            />
            {errors.fullName && (
              <p className="error-message"> Name is require </p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              label={"mobile number"}
              type="number"
              placeholder={"Enter your name here"}
              className={"bg-transparent py-[0.35rem] px-2 "}
              {...register("phone", {
                required: true,
                validate: {
                  minLength: (value) =>
                    value.length >= 10 ||
                    "mobile number must be at least 10 characters",
                },
              })}
            />
            {errors.phone && (
              <p className="error-message">{errors?.phone?.message}</p>
            )}
          </div>
          <div className="flex flex-col w-full">
            <Input
              label={"Email address"}
              type="email"
              placeholder={"Enter your email here"}
              className={"bg-transparent py-[0.35rem] px-2 "}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error-message">{errors?.email?.message}</p>
            )}
          </div>
        </div>
        <div className="mt-5 flex flex-col">
          <label
            className="capitalize font-medium text-xl text-[#4B4B4B]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            className="bg-[#F2F2F2] w-full mt-3 p-5 outline-none"
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Enter message"
          ></textarea>
          {errors.message && (
            <p className="error-message">Message field is required</p>
          )}
        </div>
        <button
          type="submit"
          className="text-xl flex items-center gap-1 justify-center text-white px-8 py-5 bg-[#BDBDBD] mt-5 "
        >
          Leave us a Message
          <img className="w-5 h-5 mt-1" src={arrowRight} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
