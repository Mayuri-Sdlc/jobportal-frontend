import { useEffect, useState, useRef } from "react";

const AmountInput = (props) => {
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
          console.log("call to input amount .0-----------");
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

  //height of opened div

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    console.log(
      "ref change----------",

      ref.current.clientHeight,
      ref.current.clientWidth
    );
    console.log("yes in share input 1", ref.current.clientHeight);
    if (ref.current) {
      setWidth(ref.current.clientWidth);
      console.log("yes in height=====");
      if (props.type == "share") {
        console.log("yes in share input", ref.current.clientHeight);
        setHeight(ref.current.clientHeight);
        props.labelheight(ref.current.clientHeight);
      }
    }
  }, [ref]);

  return (
    <div
      class={`relative  mt-[2px] ${
        props.customClass === "avgTicket"
          ? "flex flex-col gap-0 sm:gap-5 2xl:gap-0"
          : ""
      }`}
    >
      <div className="flex justify-between">
        <div ref={ref}>
          <label
            id={`lbl${props.id}`}
            for={props.id}
            className=" text-[15px] font-semibold text-black "
          >
            {props.label}
          </label>
          {!props.optional ? <span className="text-red ml-1">*</span> : null}
        </div>
      </div>
      <input
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        type="text"
        className={`block rounded-[6px] px-12 pb-2.5 pt-3 w-full h-[45px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-white"
        }  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  focus:outline-none focus:ring-0 peer`}
        placeholder={
          props.placeholder
            ? props.placeholder
            : `Enter ${props.label == "Commitment" ? "Amount" : props.label}`
        }
        value={numberRes}
        onChange={props.onChange}
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

      <div
        className={`absolute left-3 ${
          props.customClass === "avgTicket"
            ? "top-[50%] sm:top-[64%] 2xl:top-[50%]"
            : "top-[50%]"
        }`}
      >
        <p className="text-black text-txt">GBP</p>
      </div>
    </div>
  );
};

export default AmountInput;
