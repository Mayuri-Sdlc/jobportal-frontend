import { useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const InvestSecurityType = (props) => {
  const [data, setData] = useState([
    { id: "1", name: "Common Equity shares (Voting)" },
    { id: "2", name: "Common Equity shares (Non-Voting)" },
    { id: "3", name: "Preferred shares" },
    { id: "4", name: "Advanced Subscription Agreement" },
    { id: "5", name: "Debentures" },
  ]);
  return (
    <div class="relative  mt-[2px]">
      <div className="flex justify-between">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {" "}
          {props.label}{" "}
          {!props.optional ? <span className="text-red">*</span> : null}
        </label>
      </div>
      <div className="relative w-full ">
        <select
          disabled={props.disabled}
          className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900  ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled selected>
            Select Security Type
          </option>
          {data.map((e, key) => {
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

export default InvestSecurityType;
