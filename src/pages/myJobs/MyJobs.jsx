import React,{ useEffect, useRef, useState } from "react";

// import { ReactComponent as Halfdiamond2 } from "../../images/halfdiamond2.svg";
import { IoIosArrowDown } from "react-icons/io";
// import Loading from "components/loading/loading";
import { MdOutlineSimCardDownload } from "react-icons/md";
// import Pagination from "components/pagination/pagination";
import Navbar from "../../components/Navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
// import { ReactComponent as Filtericon } from "../../images/dealroom/filter.svg";
import { AiOutlineSearch, AiOutlineEye } from "react-icons/ai";
import { apiPOST } from "../../utils/apiHelper";
import { useSelector } from "react-redux";
import moment from "moment";

// import ViewPortfolio from "./viewPortfolio";
import { toast } from "react-toastify";
import ReactModal from "react-modal";
import FilePickInput from "../../components/filepickInput";
import { BsPerson } from "react-icons/bs";
import Button from "../../components/buttons/button";


const MyJobs = () => {
  const { user } = useSelector((state) => state.user);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Measure the scrollbar width
    const scrollDiv = document.createElement("div");
    scrollDiv.style.cssText =
      "width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px;";
    document.body.appendChild(scrollDiv);
    setScrollbarWidth(scrollDiv.offsetWidth - scrollDiv.clientWidth);
    document.body.removeChild(scrollDiv);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calculate dynamic width considering the scrollbar width
  const dynamicWidth = screenWidth - scrollbarWidth;

  useEffect(() => {
    if (
      user &&
      user?.role?.mainRole == "investor" &&
      !user?.investorProfiles[0]?.isKycVerified
    ) {
      toast.error("Your KYB/KYC is not verified yet.");
      const timeout = setTimeout(() => {
        window.location.href = "/";
      }, 1000);

      return () => clearTimeout(timeout);
    }

    if (
      (user &&
        user?.investorProfiles?.length > 0 &&
        user?.investorProfiles[0]?.profileStatus != 100) ||
      (user?.role?.mainRole == "investor" && user?.investorProfiles.length == 0)
    ) {
      toast.error("Please complete your profile first");
      const timeout = setTimeout(() => {
        window.location.href = "/";
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [user]);
 // console.log("userid....", user.id);

  const [showModal2, setShowModal2] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = () => {
    setShowModal2(true);
  };
  const closeModal = () => {
    setShowModal2(false);
  };

  const [showModalsyn, setShowModalsyn] = useState(false);

  const closeModalsyn = () => {
    setShowModalsyn(false);
  };

  const [dropdown, setDropdown] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [currentSyndicateId, setCurrentSyndicateId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchInp, setSearchInp] = useState("");
  const [profile2, setProfile2] = useState(false);
  const [currentIndex, setcurrenIndex] = useState();
  const [modal2, setModal2] = useState(false);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [modalW, setModalw] = useState(0);

  const openModal2 = () => {
    setModal2(true);
  };
  const closeModal2 = () => {
    setModal2(false);
  };

  const tableHeding = [
    "Job Post",
    "Event",
    "Date Time",
    "Status",
    "Action",
    
  ];

  const customStyles2 = {
    overlay: {
      backgroundColor: "transparent", // Make the overlay background transparent
    },
    content: {
      position: "relative",
      top: top,
      left: left,
      color: "black",
      maxHeight: "120px",
      width: "250px ",
      borderRadius: "15px",

      overflwoX: "hidden",
      overflow: "hidden",
    },
  };

  const [bottom, setBottom] = useState(0);
  const [islast, setIslast] = useState(false);

  const customStyles3 = {
    overlay: {
      backgroundColor: "transparent", // Make the overlay background transparent
    },
    content: {
      position: "relative",
      top: window.innerHeight - 110,

      left: left,
      color: "black",
      maxHeight: "120px",
      width: "250px ",
      borderRadius: "15px",
      overflowY: "hidden",
      overflwoX: "hidden",
      overflow: "hidden",
    },
  };

  //Handle Scroll
  // const handleScroll = () => {
  //   const scrollTop = document.documentElement.scrollTop;
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const clientHeight = document.documentElement.clientHeight;

  //   console.log(
  //     "yes call to scroll",
  //     scrollTop + clientHeight,
  //     scrollTop,
  //     scrollHeight,
  //     clientHeight
  //   );
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   console.log(
  //     "ref change----------",

  //     ref3,
  //     ref3?.current?.clientHeight,
  //     ref3?.current?.clientWidth
  //   );
  // }, []);

  // useEffect(() => {
  //   if (modal2) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }
  // }, [modal2]);
  const [documentarr, setDocumentarr] = useState([]);
  const [selected2, setSelected2] = useState("Recently_Added");
  const [showSearch, setShowSearch] = useState(false);
  const handleButtonClick = () => {
    setShowSearch(!showSearch);
  };
  const handleSortingChange2 = (e) => {
    setDropdown(false);
    setProfile2(false);
    return setSelected2(e.target.value);
  };

  const getlist = async () => {
    setPageLoading(true);
  //  console.log("current page=---", currentPage);

    const payload = {
      // options: {
      //   page: currentPage,
      // },
      // filter: {
      //   query: searchInp,
      //   sort: selected2,
      // },
    };

    const res = await apiPOST(`/jobapply/mygetall`, payload);

    console.log("res get list..", res.data.data);
    setDocumentarr(res?.data?.data);
    //setTotal(res?.data?.data?.data?.totalResults);
    setPageLoading(false);
  };

  // useEffect(() => {
  //   const getData = setTimeout(() => {
  //     getlist();
  //   }, 1000);

  //   return () => clearTimeout(getData);
  // }, [user.id, currentPage, searchInp, selected2]);

  // const handleClickOutside = (event) => {
  //   if (ref2.current && !ref2.current.contains(event.target)) {
  //     setModal2(false);
  //     setcurrenIndex(null);
  //   }
  // };


  useEffect(()=>{
  getlist()
  },[]);
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, []);

  return (
    <div
    
      className="flex-1 min-h-[100vh] flex flex-col bg-white text-secondary relative"
    >
       <Navbar />
      <div className={`relative overflow-hidden`}>
      
        <div>
      
        </div>

        <div className=" mt-2.5 ">
          <div className="md:w-11/12 xl:w-[85%] mx-2 md:mx-auto mb-24 bg-white ">
            <div className="flex justify-between items-baseline my-2">
              <div
                onClick={() => {}}
                className="text-[rgb(9,30,66)] text-[27px] font-bold whitespace-nowrap"
              >
              
              </div>
              {/* 
               Modal */}

              <div className="flex justify-center">
                <div className="">
                  <div className="relative flex gap-3 items-center">
                    {/* <div className="absolute inset-y-0 right-10 flex items-center pointer-events-none">
                      <AiOutlineSearch className="fill-gray-400 " size="20px" />
                    </div> */}
                    <div className="flex relative">
                      <input
                        className={`bg-transparent outline-none transition-all duration-300 ease-in-out ${
                          showSearch
                            ? "w-20 sm:w-48 p-2 border-y border-l rounded-tl-md rounded-bl-md"
                            : "w-0"
                        }`}
                        type="text"
                        placeholder="Search..."
                        id="search"
                        value={searchInp}
                        onChange={(e) => {
                          setSearchInp(e.target.value);
                        }}
                        required
                      />
                      <button
                        className={`bg-gray-100 p-2 focus:outline-none transition-all duration-300 ease-in-out ${
                          showSearch
                            ? "bg-white text-gray-700 border-y border-r rounded-tr rounded-br"
                            : "text-white rounded"
                        }`}
                        onClick={handleButtonClick}
                      >
                        <svg
                          className="h-6 w-6 text-gray-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {" "}
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />{" "}
                        </svg>
                      </button>
                    </div>

                    <div className="">
                      {/* <Filtericon
                        className="cursor-pointer"
                        onClick={() => setProfile2(!profile2)}
                      /> */}
                      {profile2 && (
                        <div
                          className="absolute  top-[25px] right-[10px]  sm:-right-[0px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabindex="-1"
                        >
                          <div className="py-1" role="none">
                            <button
                              onClick={(e) => {
                                handleSortingChange2(e);
                                setSelected2("latest");
                              }}
                              value="Recently_Added"
                              href="#"
                              className="text-gray-700 text-left block px-4 w-full tex py-2 text-sm"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-0"
                            >
                              Latest
                            </button>
                            <button
                              onClick={(e) => {
                                handleSortingChange2(e);
                                setSelected2("ztoa");
                              }}
                              value="Comments_Count"
                              href="#"
                              className="text-gray-700 block text-left px-4 w-full py-2 text-sm"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-1"
                            >
                              Amount High to Low
                            </button>
                            <button
                              onClick={(e) => {
                                handleSortingChange2(e);
                                setSelected2("atoz");
                              }}
                              value="Most_Popular_Investor"
                              href="#"
                              className=" text-left text-gray-700 block px-4 py-2 w-full text-sm"
                              role="menuitem"
                              tabindex="-1"
                              id="menu-item-2"
                            >
                              Amount Low to High
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

         

            <div className="max-w-[320px] sm:max-w-full mx-auto overflow-x-auto">
            
            <p className="text-txt text-[25px]">Interview Queues</p>
              <table
                className=" mt-5 overflow-x-auto leading-normal w-full border-separate border-spacing-y-2
                 border-b-2"
              >
                 <thead className="">
                  <tr className="font-bold  text-black ">
                    {tableHeding.map((item, key) => {
                      return (
                        <th
                          className={` text-left   py-3 bg-[#DFE2E6]   ${
                            item == "Campaigns" ? " border rounded-l-lg" : ""
                          }  ${
                            item == "Action" ? "border rounded-r-lg" : ""
                          }  text-lg   `}
                        >
                          <p
                            className={`${
                              item == "Campaigns" ? "ml-2  " : "text-left"
                            }`}
                          >
                            {item}
                          </p>
                        </th>
                      );
                    })}
                  </tr>
                </thead> 

                {pageLoading ? (
                  <div className="flex flex-1 absolute justify-center w-[80%] mt-28 items-center ">
                   
                  </div>
                ) : (
                  <tbody className="">
                    {documentarr &&
                      documentarr.map((item, index) => {
                        return (
                          // bydefault show table
                          <tr ref={ref3} className=" ">
                            <td className=" break-words text-lg">
                              <div className="flex ml-2 items-center break-words">
                               
                                {item?.user?.userProfiles.length>0 && item?.user?.userProfiles[0]?.profilePic ? (
                                  <img
                                    className="w-10 h-10 rounded-full"
                                    src={item?.jobPost?.company?.logo}
                                  />
                                ) : (
                                  <div className="w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center">
                                    <BsPerson
                                      size={20}
                                      className="mt-1 text-black justify-center items-center"
                                    />
                                  </div>
                                )}
                                <div className="ml-5 flex-col sm:w-full w-[50%] break-words">
                                 {item?.jobPost?.company?.name}
                                  <p>{item?.jobPost?.name}</p>
                                </div>
                              </div>
                            </td>
                             
                            <td className="flex-col break-words text-left text-txt max-w-[120px] ">
                              <b> {item?.jobPost?.event?.name}</b>
                           
                            </td>
                          
                            <td className="flex-col break-words text-left text-txt max-w-[120px] ">
                              <b>Location: Pannel A</b>
                              <br/>
                               <p> {moment(item?.datetime).format("DD/MM/YYYY HH:mm a")}</p>
                            </td>

                            <td className="break-words flex-col justify-center  items-center">
                              <div
                                className={`flex items-center  border font-semibold w-fit rounded-md px-2
                                  
                                  

                                    
                                  
                                 
                               
                                  `}
                              >
                                <div
                                  className={`h-2 w-2    
                                     ${
                                       item.status == "approved" &&
                                       "bg-green-700 rounded-full"
                                     }
                                     ${
                                       item.status == "pending" &&
                                       "bg-[#F2C046] rounded-full"
                                     }
                                     ${
                                       item.status == "rejected" &&
                                       "bg-red rounded-full"
                                     }
                                  
                                  `}
                                ></div>
                                <p className="self-center">
                                  {item?.status == "pending"
                                    ? "APPLICATION SUBMITTED"
                                    : item?.status?.toUpperCase()}
                                </p>
                              </div>
                            </td>
                            <td className="flex  break-words text-right text-txt">
                             <Button title="View Details"/>

                            </td>
                         
                          

                        
                                      
                                     
                          </tr>
                        );
                      })}
                  </tbody>
                )}
                  

              </table>
              {!pageLoading && documentarr?.length === 0 ? (
                <div className="flex justify-center  mt-24 items-center">
                  <p className="text-subHeading text-center">
                    No document found.
                  </p>
                </div>
              ) : null}
            </div>

            {/* pagination */}

            {/* {documentarr?.length > 0 ? (
              <div
                className={`flex place-content-end ${
                  pageLoading ? "mt-56" : "mt-5"
                }`}
              >
                <Pagination
                  itemsPerPage={10}
                  total={total}
                  page={(e) => {
                    setCurrentPage(e);
                  }}
                />
              </div>
            ) : (
              <div
                className={`flex h-[50px] place-content-end ${
                  pageLoading ? "mt-56" : "mt-5"
                }`}
              ></div>
            )} */}
          </div>
        </div>
      </div>
   

    
    </div>
  );
};

export default MyJobs;
