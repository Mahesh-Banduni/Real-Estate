import React from "react";
import { PiHandsPrayingLight } from "react-icons/pi";
import { Link } from "react-router-dom";

import { home } from "../utils/icons";
import { Button, Heading, Input } from "../components";
import useRegister from "../hooks/useRegister";

const Signup = () => {
  const {
    handleSubmit,
    message,
    register,
    submitForm,
    errors,
    minLowercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    minUppercasePattern,
  } = useRegister();
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
          <Input
            label={"name"}
            placeholder={"enter your name"}
            type={"text"}
            className={"bg-transparent py-2 px-2 capitalize"}
            {...register("userName", {
              required: true,
            })}
          />
          <Input
            label={"mobile number"}
            placeholder={"1234567890"}
            type={"number"}
            className={"bg-transparent py-2 px-2 capitalize"}
            {...register("phone", {
              required: true,
              validate: {
                minLength: (value) =>
                  value.length >= 10 ||
                  "mobile number must be at least 10 characters",
              },
            })}
          />
          {errors.mobileNumber && (
            <p className="error-message">{errors?.mobileNumber?.message}</p>
          )}
          <Input
            label={"password"}
            placeholder={"your password here"}
            type={"password"}
            {...register("password", {
              required: true,
              validate: {
                minLength: (value) =>
                  value.length >= 8 || "Password must be at least 8 characters",
                uppercase: (value) =>
                  minUppercasePattern.test(value) ||
                  "Password must contain at least one uppercase letter",
                lowercase: (value) =>
                  minLowercasePattern.test(value) ||
                  "Password must contain at least one lowercase letter",
                number: (value) =>
                  minNumberPattern.test(value) ||
                  "Password must contain at least one number",
                specialChar: (value) =>
                  minSpecialCharPattern.test(value) ||
                  "Password must contain at least one special character",
              },
            })}
            className={"bg-transparent py-2 px-2 capitalize"}
          />
          {errors.password && (
            <p className="error-message">{errors?.password?.message}</p>
          )}
          <Button
            type="submit"
            className=" font-interMedium text-white bg-slate-950 py-2 capitalize"
          >
            Sign Up
          </Button>
        </form>
        <p className="font-interRegular text-base text-slate-900 text-center">
          Already have an account?
          <Link className="text-blue-500" to={"/signin"}>
            Sign In
          </Link>
        </p>
      </div>
      <div className="place-content-center ">
        <img className="w-full h-[100%] " src={home} alt="home" />
      </div>
    </div>
  );
};

export default Signup;
