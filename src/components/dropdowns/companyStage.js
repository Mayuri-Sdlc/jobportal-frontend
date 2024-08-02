import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const CompanyStage = (props) => {
  const [data, setData] = useState([
    { id: "1", name: "Pre-Product" },
    { id: "2", name: "Product Launch" },
    { id: "3", name: "Customer In" },
    { id: "4", name: "Revenue In" },
    { id: "5", name: "Pre-Revenue" },
    { id: "6", name: "Pre-IPO" },
  ]);
  return (
    <div class="relative  mt-[2px]">
      <div className="flex justify-between">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {props.label}
        </label>
      </div>
      <div className="relative w-full ">
        <select
          disabled={props.disabled}
          className={`block text-txt rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900  ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none   focus:outline-none focus:ring-0 peer`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled selected>
            Select Funding Stage
          </option>
          {data.map((e, key) => {
            return (
              <option key={key} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>

        <FaChevronDown className="absolute cursor-pointer pointer-events-none top-3 h-4 w-6 right-2 text-[#A6AEBB] " />
      </div>
    </div>
  );
};

export default CompanyStage;
