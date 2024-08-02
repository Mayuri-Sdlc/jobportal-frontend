import { useEffect, useState } from "react";
import { RxChevronDown } from "react-icons/rx";

const RoleTypeInput = (props) => {
  const [investAs, setInvestAs] = useState([
    { id: "1", name: "individual" },
    { id: "2", name: "syndicate" },
  ]);

  useEffect(() => {
    console.log("type ====", props.type);
    if (props.type && props.type.length > 0) {
      if (props.type == "ind") {
        let t = investAs.filter((e) => e.name == "individual");
        setInvestAs(t);
      }
      if (props.type == "syn") {
        let t = investAs.filter((e) => e.name == "syndicate");
        setInvestAs(t);
      }
    }
  }, [props.type]);

  return (
    <div class="relative mt-[2px]">
      <div className=" flex ">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className="  text-[15px] font-semibold text-black "
        >
          {props.label}
        </label>
        <span className="text-red ml-1">*</span>
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
          <option
            className="text-inputBorder"
            disabled={true}
            key={""}
            value={""}
          >
            Select investment as
          </option>
          {investAs.map((e, key) => {
            return (
              <option key={key} value={e.name}>
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

export default RoleTypeInput;
