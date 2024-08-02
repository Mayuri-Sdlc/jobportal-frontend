import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { FaChevronDown } from "react-icons/fa";

const CountryPicker = (props) => {
  countries.registerLocale(enLocale);
  const countryObj = countries.getNames("en", { select: "official" });
  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  return (
    <div class="relative lg:w-[60%] w-[92%] mt-[16px] ">
      <select
        className={`block text-txt rounded-[6px] px-2.5 pb-2.5 pt-2 w-full  h-[45px] text-gray-900 bg-transparent  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        name="cars"
        value={props.value}
        onChange={props.onChange}
        id="cars"
      >
        <option className=" " value="" disabled selected>
          {props.label}
        </option>
        {countryArr.map((e, key) => {
          return (
            <option className="" key={key} value={e.label}>
              {e.label}
            </option>
          );
        })}
      </select>

      <FaChevronDown className="absolute cursor-pointer top-3 h-4 w-6 right-2 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default CountryPicker;
