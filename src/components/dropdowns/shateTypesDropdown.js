import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SharesTypeDropDown = (props) => {
  const [data, setData] = useState([
    { id: 1, name: "Ordinary Shares" },
    { id: 2, name: "Deferred Ordinary Shares" },
    { id: 3, name: "Non-voting Ordinary Shares" },
    { id: 4, name: "Redeemable Shares" },
    { id: 5, name: "Cumulative Preference Shares" },
    { id: 6, name: "Redeemable Preference Shares" },
    { id: 7, name: "Not sure" },
  ]);
  return (
    <div class="relative  mt-[2px] ">
      <div className="flex justify-between">
        <label
          id={props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {props.label}
        </label>
      </div>
      <div className="relative w-full z-10 ">
        <select
          className={`block cursor-pointer  rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900 ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  focus:outline-none focus:ring-0 peer`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled selected>
            Select Share Types
          </option>
          {data.map((e, key) => {
            return (
              <option key={key} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
      </div>
      <FaChevronDown className="absolute cursor-pointer pointer-events-none top-10 h-4 w-6 right-2 text-[#A6AEBB] " />
    </div>
  );
};

export default SharesTypeDropDown;
