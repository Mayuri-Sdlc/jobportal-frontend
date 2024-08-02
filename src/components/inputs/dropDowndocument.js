import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const DropDownDocument = (props) => {
  const [doc, setDoc] = useState([
    { id: "1", name: "Document" },
    { id: "2", name: "Soft Commitment" },
    { id: "3", name: "Funding History" },
  ]);
  return (
    <div class="relative mt-[2px]">
      <div className="flex justify-between">
        <label
          id={props.id}
          for="floating_outlined"
          className=" text-[15px] font-semibold text-black"
        >
          {props.label} <span className="text-red">*</span>
        </label>
      </div>
      <div className="relative w-full ">
        <select
          disabled={props.disabled}
          className={`${
            props.error ? "border-[red]" : "border-inputBorder "
          } relative h-[45px] border appearance-none w-full rounded-md  pl-4  pt-2 pb-1.5  ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          } `}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="Select">Select</option>
          {doc.map((e, key) => {
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

export default DropDownDocument;
