import { RxChevronDown } from "react-icons/rx";
import { useState } from "react";

const DocLevel = (props) => {
  const [data, setData] = useState([
    "Open",
    "Restricted",
    "Private ",
    "Internal",
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
        disabled={props.disabled}
        className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900 ${
          props.disabled ? "bg-lightgray" : "bg-transparent"
        }  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        name={props.id}
        id={props.id}
        onChange={props.onChange}
        value={props.value}
        placeholder="Select Level"
        type="text"
      >
        <option value="" disabled selected>
          Select Level
        </option>
        {data.map((e, key) => {
          return (
            <option key={key} value={e}>
              {e}
            </option>
          );
        })}
      </select>

      <RxChevronDown
        className={`absolute top-7 h-8 w-6 right-2 ${
          props.error ? "fill-[red]" : "fill-inputBorder"
        }`}
      />
    </div>
  );
};

export default DocLevel;
