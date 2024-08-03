import { Link, useHistory } from "react-router-dom";
import { Header, Sidebar } from "../../components";
import React, { useEffect, useState } from "react";
import { apiPOST } from "../../utils/apiHelper";
import Navbar from "../../components/Navbar/Navbar";
import FilePickInput from "../../components/filepickInput";
const Home = () => {
    const history= useHistory();

  const [events, setEvent] = useState([]);
  const [pageLoading, setPageLoading] = useState(false);

  const getList = async () => {
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

    const res = await apiPOST(`/events/listforusers`, payload);

    console.log("res get list..", res.data.data);
    setEvent(res?.data?.data);
    //setTotal(res?.data?.data?.data?.totalResults);
    setPageLoading(false);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col m-10">
        <p className="text-center text-[60px] mt-10 font-bold">
          Find your dream job now
        </p>

        <input
          className=" p-2 self-center  mt-6 h-10 w-[540px] border rounded border-[#dcdcdc]"
          placeholder="Seach Jobs, companies, Events........."
        />

        <p className="mt-5 text-[30px] font-bold">Events</p>

        <div className="flex flex-row flex-wrap">
          {events.map((item) => {
            return <div className="h-[300px] m-2 w-[220px] border border-[#dcdcdc]">
                <div className="flex flex-col">
                    
                <div className="flex  mt-10 flex-col items-center justify-center">
                    <img
                    className="text-center  w-24 h-24 rounded-full"
                     src={item?.company?.logo}/>
                     
                     <div className="w-[90%] h-2 border-b border-b-1" />
                      <p className="mt-7 text-[16px] font-bold">{item?.company?.name}</p>
                     <p className="mt-1 text-[16px] font-bold">{item?.name}</p>

                     <div
                     onClick={()=>{
                        history.push(`/eventdetails/${item?.id}`);
                     }}
                     className="border border-[#dcdcdc] rounded w-32 mt-6 h-9 flex flex-col justify-center items-center">
                    <p>View Jobs</p>
                     </div>
                     </div>
                   </div> 
                
            </div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
