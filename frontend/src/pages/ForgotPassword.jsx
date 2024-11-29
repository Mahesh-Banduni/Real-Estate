import React from "react";
import { PiHandsPrayingLight } from "react-icons/pi";

import { home } from "../utils/icons";
import { Button, Heading } from "../components";
import useForgot from "../hooks/useForgot";

const ForgotPassword = () => {
  const { errors, handleSubmit, message, register, submitForm } = useForgot();
  return (
    <div className="w-11/12 mx-auto my-10 grid grid-rows-1 grid-cols-2 place-content-center h-screen max-md:h-auto max-md:gap-5 max-md:grid-cols-1 max-md:grid-rows-2 ">
      <div className="flex flex-col gap-5 place-content-center w-4/5 m-auto max-md:row-span-2 max-md:order-2">
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
              Email
            </label>

            <div className="px-3 bg-[#F2F2F2] flex items-center gap-1 w-full">
              <input
                id={"email"}
                className={`outline-none border-none max-sm:text-sm bg-transparent py-2 w-full `}
                placeholder={"Enter email"}
                type={"email"}
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9. _%-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              {errors?.email && (
                <p className="error-message">{errors?.email?.message}</p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className=" font-interMedium text-white bg-slate-950 py-2 capitalize"
          >
            Forgot Password
          </Button>
        </form>
      </div>
      <div className="place-content-center max-md:order-1 max-md:flex max-md:items-center max-md:justify-center ">
        <img className="w-full h-[100%] max-md:w-4/5 " src={home} alt="home" />
      </div>
    </div>
  );
};

export default ForgotPassword;
