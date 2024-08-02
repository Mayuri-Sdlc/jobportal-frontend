import React, { useEffect, useState, forwardRef, useRef } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { AiOutlineCalendar } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker.css";
import "../../index.css";

const DatePickerS = (props) => {
  //Variables
  const [startdate, setStartDate] = useState(new Date());
  const [value, setValue] = useState(moment());
  const [maxDate, setMaxdate] = useState();
  const [minDate, setMinDate] = useState();

  useEffect(() => {
    if (props.value) {
      let p = props.value.split("/").reverse().join("-");
      setValue(p);
    }
  }, [props.value]);

  const inputRef = null;

  //Setting min and max date to current date
  useEffect(() => {
    let d = new Date();
    setMaxdate(
      parseInt(d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear()
    );
    setStartDate(moment(d).format("DD/MM/YYYY"));

    let d2 = new Date(moment().subtract(500, "years")._d);
    setMinDate(
      parseInt(d2.getMonth() + 1) + "-" + d2.getDate() + "-" + d2.getFullYear()
    );
  }, []);

  //Onchange Date
  const onChangeDob = (d) => {
    props.func(d);
  };

  return (
    <div class="relative  mt-[5px]">
      <label
        id={`lbl${props.id}`}
        for={props.id}
        className=" text-[15px] font-semibold text-black "
      >
        {props.label}
      </label>
      <div
        className={`block  rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-transparent"
        }   border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none focus:outline-none focus:ring-0 peer`}
      >
        <DatePicker
          disabled={props.disabled}
          dateFormat="dd/MM/yyyy"
          selected={props.value ? new Date(value) : null}
          id={props.id}
          name={props.name}
          onChange={(e) => {
            console.log("current date valu------", e);
            if (e instanceof Date && !isNaN(e)) {
              const d = new Date(e).toLocaleDateString("fr-FR");
              props.func(d);
              onChangeDob(d);
            } else {
              console.log("no date", e);
              props.func2(e);
            }
          }}
          showMonthDropdown
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={150}
          minDate={new Date(minDate)}
          maxDate={new Date(maxDate)}
          className="bg-transparent"
          placeholderText={`Select ${props.label}`}
        />

        <AiOutlineCalendar
          onClick={(e) => {
            e.preventDefault();
            console.log("id to focus========", props.id);
            // dummy element
            var dummyEl = document.getElementById(props.id);

            // check for focus
            document.getElementById(props.id).focus();
            var isFocused = document.activeElement === dummyEl;
            console.log("is fouced", isFocused, dummyEl);
          }}
          className={`absolute top-8 h-8 w-6 right-2 ${
            props.error ? "fill-[red]" : "fill-inputBorder"
          }`}
        />
      </div>
    </div>
  );
};

export default DatePickerS;
