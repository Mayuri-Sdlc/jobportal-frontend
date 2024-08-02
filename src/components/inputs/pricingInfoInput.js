import { useHistory } from "react-router-dom";

const PricingInfoInput = (props) => {
  const array = [
    "Keystone",
    "Vanguard",
    "SyndiHub",
    "AngelX",
    "Corporate Suite",
  ];
  const arrayFounder = ["Catalyst", "Accelerator"];
  const history = useHistory();
  return (
    <div class="relative  mt-[2px]">
      <div className={`flex justify-between`}>
        <label
          id={`lbl${props.id}`}
          for={props.id}
          className="  text-[15px] font-semibold text-black "
        >
          {props.label}
        </label>

        <p
          onClick={() => {
            if (array.includes(props.value)) {
              history.push({
                pathname: "/pricingModel/investor",
                state: {
                  value: props.value,
                },
              });
            } else if (arrayFounder.includes(props.value)) {
              history.push({
                pathname: "/pricingModel/founder",
                state: {
                  value: props.value,
                },
              });
            } else {
              history.push("/pricingModel/investor");
            }
          }}
          className=" cursor-pointer text-txt  text-primary"
        >
          More info
        </p>
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
        onChange={props.onChange}
      />
    </div>
  );
};

export default PricingInfoInput;
