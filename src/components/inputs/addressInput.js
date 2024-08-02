import { useRef, useEffect, useState } from "react";
import {
  addAddress,
  addInstCompAddress,
  addAddressFounderProfile,
  addAddressFounderCompany,
  addCampaignAddress,
  addaddressIndInvestorProfile,
} from "../../app/addressSlice";
import { useDispatch } from "react-redux";

const AddressInput = (props) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const dispatch = useDispatch();
  const options = {
    fields: [
      "address_components",
      "geometry",
      "formatted_address",
      "icon",
      "name",
    ],
  };
  useEffect(() => {
    try {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options
      );
      autoCompleteRef.current.addListener("place_changed", (e) => {
        console.log("on change event----------", e);
        const place = autoCompleteRef.current.getPlace();
        console.log("place on change--------------", place);

        //postal Code
        let postalCode =
          place.address_components?.find((c) =>
            c.types.includes("postal_code")
          ) || {};
        if (postalCode && Object.keys(postalCode).length > 0) {
          console.log("postalCode only ", postalCode.long_name);
        }
        //country
        let country = place.address_components?.find((c) =>
          c.types.includes("country")
        );
        if (country && Object.keys(country).length > 0) {
          console.log("country only ", country.long_name);
          console.log("country short only ", country.short_name);
        }
        //state
        let state = place.address_components?.find((c) =>
          c.types.includes("administrative_area_level_1")
        );
        if (state && Object.keys(state).length > 0) {
          console.log("state only", state.long_name);
        }
        //city
        let city = place.address_components?.find(
          (c) =>
            c.types.includes("locality") ||
            c.types.includes("postal_town") ||
            c.types.includes("administrative_area_level_2")
        );
        if (city && Object.keys(city).length > 0) {
          console.log("only city------", city.long_name);
        }

        //neighborhood
        let neighborhood = place.address_components?.find((c) =>
          c.types.includes("neighborhood")
        );
        if (neighborhood && Object.keys(city).length > 0) {
          console.log("only neighborhood------", neighborhood.long_name);
        }

        //point intrest
        let pointintrest = place.address_components?.find((c) =>
          c.types.includes("point_of_interest")
        );
        if (pointintrest && Object.keys(pointintrest).length > 0) {
          console.log("only point intrest------", pointintrest.long_name);
        }
        //permise
        let permise = place.address_components?.find((c) =>
          c.types.includes("premise")
        );
        if (permise && Object.keys(permise).length > 0) {
          console.log("only permise------", permise.long_name);
        }

        //street
        let street = place.address_components?.find((c) =>
          c.types.includes("street_number")
        );
        if (street && Object.keys(street).length > 0) {
          console.log("only street------", street.long_name);
        }
        //route
        let route = place.address_components?.find((c) =>
          c.types.includes("route")
        );
        if (route && Object.keys(route).length > 0) {
          console.log("only street------", route.long_name);
        }
        //sublocatlity 3
        let sublocal3 = place.address_components?.find((c) =>
          c.types.includes("sublocality_level_3")
        );
        if (sublocal3 && Object.keys(sublocal3).length > 0) {
          console.log("only street------", sublocal3.long_name);
        }
        //sublocatlity 2
        let sublocal2 = place.address_components?.find((c) =>
          c.types.includes("sublocality_level_2")
        );
        if (sublocal2 && Object.keys(sublocal2).length > 0) {
          console.log("only street------", sublocal2.long_name);
        }

        //sublocatlity 1
        let sublocal1 = place.address_components?.find((c) =>
          c.types.includes("sublocality_level_1")
        );
        if (sublocal1 && Object.keys(sublocal1).length > 0) {
          console.log("only street------", sublocal1.long_name);
        }
        console.log(
          "Before setting up---------",
          typeof neighborhood,
          typeof street,
          typeof route,
          typeof sublocal3,
          typeof sublocal2,
          typeof sublocal1
        );
        console.log(
          "Before setting up---------",
          neighborhood,
          street,
          route,
          sublocal3,
          sublocal2,
          sublocal1
        );

        let a8 =
          typeof neighborhood != "undefined" &&
          neighborhood &&
          Object.keys(neighborhood).length > 0
            ? neighborhood.long_name
            : "";

        let a1 =
          typeof street != "undefined" &&
          street &&
          Object.keys(street).length > 0
            ? street.long_name
            : "";
        let a2 =
          typeof route != "undefined" && route && Object.keys(route).length > 0
            ? route.long_name
            : "";
        let a3 =
          typeof sublocal3 != "undefined" &&
          sublocal3 &&
          Object.keys(sublocal3).length > 0
            ? sublocal3.long_name
            : "";
        let a4 =
          typeof sublocal2 != "undefined" &&
          sublocal2 &&
          Object.keys(sublocal2).length > 0
            ? sublocal2.long_name
            : "";
        let a5 =
          typeof sublocal1 != "undefined" &&
          sublocal1 &&
          Object.keys(sublocal1).length > 0
            ? sublocal1.long_name
            : "";
        let a6 =
          typeof pointintrest != "undefined" &&
          pointintrest &&
          Object.keys(pointintrest).length > 0
            ? pointintrest.long_name
            : "";
        let a7 =
          typeof permise != "undefined" &&
          permise &&
          Object.keys(permise).length > 0
            ? permise.long_name
            : "";
        console.log("combines-----", a1, a2, a3, a4, a5);
        let arr = [];

        if (a8.length > 0) {
          arr.push(a8);
        }
        if (a6.length > 0) {
          arr.push(a6);
        }
        if (a7.length > 0) {
          arr.push(a7);
        }
        if (a1.length > 0) {
          arr.push(a1);
        }
        if (a2.length > 0) {
          arr.push(a2);
        }
        if (a3.length > 0) {
          arr.push(a3);
        }
        if (a4.length > 0) {
          arr.push(a4);
        }
        if (a5.length > 0) {
          arr.push(a5);
        }
        console.log("combines-----", arr, arr.toString());

        let obj = {
          postCode:
            typeof postalCode != "undefined" &&
            postalCode &&
            Object.keys(postalCode).length > 0
              ? postalCode.long_name
              : "",
          iso:
            typeof country != "undefined" && Object.keys(country).length > 0
              ? country.short_name
              : "",
          country:
            typeof country != "undefined" && Object.keys(country).length > 0
              ? country.long_name
              : "",
          city:
            typeof city != "undefined" && city && Object.keys(city).length > 0
              ? city.long_name
              : "",
          state:
            typeof state != "undefined" &&
            state &&
            Object.keys(state).length > 0
              ? state.long_name
              : "",
          address1: arr.toString(),
          formatted_address: place.formatted_address,
        };

        console.log("final address object", obj);

        // Do something with the resolved place here (ie store in redux state)
        if (props.type == "address") {
          dispatch(addAddress(obj));
        }

        if (props.type == "addressIndInvestorProfile") {
          dispatch(addaddressIndInvestorProfile(obj));
        }
        if (props.type == "instcompaddress2") {
          dispatch(addInstCompAddress(obj));
        }
        if (props.type == "addressFounderProfile") {
          dispatch(addAddressFounderProfile(obj));
        }
        if (props.type == "addressFounderCompany") {
          dispatch(addAddressFounderCompany(obj));
        }
        if (props.type == "campaignAddress") {
          dispatch(addCampaignAddress(place.formatted_address));
        }
      });
    } catch (e) {
      console.log("error:--", e);
    }
  }, []);

  useEffect(() => {
    if (inputRef) {
      inputRef.current.value = props.value;
    }
  }, [props.value]);

  return (
    <div class="relative  mt-[2px] ">
      <div className="flex justify-between">
        <label
          id={`lbl${props.id}`}
          for={props.id}
          className="  text-[15px] font-semibold text-black "
        >
          {props.label}{" "}
          {!props.optional ? <span className="text-red">*</span> : null}
        </label>
        {props.optional ? (
          <p className="  text-[15px]  text-inputBorder ">Optional</p>
        ) : null}
      </div>
      <input
        ref={inputRef}
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        className={`block text-txt rounded-[6px] px-2.5 pb-2.5 pt-3 w-full h-[45px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-transparent"
        }  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none  focus:outline-none focus:ring-0 peer`}
        placeholder={`Enter ${
          props.label == "Commitment" ? "Amount" : props.label
        }`}
      />
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
          -webkit-transition-delay: 9999s;
        }
      `}</style>
    </div>
  );
};
export default AddressInput;
