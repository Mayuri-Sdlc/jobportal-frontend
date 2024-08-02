const QueInput2 = (props) => {
  return (
    <div class="relative  mt-[2px]">
      <div className={`flex ${props.optional ? "justify-between" : ""}`}>
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
        {!props.cardLayout &&
          (props.optional ? (
            <p className="  text-[15px]  text-inputBorder">Optional</p>
          ) : (
            props.id != "directorEmail" &&
            props.id != "debtComments" &&
            props.id != "debtOfferComments" &&
            props.id != "globalchat" && <span className="text-red ml-1">*</span>
          ))}
      </div>
      <input
        maxLength={props.maxLength}
        type={`${props.type ? props.type : "text"}`}
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        className={`block rounded-[6px] px-2.5 mt-2 p-1 w-full h-[45px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-white"
        }  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer ${
          props.classname
        }`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default QueInput2;
