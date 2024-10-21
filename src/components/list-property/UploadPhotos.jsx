import React from "react";

import { computer } from "../../utils/icons";
import { Paragraph } from "../index";

const UploadPhotos = ({
  handelChangeFormInputFields,
  formInputValue,
  name,
}) => {
  return (
    <div className="w-fit border-2 border-primary-color bg-second-color rounded-md p-20  flex flex-col items-center gap-5">
      <img src={computer} alt="upload photo" />
      <Paragraph
        className={"text-primary-color"}
        text="Add at least 5 photos"
      />
      <input
        multiple
        // value={formInputValue[name]}
        name={name}
        onChange={handelChangeFormInputFields}
        type="file"
        className="outline-none border border-black rounded  w-fit "
      />
    </div>
  );
};

export default UploadPhotos;
