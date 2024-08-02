import { RxChevronDown } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const SectorSelectInput = (props) => {
  return (
    <div class="relative mt-[2px]">
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
          {props.allSector?.map((e, key) => {
            return (
              <option key={e.name} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <div className="flex flex-wrap">
          {props.mypref?.length != 0 &&
            props.mypref?.map((item, index) => {
              return (
                <div className="bg-gray-700 my-2 mx-2 px-1">
                  <div className=" text-white">
                    <span className="inline">{item.preference.name}</span>{" "}
                    <RxCross2
                      style={{ color: "#A6AEBB" }}
                      onClick={(e) => props.removeSector(item, index)}
                      className={`h-8 w-6 inline cursor-pointer`}
                    />
                  </div>
                </div>
              );
            })}
        </div>

        <div className="absolute top-1 right-3">
          <RxChevronDown style={{ color: "#A6AEBB" }} className={`h-8 w-6`} />
        </div>
      </div>
    </div>
  );
};

export default SectorSelectInput;
