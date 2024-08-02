import React, { useState, useEffect } from "react";

const SpvInput = (props) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div class="relative  mt-[2px]">
      <div className={`flex ${props.optional ? "justify-between" : ""}`}>
        <label
          id={`lbl${props.id}`}
          for={props.id}
          className=" text-[15px] font-semibold text-black "
        >
          {props.label}{" "}
        </label>
      </div>

      <input
        maxLength={props.maxLength}
        type={`${props.type ? props.type : "text"}`}
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full h-[45px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-white"
        }  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer ${
          props.classname
        }`}
        placeholder={`Enter ${
          props.placeholder
            ? `${props.placeholder}`
            : props.label == "Commitment"
            ? "Amount"
            : props.label
        }`}
        value={props.value}
        onChange={(e) => {
          setValue(e.target.value);

          props.change(e.target.value);

          if ("Crowd Investments Nominee Limited".includes(e.target.value)) {
            setShow(true);
          } else {
            setShow(false);
          }
        }}
      />
      {show ? (
        <div
          onClick={() => {
            setValue("Crowd Investments Nominee Limited");

            props.change("Crowd Investments Nominee Limited");
            setShow(false);
          }}
          className="bg-white  cursor-pointer h-[45px] w-full flex  items-center border-lightgray border-[1px]"
        >
          <p className="text-txt text-black p-2">
            Crowd Investments Nominee Limited
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default SpvInput;
