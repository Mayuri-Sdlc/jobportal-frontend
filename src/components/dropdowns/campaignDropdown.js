import { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";
import { apiGET } from "utils/apiHelper";

const CampaignDropDown = (props) => {
  const [data, setData] = useState([]);

  //get Campaigns
  useEffect(() => {
    getCampaigns();
  }, []);

  const getCampaigns = async () => {
    const response = await apiGET("/v1/campaign/syndicate/list");

    if (response.data.status == 200) {
      setData(response.data.data);
    }
  };

  return (
    <div class="relative mt-[2px]">
      <div className="flex justify-between">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {props.label} <span className="text-red">*</span>
        </label>
      </div>
      <div className="relative w-full ">
        <select
          disabled={props.disabled}
          className={`${
            props.error ? "border-[red]" : "border-inputBorder "
          } relative h-[45px] border appearance-none w-full rounded-md  pl-4  pt-2 pb-1.5  ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          } text-secondary `}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option className="text-secondary" value="" disabled>
            Select Campaign
          </option>
          {data.map((e, key) => {
            return (
              <option key={key} value={e.id}>
                {e.campaignName}
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

export default CampaignDropDown;
