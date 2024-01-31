import React, { useState } from "react";

const BranchDropdown= () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("");

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectOption = (value) => {
    setSelectedBranch(value);
    setShowOptions(false);
  };

  return (
    <div>
    
    {/* <p className=" text-[#eee] font-[poppins] text-[1.25rem] font-[600] leading-[1.125rem]">Gender</p>  */}
      <div
        className="flex items-start rounded-[0.5rem] p-[1rem] gap-[0.625rem] border-[1px] border-[#f45725]"
        style={{ background: "var(--W-Background, #FFF)", position: "relative" }}
        onClick={handleToggleOptions}
      >
        <div className="w-[22.275rem] h-[auto] outline-none appearance-none text-[#666] font-[400] leading-[1.5rem] font-Noto-Sans">
          {selectedBranch || "Select Branch"}
        </div>

        <svg
        className={showOptions?"rotate-180":"block"}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={handleToggleOptions}
          style={{ cursor: "pointer" }}
        >
          <g clipPath="url(#clip0_384_31)">
            <path
              d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
              fill="#F45725"
            />
          </g>
          <defs>
            <clipPath id="clip0_384_31">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {showOptions && (
        <div className="absolute  right-0 bg-white border border-[#f4525] w-[26.775rem]  overflow-none rounded-b-[.5rem] z-[1]">
          <div
            className="p-[1rem] border-b-[1px] border-[#ccc] cursor-pointer  hover:text-[#fff] hover:border-[#CCC] hover:bg-[#252625]"
            onClick={() => handleSelectOption("Computer Science")}
          >
            Computer Science
          </div>
          <div
            className="p-[1rem]  border-b-[1px] border-[#ccc] cursor-pointer  hover:text-[#fff] hover:border-[#CCC] hover:bg-[#252625]"
            onClick={() => handleSelectOption("Mechanical")}
          >
            Mechanical
          </div>
          <div
            className="p-[1rem] border-[#ccc] cursor-pointer hover:text-[#fff] hover:border-[#CCC] hover:bg-[#252625]"
            onClick={() => handleSelectOption("   Civil")}
          >
           Civil
          </div>
        </div>
      )}
    </div>
  );
};

export default BranchDropdown;