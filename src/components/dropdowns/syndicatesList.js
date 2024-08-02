import { useState, useEffect } from "react";
import { RxChevronDown } from "react-icons/rx";
import { apiPOST } from "utils/apiHelper";

const SyndicateList = (props) => {
  const [data, setData] = useState([]);

  const getMyActiveSyndicate = async () => {
    if (props.campaignId) {
      let payLoad = {
        campaignId: props.campaignId,
      };
      const response = await apiPOST("/v1/syndicate/myactive", payLoad);
      console.log("response to get my active syndicates---------", response);
      if (response.data.status == 200) {
        let temp = response.data.data.map((e) => {
          return {
            id: e.syndicate.id,
            name: e.syndicate.name,
            campaignId: e.syndicate.campaignId,
          };
        });
        setData(temp);

        console.log("syndicate aray=========", temp);
      }
    }
  };

  useEffect(() => {
    getMyActiveSyndicate();
  }, [props.campaignId]);

  return (
    <div class="relative  mt-[2px]">
      <div className=" flex  ">
        <label
          id={"lbl" + props.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {props.label}
        </label>
        <span className="text-red ml-1">*</span>
      </div>
      <div className="relative w-full ">
        <select
          disabled={props.disabled}
          className={`block  rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900  ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          id={props.id}
          type="text"
        >
          <option value="" disabled selected>
            Select syndicate
          </option>
          {data.map((e, key) => {
            return (
              <option key={key} value={e.id}>
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

export default SyndicateList;
