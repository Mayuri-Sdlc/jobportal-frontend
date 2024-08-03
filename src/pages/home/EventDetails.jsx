import { Link, useParams } from "react-router-dom";
import { Header, Sidebar } from "../../components";
import React, { useEffect, useState } from "react";
import { apiPOST } from "../../utils/apiHelper";
import Navbar from "../../components/Navbar/Navbar";
import moment from "moment";
import { toast } from 'react-toastify';
import Button from "../../components/buttons/button";

const EventDetails = () => {
  
  const param = useParams();
  const [details, setDetails] = useState(null);
  const [jobs, setJobs] = useState([]);

  const [pageLoading, setPageLoading] = useState(false);

  const getList = async () => {
    setPageLoading(true);
    //  console.log("current page=---", currentPage);

    const payload = {
      eventId: param?.id,
    };

    const res = await apiPOST(`/jobpost/getbyevent`, payload);

    console.log("res get list..", res.data.data);
    setJobs(res?.data?.data);
    //setTotal(res?.data?.data?.data?.totalResults);
    setPageLoading(false);
  };

  const addJobPost= async(id)=>{
    
    console.log("add job post-----------");
    const payload = {
        jobPostId:id
      }

    const res = await apiPOST(`/jobapply/add`,payload);

    console.log("res reposne to add job post..", res.data.data);
    if (res?.data?.status==200) {
        toast.success(res?.data?.message);
      //  window.location.href="/"
      } else {
        toast.error(res?.data?.message);
      }




  }

  const getEvent = async () => {
    setPageLoading(true);
    //  console.log("current page=---", currentPage);

    const payload = {
      eventId: param?.id,
    };

    const res = await apiPOST(`/events/getbyid/${param?.id}`);

    console.log("res get list..", res.data.data);
    setDetails(res?.data?.data);
    //setTotal(res?.data?.data?.data?.totalResults);
    setPageLoading(false);
  };

  useEffect(() => {
    console.log("params----", param);
    if (param?.id) {
      getList();
      getEvent();
    }
  }, [param]);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col m-10">
        
        <p className="mt-5 text-[30px] font-bold">Event: {details?.name}</p>

        <div className="mt-10 flex flex-row">
          <div className="w-[10%] ">
            <img
              className="text-center  w-24 h-24 rounded-full"
              src={details?.company?.logo}
            />
          </div>

          <div className="w-[80%]">
          <p className="text-[20px] font-bold"><b>{details?.name}</b></p>
          <p className="text-[20px] mt-3 font-bold"><b>{details?.company?.name}</b></p>
            <p className="mt-3">{details?.desc}</p>
            <p className="mt-5"><b>Date Time: {moment(details?.datetime).format("DD/MM/YYYY HH:mm a")}</b></p>
          </div>
        </div>
     
        <p className="mt-5 text-[30px] font-bold">JOB POSTS :</p>
        {jobs.map((item) => {
            return (
        <div className="flex flex-col mt-10 border-b p-3 border-[#dcdcdc]">
            <div className="flex flex-row" >
            <div className="w-[10%] ">
            <img
              className="text-center  w-24 h-24 rounded-full"
              src={item?.company?.logo}
            />
          </div>

          <div className="w-[80%]">
          <p className="text-[20px] font-bold"><b>{item?.name}</b></p>
          <p className="text-[20px] mt-3 font-bold"><b>{item?.company?.name}</b></p>
            <p className="mt-3">{item?.desc}</p>
            <p className="mt-5"><b>Skills : {item?.skills}</b></p>

            <Button className="mt-5" title="Apply" onClick={()=>{addJobPost(item?.id)}}/>
          
          </div>
           
            </div>
          
        </div>)})}
      </div>
    </div>
  );
};
export default EventDetails;
