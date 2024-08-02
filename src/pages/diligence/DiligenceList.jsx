import { Link, useHistory } from "react-router-dom";
import { Sidebar, Header, Loader, Pagination } from "../../components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDocs } from "../../features/document/docSlice";

import { apiPUT } from "../../utils/apiHelper";
import { toast } from "react-toastify";
import CommentModal from "../../components/Modals/CommentModal";

const DiligenceList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [docURL, setDocURl] = useState("");
  const [userId, setUserId] = useState("");
  const openCommentModal = (docURL, userId) => {
    setShowCommentModal(true);
    setDocURl(docURL);
    setUserId(userId);
  };
  const closeCommentModal = () => {
    setShowCommentModal(false);
  };
  const [limit, setLimit] = useState(5);
  let optionsData = {
    limit: limit,
    page: pageNumber,
  };

  const { docs, isLoading } = useSelector((state) => state.docs);

  const handleClick = (e) => {
    e.preventDefault();
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
    if (e.target.value) setLimit(e.target.value / 3);
  };

  const acceptDocs = async (e, id, source) => {
    let data = {
      adminStatus: "accept",
    };
    setLoading(true);
    if (source === "docs") {
      try {
        const response = await apiPUT(`/document/edit/${id}`, data);
        if (response.data.status === 200) {
          toast.success("Document accepted successfully");
          setLoading(false);
        } else {
          toast.error("Please try again");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (source === "fundHistory") {
      try {
        const response = await apiPUT(`/fundinghistory/edit/${id}`, data);
        if (response.data.status === 200) {
          toast.success("Document accepted successfully");
          setLoading(false);
        } else {
          toast.error("Please try again");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (source === "softCom") {
      try {
        const response = await apiPUT(`/softcommitment/edit/${id}`, data);
        if (response.data.status === 200) {
          toast.success("Document accepted successfully");
          setLoading(false);
        } else {
          toast.error("Please try again");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const rejectDocs = async (e, id, source) => {
    let data = {
      adminStatus: "reject",
    };
    setLoading(true);
    if (source === "docs") {
      try {
        const response = await apiPUT(`/document/edit/${id}`, data);
        if (response.data.status === 200) {
          toast.success("Document rejected successfully");
          setLoading(false);
        } else {
          toast.error("Please try again");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (source === "fundHistory") {
      try {
        const response = await apiPUT(`/fundinghistory/edit/${id}`, data);
        if (response.data.status === 200) {
          toast.success("Document rejected successfully");
          setLoading(false);
        } else {
          toast.error("Please try again");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    if (source === "softCom") {
      try {
        const response = await apiPUT(`/softcommitment/edit/${id}`, data);
        if (response.data.status === 200) {
          toast.success("Document rejected successfully");
          setLoading(false);
        } else {
          toast.error("Please try again");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const campaign = {};

  if (docs.results) {
    for (let i = 0; i < docs.results.length; i++) {
      const campaignId = docs.results[i].campaignId;
      campaign[campaignId] = true;
    }
  }

  const campaignLength = Object.keys(campaign)?.length;

  const handlePageNumber = (pageNumber) => {
    setPageNumber(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllDocs(optionsData));
  }, [pageNumber, limit]);

  if (isLoading) return <Loader />;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Header></Header>
        <div className="px-2 sm:px-4">
          <div className="overflow-x-auto w-full">
            <div className="flex flex-wrap items-center justify-between">
              <div className="pt-4 flex items-center gap-4">
                <h3 className="font-bold text-xl text-secondary">
                  Documents{" "}
                  <span className="text-xl font-bold text-secondary">
                    ({docs && docs?.totalResults ? docs.totalResults : 0})
                  </span>
                </h3>
                <svg
                  onClick={() => {
                    history.push("/diligence/campaign");
                  }}
                  className="cursor-pointer"
                  width="34"
                  height="19"
                  viewBox="0 0 34 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18.5C7 18.5 4.875 17.625 3.125 15.875C1.375 14.125 0.5 12 0.5 9.5C0.5 7 1.375 4.875 3.125 3.125C4.875 1.375 7 0.5 9.5 0.5H24.5C27 0.5 29.125 1.375 30.875 3.125C32.625 4.875 33.5 7 33.5 9.5C33.5 12 32.625 14.125 30.875 15.875C29.125 17.625 27 18.5 24.5 18.5H9.5ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z"
                    fill="#2626EA"
                  />
                </svg>
                <h3 className="font-bold text-xl text-secondary-light">
                  Campaign{" "}
                  <span className="text-xl font-bold text-secondary-light">
                    ({campaignLength ? campaignLength : 0})
                  </span>
                </h3>
              </div>
              <div className="pt-4">
                <div className="text-sm font-normal breadcrumbs">
                  <ul>
                    <li>
                      <Link to="/dashboard" className="text-primary">
                        Dashboard
                      </Link>
                    </li>
                    <li className="text-secondary">Due Diligence</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="py-4 flex items-center">
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-secondary-extra-light"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 text-lg text-gray-900 border border-secondary-extra-light rounded-lg focus:ring-primary focus:border-primary "
                    placeholder="Search"
                  />
                </div>
                <div className="px-4">
                  <svg
                    className="cursor-pointer"
                    width="24"
                    height="18"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 12V10H11V12H7ZM3 7V5H15V7H3ZM0 2V0H18V2H0Z"
                      fill="#2626EA"
                    />
                  </svg>
                </div>
              </div>
              <div className="py-4 flex items-center">
                <span className="text-lg text-secondary-extra-light font-normal">
                  Rows per page
                </span>
                <div className="dropdown">
                  <label
                    tabIndex={0}
                    className="flex items-center justify-between w-14 border border-secondary-extra-light px-2 py-1 ml-1 bg-transparent cursor-pointer"
                  >
                    <span>{docs?.perPage * 3}</span>
                    <span>
                      <svg
                        width="14"
                        height="8"
                        viewBox="0 0 14 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.8332 1.5L6.99984 7.33333L1.1665 1.5"
                          stroke="#A6AEBB"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 w-14 px-1 cursor-pointer"
                  >
                    <li
                      value={15}
                      onClick={(e) => handleClick(e)}
                      className="text-center hover:bg-primary hover:text-white text-sm"
                    >
                      15
                    </li>
                    <li
                      value={30}
                      onClick={(e) => handleClick(e)}
                      className="text-center hover:bg-primary hover:text-white text-sm"
                    >
                      30
                    </li>
                    <li
                      value={60}
                      onClick={(e) => handleClick(e)}
                      className="text-center hover:bg-primary hover:text-white text-sm"
                    >
                      60
                    </li>
                    <li
                      value={90}
                      onClick={(e) => handleClick(e)}
                      className="text-center hover:bg-primary hover:text-white text-sm"
                    >
                      90
                    </li>
                    <li
                      value={120}
                      onClick={(e) => handleClick(e)}
                      className="text-center hover:bg-primary hover:text-white text-sm"
                    >
                      120
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <Table/> */}

            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full overflow-hidden">
                  <table className="divide-y border-secondary-light table-auto min-w-full">
                    <thead className="border-secondary-light border-b">
                      <tr>
                        <th scope="col" className="py-3 pl-4">
                          <div className="flex items-center h-5">
                            <input
                              id="checkbox-all"
                              type="checkbox"
                              className="text-secondary border-secondary-light rounded focus:ring-blue-500"
                            />
                            <label htmlFor="checkbox" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize"
                        >
                          <span className="inline-flex items-center justify between">
                            Document
                          </span>
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 relative -left-10 text-lg font-bold text-left text-secondary capitalize"
                        >
                          <span className="inline-flex items-center gap-4 justify between">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              {" "}
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 13l-5 5m0 0l-5-5m5 5V6"
                              />{" "}
                            </svg>
                            Campaign
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize"
                        >
                          Version
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-lg font-bold text-left text-secondary capitalize"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y border-secondary-light">
                      {docs && docs.results && docs.results.length ? (
                        docs.results.map((item) => (
                          <tr key={item.id}>
                            <td className="py-3 pl-4">
                              <div className="flex items-center h-5">
                                <input
                                  type="checkbox"
                                  className="text-secondary border-secondary rounded focus:ring-blue-500"
                                />
                                <label htmlFor="checkbox" className="sr-only">
                                  Checkbox
                                </label>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-lg font-normal text-secondary  whitespace-nowrap   capitalize text-left">
                              {item.name
                                .split("/")
                                .pop()
                                .substring(13)
                                .replace(/%\d+/g, "")
                                .replace(/%([a-fA-F0-9]{2})/g, "")
                                .replace(/[!@#$%^&*(),.?":{}|<>]+$/, "")}
                            </td>
                            <td className="   px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">
                              {item?.campaign?.campaignName}
                            </td>
                            <td className="px-6   py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">
                              {item.type}
                            </td>
                            <td className="px-6   py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">
                              {item?.version}
                            </td>
                            <td className="flex gap-6 px-6 py-4 text-sm font-medium text-right whitespace-nowrap items-center">
                              <div
                                className="cursor-pointer"
                                onClick={(e) =>
                                  acceptDocs(e, item.id, item.source)
                                }
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.99844 19.6C15.3004 19.6 19.5984 15.302 19.5984 10C19.5984 4.69809 15.3004 0.400024 9.99844 0.400024C4.6965 0.400024 0.398438 4.69809 0.398438 10C0.398438 15.302 4.6965 19.6 9.99844 19.6ZM14.447 8.44855C14.9156 7.97992 14.9156 7.22013 14.447 6.7515C13.9783 6.28287 13.2185 6.28287 12.7499 6.7515L8.79844 10.703L7.24697 9.1515C6.77834 8.68287 6.01854 8.68287 5.54991 9.1515C5.08128 9.62013 5.08128 10.3799 5.54991 10.8486L7.94991 13.2486C8.41854 13.7172 9.17834 13.7172 9.64697 13.2486L14.447 8.44855Z"
                                    fill="#2FA14D"
                                  />
                                </svg>
                              </div>
                              <div
                                className="cursor-pointer"
                                onClick={(e) =>
                                  rejectDocs(e, item.id, item.source)
                                }
                              >
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.99844 19.6C15.3004 19.6 19.5984 15.302 19.5984 10C19.5984 4.69809 15.3004 0.400024 9.99844 0.400024C4.6965 0.400024 0.398438 4.69809 0.398438 10C0.398438 15.302 4.6965 19.6 9.99844 19.6ZM8.44697 6.7515C7.97834 6.28287 7.21854 6.28287 6.74991 6.7515C6.28128 7.22013 6.28128 7.97992 6.74991 8.44855L8.30138 10L6.74991 11.5515C6.28128 12.0201 6.28128 12.7799 6.74991 13.2486C7.21854 13.7172 7.97834 13.7172 8.44697 13.2486L9.99844 11.6971L11.5499 13.2486C12.0185 13.7172 12.7783 13.7172 13.247 13.2486C13.7156 12.7799 13.7156 12.0201 13.247 11.5515L11.6955 10L13.247 8.44855C13.7156 7.97992 13.7156 7.22013 13.247 6.7515C12.7783 6.28287 12.0185 6.28287 11.5499 6.7515L9.99844 8.30297L8.44697 6.7515Z"
                                    fill="#E84637"
                                  />
                                </svg>
                              </div>
                              <div
                                className="cursor-pointer"
                                onClick={() =>
                                  openCommentModal(
                                    item?.name
                                      .split("/")
                                      .pop()
                                      .substring(13)
                                      .replace(/%\d+/g, "")
                                      .replace(/%([a-fA-F0-9]{2})/g, "")
                                      .replace(/[!@#$%^&*(),.?":{}|<>]+$/, ""),
                                    item.campaign.userId
                                  )
                                }
                              >
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.6004 9.00001C19.6004 13.6392 15.3023 17.4 10.0004 17.4C8.21043 17.4 6.53488 16.9714 5.10051 16.225L0.400391 17.4L2.00635 13.6528C0.991752 12.3208 0.400391 10.7208 0.400391 9.00001C0.400391 4.36081 4.69846 0.600006 10.0004 0.600006C15.3023 0.600006 19.6004 4.36081 19.6004 9.00001ZM6.40039 7.80001H4.00039V10.2H6.40039V7.80001ZM16.0004 7.80001H13.6004V10.2H16.0004V7.80001ZM8.80039 7.80001H11.2004V10.2H8.80039V7.80001Z"
                                    fill="#518EF8"
                                  />
                                </svg>
                              </div>
                              <div className="dropdown dropdown-end">
                                <label
                                  tabIndex={0}
                                  className="m-1 cursor-pointer"
                                >
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    {" "}
                                    <path
                                      d="M9.99295 7.80488C11.1834 7.80488 12.1358 8.78049 12.1358 10C12.1358 11.2195 11.1834 12.1951 9.99295 12.1951C8.80248 12.1951 7.8501 11.2195 7.8501 10C7.8501 8.78049 8.80248 7.80488 9.99295 7.80488ZM7.8501 2.19512C7.8501 3.41463 8.80248 4.39024 9.99295 4.39024C11.1834 4.39024 12.1358 3.41463 12.1358 2.19512C12.1358 0.97561 11.1834 0 9.99295 0C8.80248 0 7.8501 0.97561 7.8501 2.19512ZM7.8501 17.8049C7.8501 19.0244 8.80248 20 9.99295 20C11.1834 20 12.1358 19.0244 12.1358 17.8049C12.1358 16.5854 11.1834 15.6098 9.99295 15.6098C8.80248 15.6098 7.8501 16.5854 7.8501 17.8049Z"
                                      fill="#8B83BA"
                                    />{" "}
                                  </svg>
                                </label>
                                <ul
                                  tabIndex={0}
                                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border"
                                >
                                  <li onClick={(e) => handleClick(e)}>
                                    <a>Item 1</a>
                                  </li>
                                  <li onClick={(e) => handleClick(e)}>
                                    <a>Item 2</a>
                                  </li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <div className="w-full flex flex-col fixed items-center justify-center mt-20">
                          <p className="text-lg">There are no users</p>
                        </div>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {docs && docs.results && docs.results.length ? (
              <Pagination
                totalPages={docs.totalPages}
                currentPage={docs.currentPage}
                handlePageNumber={handlePageNumber}
              />
            ) : null}
          </div>
        </div>
      </div>

      <CommentModal
        showCommentModal={showCommentModal}
        closeCommentModal={closeCommentModal}
        docURL={docURL}
        userId={userId}
      />
    </div>
  );
};

export default DiligenceList;
