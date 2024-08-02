import { RxChevronDown } from "react-icons/rx";

const PrefSelectInput = (props) => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <div class="relative mt-[2px]">
      {JSON.stringify(props.selectedSectors)}
      <div className="flex justify-between">
        <label
          id={props.id}
          for="floating_outlined"
          className="  text-[15px] font-semibold text-black "
        >
          {props.label}
        </label>
      </div>
      <div className="relative w-full ">
        <select
          disabled={props.disabled}
          className={`${
            props.error ? "border-[red]" : "border-inputBorder "
          } relative h-[45px] border appearance-none w-full rounded-md  pl-4  pt-2 pb-1.5  ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          } `}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled>
            Select
          </option>
          {props.data?.map((e, key) => {
            return (
              <option key={key} value={e} onClick={(e) => handleClick(e)}>
                {e.name}
              </option>
            );
          })}
        </select>
        <div className="absolute top-1 right-3">
          <RxChevronDown style={{ color: "#A6AEBB" }} className={`h-8 w-6`} />
        </div>
      </div>
    </div>
  );
};

export default PrefSelectInput;
