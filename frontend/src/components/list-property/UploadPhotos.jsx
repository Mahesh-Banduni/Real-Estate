import React from "react";

import { computer } from "../../utils/icons";
import { Paragraph } from "../index";

const UploadPhotos = ({
  handelChangeFormInputFields,
  formInputValue,
  name,
}) => {
  return (
    <div className="w-fit max-sm:w-4/5 border-2 border-primary-color bg-second-color rounded-md p-20 max-md:p-10 max-[400px]:p-2 flex flex-col items-center gap-5">
      <img src={computer} alt="upload photo" />
      <Paragraph
        className={"text-primary-color max-md:text-base"}
        text="Upload photos"
      />
      <input
        multiple
        value={formInputValue[name]}
        name={name}
        onChange={handelChangeFormInputFields}
        type="file"
        className="outline-none max-md:text-sm border border-black rounded w-11/12 "
      />
    </div>
  );
};

export default UploadPhotos;
