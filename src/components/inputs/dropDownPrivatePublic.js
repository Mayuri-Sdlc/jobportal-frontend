import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const DropDownPrivatePublilc = (props) => {
  const [select, setselect] = useState([{ id: "1", name: "Private" }]);
  return (
    <div class="relative mt-[2px]">
      <div className="flex justify-between">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className="  text-[15px] font-semibold text-black "
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
          } text-secondary`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled>
            Select
          </option>
          {select.map((e, key) => {
            return (
              <option key={key} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>

        <div className="absolute top-1 right-3">
          <RxChevronDown style={{ color: "#A6AEBB" }} className={`h-8 w-6`} />
        </div>
      </div>
    </div>
  );
};

export default DropDownPrivatePublilc;
