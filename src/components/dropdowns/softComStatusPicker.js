import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const SoftComStatusPicker = (props) => {
  const [data, setData] = useState([
    "Angel",
    "VC",
    "PE",
    "Govt Grant",
    "Others",
  ]);
  return (
    <div class="relative  mt-[2px]">
      <label
        id={props.id}
        for="floating_outlined"
        className=" text-txt font-semibold text-black "
      >
        {props.label}
      </label>
      <select
        className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900 bg-transparent  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  focus:outline-none focus:ring-0 peer`}
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        placeholder="Select Type"
        type="text"
      >
        <option value="" disabled selected>
          Select Type
        </option>
        {data.map((e, key) => {
          return (
            <option key={key} value={e}>
              {e}
            </option>
          );
        })}
      </select>

      <FaChevronDown
        className={`absolute cursor-pointer pointer-events-none top-10 h-4 w-6 right-2 text-[#A6AEBB] ${
          props.error ? "fill-[red]" : "fill-inputBorder"
        }`}
      />
    </div>
  );
};

export default SoftComStatusPicker;
