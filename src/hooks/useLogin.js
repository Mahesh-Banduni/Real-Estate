import { useState } from "react";
// import axios from "axios";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { registerForm } from "../store/slice";
// import { useDispatch } from "react-redux";

const useLogin = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const submitForm = async (data) => {
    console.log(data);
    setMessage("");
    // try {
    //   const response = await axios.post(
    //     "put the api",
    //     data
    //   );
    //   if (response.data?.isSuccess) {
    //     dispatch(registerForm(response?.data?.data));
    //     localStorage.setItem("token", JSON.stringify(response?.data?.data));
    //     navigate("/");
    //   } else if (!response.data?.isSuccess) {
    //     alert(`${response.data?.message}`);
    //     navigate("/login");
    //   }
    // } catch (message) {
    //   setMessage(message.message);
    //   reset();
    // }
  };

  const minUppercasePattern = /[A-Z]+/;
  const minLowercasePattern = /[a-z]+/;
  const minNumberPattern = /[0-9]+/;
  const minSpecialCharPattern = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  return {
    handleSubmit,
    register,
    submitForm,
    message,
    minUppercasePattern,
    minLowercasePattern,
    minNumberPattern,
    minSpecialCharPattern,
    errors,
    watch,
  };
};

export default useLogin;
