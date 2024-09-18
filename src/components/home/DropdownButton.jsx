import React from "react";

const DropdownButton = ({
  text,
  handelOpenDropdown,
  handelCloseDropdown,
  dropdown,
  arrow,
}) => {
  return (
    <div
      onMouseOver={() => {
        handelOpenDropdown(text);
      }}
      onMouseLeave={() => {
        handelCloseDropdown();
      }}
      className="dropdown dropdown-hover bg-transparent outline-none"
    >
      <div
        tabIndex={0}
        role="button"
        className="btn max-md:px-[0.15rem] max-md:gap-0 max-md:text-xs uppercase bg-transparent border-none shadow-none hover:shadow hover:bg-transparent hover:outline-none hover:border-none"
      >
        {text}
        <img
          className={`${
            dropdown ? "rotate-180" : ""
          } transition-all max-[500px]:hidden`}
          src={arrow}
          alt="arrow"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownButton;
