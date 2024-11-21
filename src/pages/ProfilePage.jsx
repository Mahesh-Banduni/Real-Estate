import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Input, ProfileInput } from "../components";
import useProfile from "../hooks/useProfile";

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, handelInputChange, handelSubmitForm } = useProfile();
  // Check for token in localStorage

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin", { state: { from: location.pathname } }); // Redirect to login page if token is not present
    }
  }, [navigate, location]);

  return (
    <div className="w-4/5 mx-auto ">
      <h1 className="text-center my-10 font-interSemiBold text-3xl">
        Profile View
      </h1>
      <div className="w-full flex flex-col">
        <div>
          <img
            className="w-48 h-48 border rounded-full "
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=" profile photo "
          />
        </div>
        <form
          onSubmit={handelSubmitForm}
          className="flex flex-col gap-2 border-2 p-10 rounded-md mt-2  "
          action=""
        >
          <ProfileInput
            handelInputChange={handelInputChange}
            label={"Name"}
            value={user?.name}
            readOnly={true}
          />
          <ProfileInput
            handelInputChange={handelInputChange}
            label="Contact"
            name={"phone"}
            value={user?.phone}
          />
          <ProfileInput
            handelInputChange={handelInputChange}
            label="password"
            type={"password"}
            name="password"
            value={user?.password}
          />
          <button type="submit" className="btn bg-green-500">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
