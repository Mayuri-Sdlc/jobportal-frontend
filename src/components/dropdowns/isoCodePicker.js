import { useState, useEffect } from "react";
import { Country } from "country-state-city";
import { FaChevronDown } from "react-icons/fa";

const IsoCodePicker = (props) => {
  const [countries, setCountries] = useState([]);
  //getting country
  useEffect(() => {
    console.log(
      "All countries data----------------",
      Country.getAllCountries()
    );

    setCountries(Country.getAllCountries());
  }, []);

  return (
    <div class="relative  mt-[2px]">
      <div className="flex justify-between">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black whitespace-nowrap"
        >
          {props.label}
        </label>
      </div>
      <select
        className={`block text-txt rounded-[6px] px-2.5 pb-2.5 pt-2 w-full  h-[45px] text-gray-900 ${
          props.disabled ? "bg-lightgray" : "bg-white"
        }  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        name={props.name}
        value={props.value}
        disabled={props.disabled}
        placeholder="Select ISO Code"
        onChange={props.onChange}
        id={props.id}
      >
        <option className=" " value="" disabled selected>
          Select ISO Code
        </option>
        {countries.map((e, key) => {
          return (
            <option className="" key={key} value={e.isoCode}>
              {e.name}
            </option>
          );
        })}
      </select>
      <FaChevronDown className="absolute cursor-pointer pointer-events-none top-10 h-4 w-6 right-2 text-[#A6AEBB] " />
    </div>
  );
};

export default IsoCodePicker;
