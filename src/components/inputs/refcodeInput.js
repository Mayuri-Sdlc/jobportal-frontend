import { toast } from "react-toastify";

const RefCodeInput = (props) => {
  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(props.value);
      toast.success("Copied!");
    } catch (err) {
      toast.error("Failed to copy!");
    }
  };
  return (
    <div class="relative  mt-[2px]">
      <div className={`flex justify-between`}>
        <label
          id={`lbl${props.id}`}
          for={props.id}
          className="  text-[15px] font-semibold text-black "
        >
          {props.label}{" "}
          {props.id != "cardNumber" &&
            props.id != "cardNumber" &&
            props.id != "bankName" &&
            props.id != "expirationDate" &&
            props.id != "cvv"}
        </label>

        <p
          onClick={() => {
            copyToClipBoard();
          }}
          className=" text-txt cursor-pointer  text-primary"
        >
          Click here to copy the code
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

export default RefCodeInput;
