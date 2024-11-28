import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { upDownArrow } from "../utils/icons";
import useWishlist from "../hooks/useWishlist";
import { ListProperty, Loader } from "../components";
import {
  handlePriceLowToHighW,
  handlePriceHighToLowW,
  handleMostRecentW,
} from "../store/slice";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.authReducer?.wishlist);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin"); // { state: { from: location.pathname } ; // Redirect to login page if token is not present
    }
  }, [navigate]);

  // Destructuring updated return values from the custom hook
  const { isLoading, message } = useWishlist();

  return (
    <>
      {message ? (
        <div className="w-full h-[42vh] flex items-center justify-center">
          <h1 className="text-center text-3xl font-interSemiBold capitalize text-red-500">
            {message}
          </h1>
        </div>
      ) : isLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 mx-auto">
          <div className=" pt-2 flex items-center justify-between max-[450px]:justify-center max-[450px]:gap-[0.15rem] ">
            <div className=" flex items-center gap-5 tracking-wider max-sm:tracking-normal max-sm:gap-2 max-[450px]:gap-1 ">
              <button
                className={`text-white bg-primary-color px-5 py-2 uppercase transition-all cursor-pointer max-sm:text-sm max-sm:px-2 max-sm:py-1 max-[450px]:text-xs max-[350px]:text-[0.65rem] max-[450px]:px-1`}
              >
                properties
              </button>
            </div>
            <div className="dropdown dropdown-hover bg-transparent hover:bg-transparent m-0">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-transparent capitalize rounded-none max-sm:m-0 max-sm:px-2 max-[450px]:text-xs max-[350px]:text-[0.65rem]"
              >
                <img
                  className=" mr-2 max-sm:mr-0 max-[450px]:hidden"
                  src={upDownArrow}
                  alt=" up and down arrow "
                />
                Sort by relevance
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 z-[1] p-2 shadow rounded-none"
              >
                <li
                  onClick={() => {
                    dispatch(handlePriceLowToHighW());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">
                    price - Low to High
                  </p>
                </li>
                <li
                  onClick={() => {
                    dispatch(handlePriceHighToLowW());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">
                    price - High to Low
                  </p>
                </li>
                <li
                  onClick={() => {
                    dispatch(handleMostRecentW());
                  }}
                >
                  <p className="max-sm:text-xs capitalize">Most Recent</p>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="text-[#8F90A6] text-lg font-interRegular py-2 max-sm:text-sm">
            {data.length} results | Properties.
          </p>
          <ListProperty wishlistProperties={data} propertiesList={data} />
        </div>
      )}
    </>
  );
};

export default Wishlist;
