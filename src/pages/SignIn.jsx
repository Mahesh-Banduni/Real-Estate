import React from "react";
import { PiHandsPrayingLight } from "react-icons/pi";
import { Link } from "react-router-dom";

import { Button, Heading, Input } from "../components";
import { home, facebookLogin, google } from "../utils/icons";

const SignIn = () => {
  return (
    <div className="w-11/12 mx-auto my-10 grid grid-rows-1 grid-cols-2 place-content-center h-screen ">
      <div className="flex flex-col gap-5 place-content-center w-4/5 m-auto">
        <div className="flex items-center gap-5">
          <Heading text="namaste" className="text-primary-color" />
          <PiHandsPrayingLight className="text-5xl text-primary-color" />
        </div>
        <p className="text-slate-900 font-interRegular text-base ">
          Today is a new day. It's your day. You shape it. Sign in to start your
          property journey.
        </p>
        <form className="flex flex-col gap-5">
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
          <Link
            to="#"
            className="text-blue-500 font-interMedium capitalize text-end"
          >
            {" "}
            Forgot password?{" "}
          </Link>
          <Button
            className=" font-interMedium text-white bg-slate-950 py-2 capitalize"
            text="sign in"
          />
        </form>
        <p className="login-or my-5">Or</p>
        <div className="w-full flex flex-col gap-3 ">
          <button className="w-full py-2 border border-primary-color text-base font-interRegular flex items-center justify-center gap-2 bg-[#F3F9FA] ">
            <img src={google} alt="google" />
            Sign in with Google
          </button>
          <button className="w-full py-2 border border-primary-color text-base font-interRegular flex items-center justify-center gap-2 bg-[#F3F9FA] ">
            <img src={facebookLogin} alt="google" />
            Sign in with Facebook
          </button>
        </div>
      </div>
      <div className="place-content-center ">
        <img className="w-full h-[100%] " src={home} alt="home" />
      </div>
    </div>
  );
};

export default SignIn;
