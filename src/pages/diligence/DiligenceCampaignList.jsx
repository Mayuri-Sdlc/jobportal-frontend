import { Link, useHistory } from "react-router-dom";
import { Sidebar, Header, Loader, Pagination } from "../../components";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllDocs } from "../../features/document/docSlice";
import CampaignDocs from "./CampaignsDoc";

const DiligenceCampaignList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isActive, setIsActive] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [campaignData, setCampaignData] = useState("");

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

  const resultSets = [];
  const campaign = {};

  if (docs.results) {
    docs.results.forEach((result) => {
      const campaignId = result.campaign?.id;
      if (!campaign[campaignId]) {
        campaign[campaignId] = {
          campaign: result.campaign,
          data: [],
        };
      }
      campaign[campaignId].data.push({
        id: result.id,
        name: result.name,
        source:result.source,
        type:result.type,
        version:result.version,
        accessLevel:result.accessLevel,
        adminStatus:result.adminStatus,
        campaignName :result.campaign.campaignName

      });
    });

    for (const campaignId in campaign) {
      const resultSet = {
        campaign: campaign[campaignId].campaign,
        data: campaign[campaignId].data,
      };
      resultSets.push(resultSet);
    }
  }

  console.log(resultSets);

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

  return isActive === 1 ? (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <Header></Header>
        <div className="px-2 sm:px-4">
          <div className="overflow-x-auto w-full">
            <div className="flex flex-wrap items-center justify-between">
              <div className="pt-4 flex items-center gap-4">
                <h3 className="font-bold text-xl text-secondary-light">
                  Documents{" "}
                  <span className="text-xl font-bold text-secondary-light">
                    ({docs && docs?.totalResults ? docs.totalResults : 0})
                  </span>
                </h3>
                <svg
                  onClick={() => {
                    history.push("/diligence");
                  }}
                  className="cursor-pointer"
                  width="34"
                  height="19"
                  viewBox="0 0 34 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.5 18.5C27 18.5 29.125 17.625 30.875 15.875C32.625 14.125 33.5 12 33.5 9.5C33.5 7 32.625 4.875 30.875 3.125C29.125 1.375 27 0.5 24.5 0.5H9.5C7 0.5 4.875 1.375 3.125 3.125C1.375 4.875 0.5 7 0.5 9.5C0.5 12 1.375 14.125 3.125 15.875C4.875 17.625 7 18.5 9.5 18.5H24.5ZM24.5 14C23.25 14 22.1875 13.5625 21.3125 12.6875C20.4375 11.8125 20 10.75 20 9.5C20 8.25 20.4375 7.1875 21.3125 6.3125C22.1875 5.4375 23.25 5 24.5 5C25.75 5 26.8125 5.4375 27.6875 6.3125C28.5625 7.1875 29 8.25 29 9.5C29 10.75 28.5625 11.8125 27.6875 12.6875C26.8125 13.5625 25.75 14 24.5 14Z"
                    fill="#2626EA"
                  />
                </svg>
                <h3 className="font-bold text-xl text-secondary">
                  Campaign{" "}
                  <span className="text-xl font-bold text-secondary">
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
                            Campaign
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
                            No. of Documents
                          </span>
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
                      {resultSets && resultSets ? (
                        resultSets.map((item) => (
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
                              {item?.campaign?.campaignName}
                            </td>
                            <td className="   px-6 py-4 text-lg font-normal text-secondary whitespace-nowrap capitalize text-left">
                              {item?.data?.length}
                            </td>

                            <td className="flex gap-6 px-6 py-4 text-sm font-medium text-right whitespace-nowrap items-center">
                              <svg
                                onClick={(e) => {
                                  setCampaignData(item);
                                  setIsActive(2);
                                }}
                                className="cursor-pointer"
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11 14H10V10H9M10 6H10.01M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                  stroke="#091E42"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <div className="w-full flex flex-col fixed items-center justify-center mt-20">
                          <p className="text-lg">There are no Documents</p>
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
    </div>
  ) : (
    <CampaignDocs
      campaignData={campaignData}
      setIsActive={setIsActive}
      isActive={isActive}
    />
  );
};

export default DiligenceCampaignList;
