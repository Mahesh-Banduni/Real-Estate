import React from "react";
import { PiHandsPrayingLight } from "react-icons/pi";

import { home, namaste } from "../utils/icons";
import { Button, Heading, Input } from "../components";
import { Link } from "react-router-dom";

const Signup = () => {
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
        <form className="flex flex-col gap-5">
          <Input
            label={"name"}
            placeholder={"enter your name"}
            type={"text"}
            className={"bg-transparent py-2 px-2 capitalize"}
          />
          <Input
            label={"mobile number"}
            placeholder={"1234567890"}
            type={"number"}
            className={"bg-transparent py-2 px-2 capitalize"}
          />
          <Input
            label={"password"}
            placeholder={"your password here"}
            type={"password"}
            className={"bg-transparent py-2 px-2 capitalize"}
          />
          <Button
            className=" font-interMedium text-white bg-slate-950 py-2 capitalize"
            text="sign up"
          />
        </form>
        <p className="font-interRegular text-base text-slate-900 text-center">
          Already have an account?
          <Link className="text-blue-500" to={"#"}>
            {" "}
            Sign In{" "}
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
