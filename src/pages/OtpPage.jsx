import React from "react";
import { PiHandsPrayingLight } from "react-icons/pi";
import { Link } from "react-router-dom";

import { home } from "../utils/icons";
import useOtp from "../hooks/useOtp";
import { Button, Heading, Input } from "../components";

const OtpPage = () => {
  const { errors, handleSubmit, message, register, submitForm } = useOtp();
  return (
    <div className="w-11/12 mx-auto my-10 grid grid-rows-1 grid-cols-2 place-content-center h-screen ">
      <div className="flex flex-col gap-5 place-content-center w-4/5 m-auto">
        <div className="flex items-center gap-5">
          <Heading text="namaste" className="text-primary-color" />
          <PiHandsPrayingLight className="text-5xl text-primary-color" />
        </div>
        <p className="text-slate-900 font-interRegular text-base ">
          Sign up to start your property journey.
        </p>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col bg-transparent gap-2 w-full">
            <label
              className="capitalize font-medium text-xl text-[#4B4B4B] max-sm:text-base"
              htmlFor="OTP"
            >
              OTP
            </label>

            <div className="px-3 bg-[#F2F2F2] flex items-center gap-1 w-full">
              <input
                id={"OTP"}
                className={`outline-none border-none max-sm:text-sm bg-transparent py-2 `}
                placeholder={"Enter Otp"}
                type={"number"}
                {...register("otp", {
                  required: true,
                  validate: {
                    minLength: (value) =>
                      value.length >= 6 || "OPT must be at least 6 characters",
                    maxLength: (value) =>
                      value.length <= 6 || "OPT must be at least 6 characters",
                  },
                })}
              />
            </div>
          </div>

          {/* <Input
            label={"OTP"}
            placeholder={"enter OPT"}
            type={"number"}
            className={"bg-transparent py-2 px-2 capitalize"}
            {...register("otp", {
              required: true,
              validate: {
                minLength: (value) =>
                  value.length >= 6 || "OPT must be at least 6 characters",
                maxLength: (value) =>
                  value.length <= 6 || "OPT must be at least 6 characters",
              },
            })}
          /> */}

          <Button
            type="submit"
            className=" font-interMedium text-white bg-slate-950 py-2 capitalize"
          >
            Verify OPT
          </Button>
        </form>
      </div>
      <div className="place-content-center ">
        <img className="w-full h-[100%] " src={home} alt="home" />
      </div>
    </div>
  );
};

export default OtpPage;
