import { useEffect, useState } from "react";

const QueInput = (props) => {
  const [numberRes, setNumberRes] = useState();
  const number = props.value ? parseInt(props.value) : 0;

  const formattedNumber = number.toLocaleString("en-US");

  console.log(props.label);
  useEffect(() => {
    setNumberRes(props.value);

    if (props.value.length > 0) {
      if (props.value.length > 0) {
        console.log("before", typeof props.value, props.value);
        let float;

        //taking number as(".0")
        let prev = parseFloat(props.value.slice(-2)).toString();
        console.log(
          "The prev value and last 2",
          props.value.charAt(props.value.length - 2),
          prev.toString()
        );
        if (
          props.value.charAt(props.value.length - 2) == "." &&
          prev.toString() == "0"
        ) {
          console.log("calsl to input amount .0-----------");
          setNumberRes(props.value);
        }
        //taking number with(.)
        else if (props.value.charAt(props.value.length - 1) != ".") {
          float = props.value.replaceAll(",", "");
          console.log("after", typeof float, float);
          console.log("call to input amount only  . -----------", props.value);
          float = parseFloat(float);
          let format1 = float;
          console.log("par se float----", format1, format1.toLocaleString());

          let format = format1.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          });
          console.log(
            "formatted number new -------------",
            typeof format,
            format
          );
          setNumberRes(format);
        } else {
          let t = props.value;
          if (
            props.value.charAt(props.value.length - 1) == "." &&
            props.value.charAt(props.value.length - 2) == "."
          ) {
            t = props.value.slice(0, -1);
          }
          console.log(
            "call to input amount only no one -----------",
            props.value,
            t
          );
          setNumberRes(t);
        }
      }
    }
  }, [props.value]);

  return (
    <div class="relative  mt-[2px]">
      <div className="flex justify-between">
        <div>
          <label
            id={`lbl${props.id}`}
            for={props.id}
            className="  text-[15px] font-semibold text-black "
          >
            {props.label}
          </label>
          {!props.optional ? <span className="text-red ml-1">*</span> : null}
        </div>
        <p className="  text-[15px]  text-inputBorder ">British Pound £</p>
      </div>

      <input
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        type="text"
        className={`block rounded-[6px] px-12  mt-3 p-1 w-full h-[45px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-white"
        }  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        placeholder={
          props.placeholder
            ? props.placeholder
            : `Enter ${props.label == "Commitment" ? "Amount" : props.label}`
        }
        value={numberRes}
        onChange={props.onChange}
      />

      <div className="absolute top-[50%] p-1 left-2 ">
        <p className="text-black text-txt">GBP</p>
      </div>
    </div>
  );
};

export default QueInput;
