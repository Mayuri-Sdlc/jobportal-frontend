import { useEffect, useState } from "react";
import { apiGET } from "../../utils/apiHelper";
import Select from "react-select";

const SectordropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState();
  const [data, setData] = useState([]);

  //getting Sectors
  useEffect(() => {
    getSectors();
  }, []);

  const getSectors = async () => {
    const response = await apiGET("/v1/preferences");
    console.log("respose for sectors", response?.data?.data[0]["sector"]);
    setData(response?.data?.data[0]["sector"]);
    let d = response?.data?.data[0]["sector"].map((item) => {
      return {
        label: item?.name,
        value: item?.id,
      };
    });
    setData(d);
  };

  //onchange Selections
  const handleChange = (e) => {
    console.log("e----", e);
    setSelectedOption(e);
    props.func(e);
    console.log("sleected option--------", e);
  };

  const AutocompleteStyles = {
    control: (defaultStyles, state) => ({
      ...defaultStyles,
      padding: "0",
      minHeight: "45px",
      borderRadius: "5px",
      backgroundColor: props?.disabled ? "#F5F6F7" : "white",
      borderColor: state?.isFocused
        ? "white !important"
        : props?.error
        ? "red !important"
        : "rgb(166 174 187 / var(--tw-text-opacity)) !important",
    }),

    option: (defaultStyles, state) => ({
      ...defaultStyles,
      backgroundColor: "white",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      padding: "0",
    }),
    valueContainer: (defaultStyles) => {
      return {
        ...defaultStyles,
        padding: "0",
      };
    },
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        padding: "0",
      };
    },
    dropdownIndicator: (defaultStyles, state) => {
      return {
        ...defaultStyles,
        padding: "0",
        width: "30px",
        hight: "30px",
      };
    },
    indicatorSeparator: (defaultStyles) => {
      return {
        ...defaultStyles,
        display: "none",
      };
    },
  };
  return (
    <div class="relative  mt-[2px]">
      <div className="flex justify-between">
        <label
          id={props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {props.label} <span className="text-red">*</span>
        </label>
      </div>

      <Select
        isDisabled={props.disabled}
        styles={AutocompleteStyles}
        placeholder={
          <div
            className={`  px-2.5 pt-1   text-txt text-inputBorder    
          } dark:border-gray-600 focus:outline-none focus:ring-0 peer ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }`}
          >
            Enter Your Sector
          </div>
        }
        value={props.selectedSectors}
        defaultValue={props.selectedSectors}
        onChange={(e) => {
          handleChange(e);
        }}
        options={data}
        isMulti={true}
        isClearable={false}
      />
      <div className="relative w-full "></div>
    </div>
  );
};

export default SectordropDown;
