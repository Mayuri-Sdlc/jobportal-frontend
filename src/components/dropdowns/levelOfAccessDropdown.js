import { useState } from "react";
import Select from "react-select";

const LevelOfAccessDropdown = (props) => {
  const [selectedOption, setSelectedOption] = useState();
  const [data, setData] = useState([
    { label: "Admin", name: "Admin", value: "admin" },
    { label: "Private", name: "Private", value: "private" },
  ]);

  const handleChange = (e) => {
    console.log("e----", e);
    setSelectedOption(e);
    props.func(e);
    console.log("sleected option--------", e);
  };

  const AutocompleteStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      padding: "0",
      minHeight: "45px",
      borderRadius: "5px",
      borderColor: props.error ? "red" : "grey",
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
      <Select
        styles={AutocompleteStyles}
        value={selectedOption}
        onChange={(e) => {
          handleChange(e);
        }}
        options={data}
      />
      <div className="relative w-full "></div>
    </div>
  );
};

export default LevelOfAccessDropdown;
