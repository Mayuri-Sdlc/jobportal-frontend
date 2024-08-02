import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ReactComponent as Loader } from "../../images/loader.svg";
import { apiPOST } from "utils/apiHelper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SearchInput = () => {
  const { user } = useSelector((s) => s.user);
  const [showDropDiv, setShowDropDiv] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [loading, setloading] = useState(true);
  const [inputValue, setInputValue] = useState("");

  const searchGlobal = (e) => {
    getSeacrhData(e.target.value);
    setInputValue(e.target.value);
    if (e.target.value.length > 0) {
      setShowDropDiv(true);
    } else {
      setShowDropDiv(false);
    }
  };

  const getSeacrhData = async (txt) => {
    const payload = {
      text: txt,
    };
    try {
      setloading(true);
      const response = await apiPOST(`/v1/search/myData`, payload);
      if (response.status === 200) {
        setSearchData(response?.data?.data);
        if (response?.data?.data?.length > 0) {
          setloading(false);
        } else {
          setloading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  const hideDropDiv = () => {
    setSearchData("");
    setInputValue("");
    setShowDropDiv(false);
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
          <AiOutlineSearch className="fill-gray-400 " size="20px" />
        </div>
        <input
          id="search"
          className="w-full p-3 text-sm text-[#ffffff] rounded-lg outline-none bg-[#4040F4]"
          placeholder="Search campaign by name"
          required
          // disabled={
          //   user?.founderProfiles[0]?.isKycVerified ||
          //   user?.investoyrProfiles[0]?.isKycVerified
          //     ? false
          //     : true
          // }
          value={inputValue}
          onChange={searchGlobal}
        />
      </div>
      <div
        className={` absolute z-10 mt-1 ${showDropDiv ? "block" : "hidden"}`}
      >
        <div className="  px-5 w-[500px] border bg-white  rounded-lg">
          {loading ? (
            <div className="flex justify-center mx-auto">
              <Loader className="animate-spin" />
            </div>
          ) : (
            <div>
              {user.role.type ? (
                !loading && searchData.length > 0 ? (
                  <div className="pl-2 mx-auto my-2">
                    <div className="text-black mb-2 font-semibold">
                      Campaign List
                    </div>
                    {searchData.map((item) => {
                      return (
                        <div key={item.id}>
                          {user.role.mainRole === "investor" ? (
                            <Link to={`/dealroom/campaign/${item?.id}`}>
                              <div
                                onClick={hideDropDiv}
                                className="text-black bg-slate-100 border rounded-lg cursor-pointer p-2"
                              >
                                <div className="flex gap-2 items-center">
                                  <div className="">
                                    <img
                                      className="w-10 h-10 border rounded-lg"
                                      src={item.logo}
                                      alt={item.campaignName}
                                    />
                                  </div>
                                  <div> {item.campaignName}</div>
                                </div>
                              </div>
                              <br />
                            </Link>
                          ) : null}
                          {user.role.mainRole === "founder" ? (
                            <Link
                              to={`/founder/campaigndetails/pitch/${item?.id}`}
                            >
                              <div
                                onClick={hideDropDiv}
                                className="text-black border rounded-lg cursor-pointer p-2"
                              >
                                <div className="flex gap-2 items-center">
                                  <div className="">
                                    <img
                                      className="w-10 h-10 border rounded-lg"
                                      src={item.logo}
                                      alt={item.campaignName}
                                    />
                                  </div>
                                  <div> {item.campaignName}</div>
                                </div>
                              </div>
                            </Link>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex justify-center text-black mx-auto">
                    No Found
                  </div>
                )
              ) : (
                <div className="flex justify-center text-black mx-auto">
                  Please select a role first.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
