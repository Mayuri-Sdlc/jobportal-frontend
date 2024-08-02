import { ReactComponent as InfoIcon } from "../../images/infoIcon.svg";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FunStageDropDown = (props) => {
  const [show, setShow] = useState(false);

  const fundingStage = [
    {
      id: "1",
      name: "Ideation",
      desc: "The initial phase where entrepreneurs generate and develop their business ideas, typically exploring market opportunities and potential solutions.",
    },
    {
      id: "3",
      name: "Pre-Seed",
      desc: "Funding provided at the earliest stage of a startup's formation, often used to conduct market research, validate ideas, and build a minimum viable product (MVP)",
    },
    {
      id: "2",
      name: "Seed",
      desc: "Initial funding provided to a startup or entrepreneur to support the development of a business concept or prototype, typically in exchange for equity.",
    },
    {
      id: "4",
      name: "Series A",
      desc: "The first significant round of funding after seed funding, usually aimed at scaling operations, expanding the team, and gaining traction in the market. It involves a more substantial investment in exchange for equity",
    },
    {
      id: "5",
      name: "Series B",
      desc: "The funding round that follows Series A, typically focused on further scaling the business, increasing market share, and enhancing product development.",
    },
    {
      id: "6",
      name: "Series C and beyond",
      desc: "Additional funding rounds that occur as the company continues to grow, aiming to fuel expansion, enter new markets, or support acquisitions.",
    },
    {
      id: "7",
      name: "Pre-IPO",
      desc: "Pre-IPO stage funding serves as a financial bridge for companies gearing up to go public. It enables access to capital by leveraging private company equity before the Initial Public Offering (IPO), providing crucial support for growth, market entry, and strategic initiatives.",
    },
  ];

  return (
    <div class="relative  mt-[4px]">
      <div className="flex">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {props.label}
        </label>
        {!props.optional ? <span className="text-red ml-1">*</span> : null}
      </div>
      <div className="relative w-full ">
        <select
          disabled={props.disabled}
          className={`block cursor-pointer rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900  ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none focus:outline-none focus:ring-0 peer`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled selected>
            Select Funding Stage
          </option>

          {fundingStage.map((e, key) => {
            return (
              <option key={key} value={e.name}>
                {e.name}
              </option>
            );
          })}
        </select>

        {props.value.length > 0 && (
          <div
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}
            className={`absolute cursor-pointer right-[10%] -top-[1px] h-full flex items-center pr-2`}
          >
            <div className="p-1">
              <InfoIcon />
            </div>
          </div>
        )}

        {show ? (
          <div
            className={`absolute -top-40 h-[160px] right-0 rounded-lg p-2 bg-gray-100 
             
              }`}
          >
            {fundingStage
              .filter((e) => e.name === props.value)
              .map((e) => e.desc)
              .toString()}
          </div>
        ) : null}
      </div>

      <FaChevronDown
        style={{ color: "#A6AEBB" }}
        className={` absolute cursor-pointer pointer-events-none top-10 h-4 w-6 right-2`}
      />
    </div>
  );
};

export default FunStageDropDown;
