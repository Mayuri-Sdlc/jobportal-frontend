import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDownInput = (props) => {
  const [sameNationaility, setSameNationaility] = useState([
    { id: "1", name: "Yes" },
    { id: "2", name: "No" },
  ]);
  return (
    <div class="relative mt-[2px]">
      <div className="flex justify-between">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className=" text-[15px] font-semibold text-black "
        >
          {props.label} <span className="text-red">*</span>
        </label>
      </div>
      <div className="relative w-full ">
        <select
          style={{
            borderRadius: "6px",

            color: "black",
          }}
          disabled={props.disabled}
          className={`
                    ${
                      props.disabled ? "opacity-100" : "" // Reset opacity for selected option
                    } 
                      
                    relative h-[45px] border appearance-none w-full rounded-md  pl-4  pt-2 pb-1.5  ${
                      props.disabled ? "bg-lightgray" : "bg-transparent"
                    } 
                    
                    border ${props.error ? "border-[red]" : "border-[#A6AEBB]"}
                    `}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled>
            Select
          </option>
          {sameNationaility.map((e, key) => {
            return (
              <option key={key} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>
        <FaChevronDown className="absolute cursor-pointer pointer-events-none top-4 h-4 w-6 right-2 text-[#A6AEBB] " />
      </div>
    </div>
  );
};

export default DropDownInput;
