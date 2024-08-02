const FloatingLabelInput = (props) => {
  return (
    <div className="relative lg:w-[60%] w-[92%] mt-[16px]">
      <input
        disabled={props.disabled}
        type="text"
        id={`floating_outlined_${props.id}`}
        className={`block rounded-[6px] px-2.5 pb-2.5 pt-4 w-full h-[45px] text-txt text-gray-900 ${
          props.disabled ? "bg-lightgray" : "bg-white"
        } border ${"border-inputBorder "} appearance-none focus:outline-none focus:ring-0 peer`}
        placeholder=" "
        value={props.value}
        onChange={props.onChange}
      />

      <label
        htmlFor={`floating_outlined_${props.id}`}
        className="absolute text-[15px] text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2"
      >
        {props.label}
      </label>

      {/* Additional styling for placeholder */}

      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out" !important;
          -webkit-transition-delay: 9999s !important;
          border-color: #a6aebb !important; /* Adjust the color */
          box-shadow: 0 0 0 30px white inset !important; /* Add a box-shadow to cover the red border */
        }
      `}</style>
    </div>
  );
};

export default FloatingLabelInput;
