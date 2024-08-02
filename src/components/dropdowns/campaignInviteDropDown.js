import { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const CampaignInviteDropDown = (props) => {
  const [selectedOption, setSelectedOption] = useState();
  const [data, setData] = useState([]);
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const { user } = useSelector((s) => s.user);

  //getting Investors
  useEffect(() => {
    setData(props.data);
    console.log("data------------",props.data)
  }, [data]);

  //onchange Selections
  const handleChange = (e) => {
    console.log("on change----------", e);
    if (e && e[e.length - 1]?.hasOwnProperty("__isNew__")) {
      console.log(
        "e----",
        e,
        "only label",
        e[e.length - 1]?.label,
        "email regex",
        emailRegex.test(e[e.length - 1]?.label.trim())
      );

      if (
        emailRegex.test(e[e.length - 1]?.label.trim()) &&
        user.email != e[e.length - 1]?.label.trim() &&
        !JSON.stringify(props.founderData).includes(
          e[e.length - 1]?.label.trim()
        ) &&
        !JSON.stringify(props.data).includes(e[e.length - 1]?.label.trim()) &&
        !JSON.stringify(props.alreadyInvited).includes(
          e[e.length - 1]?.label.trim()
        ) &&
        !e.some((item) => item.email === e[e.length - 1]?.label.trim())
      ) {
        setSelectedOption(e);
        props.func(e);

        console.log("sleected option--------", e);
      } else {
        if (
          JSON.stringify(props.alreadyInvited).includes(
            e[e.length - 1]?.label.trim()
          )
        ) {
          toast.error("Email already invited");
        } else {
          if (
            JSON.stringify(props.founderData).includes(
              e[e.length - 1]?.label.trim()
            )
          ) {
            toast.error("Email Is Already Onboarded As Founder");
          } else {
            toast.error("Email not allowed");
          }
        }
        console.log(
          "checker email add",
          emailRegex.test(e[e.length - 1]?.label.trim()),
          user.email != e[e.length - 1]?.label.trim(),
          !JSON.stringify(props.founderData).includes(
            e[e.length - 1]?.label.trim()
          ),
          !JSON.stringify(props.data).includes(e[e.length - 1]?.label.trim()),
          !JSON.stringify(e).includes(e[e.length - 1]?.label.trim())
        );
        // props.thorwerror("Email not allowed")
      }
    } else {
      console.log(
        "e----",
        e,
        "only label",
        e[e.length - 1]?.label,
        "email regex",
        emailRegex.test(e[e.length - 1]?.label)
      );
      setSelectedOption(e);
      props.func(e);
      console.log("sleected option--------", e);
    }
  };

  const AutocompleteStyles = {
    control: (defaultStyles) => ({
      ...defaultStyles,
      padding: "0",
      minHeight: "45px",
      borderRadius: "5px",
      backgroundColor: props.disabled ? "#F5F6F7" : "white",
      borderColor: props.error ? "red" : "#A6AEBB",
    }),
    option: (defaultStyles, { isSelected, isFocused }) => ({
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

      <CreatableSelect
        isDisabled={props.disabled}
        styles={AutocompleteStyles}
        className="text-secondary"
        placeholder={
          <div
            className={`  px-2.5 pt-1   text-txt text-inputBorder    
          } dark:border-gray-600 focus:outline-none focus:ring-0 peer ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }`}
          >
            Add members/Enter Email
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

export default CampaignInviteDropDown;
