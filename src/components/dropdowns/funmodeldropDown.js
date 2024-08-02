import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { apiGET } from "utils/apiHelper";
const FunModelDropDown = (props) => {
  const [data, setData] = useState([]);

  //getting Sectors
  useEffect(() => {
    getSectors();
  }, []);

  const getSectors = async () => {
    const response = await apiGET("/v1/preferences");
    setData(response?.data?.data[0]["typeofbusiness"]);
  };
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
      <div className="relative w-full">
        <select
          style={{
            borderRadius: "6px",
            borderWidth: "0.3px",

            color: "black",
          }}
          disabled={props.disabled}
          className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full h-[45px]  ${
            props.disabled ? "bg-lightgray" : "bg-white"
          } 
          border ${props.error ? "border-[red]" : "border-inputBorder"}
          ${
            props.disabled ? "opacity-100" : "" // Reset opacity for selected option
          } 
          appearance-none  focus:outline-none focus:ring-0 peer`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" style={{ color: "black" }} disabled selected>
            Select Model
          </option>
          {data.map((e, key) => {
            return (
              <option style={{ color: "black" }} key={key} value={e.name}>
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

export default FunModelDropDown;
