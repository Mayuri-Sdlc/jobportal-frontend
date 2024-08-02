import { useState } from "react";
import { RxCopy } from "react-icons/rx";
import { toast } from "react-toastify";

const CopyInput = (props) => {
  const [visible, setVisible] = useState(false);

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(props.value);

      toast.success("Copied!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };
  return (
    <div class="relative w-full  ">
      <label
        id={`lbl${props.id}`}
        for={props.id}
        className=" text-[15px] font-semibold text-black "
      >
        {props.label}{" "}
      </label>
      <input
        maxLength={props.maxLength}
        type={`${props.type ? props.type : "text"}`}
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        className={`block rounded-[6px] px-2.5 pb-2.5 pt-3 w-full h-[45px] lg:text-txt text-[12px] text-gray-900  ${
          props.disabled ? "bg-white" : "bg-white"
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
        //onChange={props.onChange}
      />
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
          -webkit-transition-delay: 9999s;
        }
      `}</style>

      <RxCopy
        onClick={() => {
          copyToClipBoard();
        }}
        className={` cursor-pointer absolute top-7 h-8 w-6 right-2 ${
          props.error ? "fill-[red]" : "fill-inputBorder"
        }`}
      />
    </div>
  );
};

export default CopyInput;
