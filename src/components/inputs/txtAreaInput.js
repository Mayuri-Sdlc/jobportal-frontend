import React from "react";

const TxtAreaInput = (props) => {
  return (
    <div class="relative  mt-[2px]">
      <div
        className={`flex ${
          props.optional ? "justify-between" : "justify-start"
        }`}
      >
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className="  text-[15px] font-semibold text-black "
        >
          {props.label}
        </label>
        {props.optional ? (
          <p className="text-[15px]  text-inputBorder ">Optional</p>
        ) : (
          <span className="text-red ml-1">*</span>
        )}
      </div>

      <textarea
        maxLength={props.maxLength}
        type="text"
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        maxlength={props.maxlength}
        className={`block  rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[95px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-transparent"
        }   border ${
          props.error ? "border-[red]" : "border-inputBorder  "
        } textarea-with-custom-scrollbar  text-black appearance-none  focus:outline-none focus:ring-0 peer`}
        placeholder={`${
          props.placeholder ? props.placeholder : `Enter ${props.label}`
        }`}
        value={props.value}
        onChange={props.onChange}
        style={{ resize: "none" }}
      />
    </div>
  );
};

export default TxtAreaInput;
