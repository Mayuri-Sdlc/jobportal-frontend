import { CgAttachment } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { API_URL, apiPOST } from "utils/apiHelper";
import axios from "axios";
const FilePickInput = (props) => {
  let privateDocs = [
    "investment Proof",
    "Message > Document",
    "Message > images",
    "Campaign Chat Document",
    "Campaign Chat images",
    "Campaign uploaded Document",
    "Syndicate Document",
    "Message > Document",
    "Message > images",
    "Debt information Document",
    "Financial Document",
    "Idea Document",
    "Funding History Document",
    "Supporting Document / Soft Commitment Document",
    "Document",
    "Upload Document from Campaign",
    "Campaign investment document",
    "investor > portfolio Document",
    "investor  > Syndicate > investment Document",
    "investor > KYB/ KYC document",
    "Campaign >Bank Document",
    "Campaign >Cap Table Document",
    "Idea Document",
    "Documents",
    "Funding History Document",
    "Soft Commitment Document",
    "Startups > KYB / KYC document",
    "Due Diligence Document",
    "Investment  > Proof of investment",
    "KYB and KYB Document Tab",
    "Support Ticket Document > Comment > Document and Images",
    "Individual Investor  > Questionnaire Document",
  ];

  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");

  const uploadphototoserver = async (file) => {
    console.log("file to upload ", file);
    var payload = {
      key: "uploads/" + new Date().getTime() + file?.name,
      content: file?.type,
    };

    const data = await apiPOST("/v1/upload-file", payload);
    if (data && data?.error) return;
    console.log("data ", JSON.stringify(data, null, 4));
    var url = data?.data?.data;
    console.log("uploadImage success ********************* ", data?.data?.data);
    const fileObj = file;

    const handleProgress = (evt) => {
      let p = `${evt?.type}: ${evt?.loaded} bytes transferred\n`;
      var progress = Math.ceil((evt?.loaded / evt?.total) * 100);
      setUploadProgress(progress);
      console.log("uploadProgress:-----------", progress);
    };

    setLoading(true);
    //isUploading(true);
    setUploadProgress(0);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.setRequestHeader("x-amz-acl", "public-read");
    xhr.setRequestHeader("Caches", false);
    xhr.setRequestHeader("Content-Type", file?.type);
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.onload = function () {
      setLoading(false);
      //isUploading(false);
      if (xhr?.readyState == 4) {
        let fileUrl = url?.split("?")[0];
        //onUploadImage(fileUrl);
        setFinalUrl(fileUrl);

        console.log(" file success upload ********************* ", fileUrl);
      } else {
        console.log("Could not upload image please try again");
      }
    };
    xhr.onerror = function (error) {
      //setUploading(false);
      setLoading(false);
      console.log("Could not upload image please try again", error);
    };
    xhr.send(fileObj);
  };

  const uploadphototoserverPrivate = async (file) => {
    setLoading(true);

    var payload = {
      key: "uploads/" + new Date().getTime() + file?.name,
      content: file?.type,
      file: file,
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("key", "uploads/" + new Date().getTime() + file?.name);
    formData.append("content", file?.type);
    // Define the request config, including the URL and method
    const config = {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent?.loaded * 100) / progressEvent?.total
        );
        //setUploadProgress(progress);
        console.log("progress------------", progress);
      },
    };

    await axios
      .post(`${API_URL}/v1/private-upload-file`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent?.loaded / progressEvent?.total) * 50;
          setUploadProgress(progress);
          console.log("progress-----------", progress);
        },
        onDownloadProgress: (progressEvent) => {
          const progress =
            50 + (progressEvent?.loaded / progressEvent?.total) * 50;
          console.log(progress);
          //setProgress(progress);
        },
      })
      .then((response) => {
        console.log("response---------------", response);
        if (response?.data?.status == 200) {
          setFinalUrl(response?.data?.data);
          setLoading(false);
          setUploadProgress(0);
        }
      });
  };

  useEffect(() => {
    if (finalUrl?.length > 0) {
      props?.fileChange(finalUrl);
    }
  }, [finalUrl]);

  return (
    <div className="relative  mt-[2px] ">
      <div className="flex justify-between  ">
        <label
          id={"lbl" + props?.id}
          for="floating_outlined"
          className=" text-txt font-semibold text-black "
        >
          {props?.label}
        </label>
        {props.optional ? (
          <p className=" text-txt  text-inputBorder ">Optional</p>
        ) : null}
      </div>

      {props?.value?.length > 0 ? (
        <input
          disabled={props?.disabled}
          type="text"
          accept={props?.accept}
          name={props?.id}
          id={props?.id}
          className={`file:hidden  block text-[15px] rounded-[6px] px-2.5 pb-2.5 pt-3 w-full pr-10 h-[45px] text-gray-900  truncate border ${
            props?.error ? "border-[red]" : "border-inputBorder "
          } appearance-none   focus:outline-none focus:ring-0 peer ${
            props?.disabled ? "bg-lightgray" : "bg-transparent"
          } `}
          placeholder={`${props?.label}`}
          value={props?.value}
          onChange={() => {}}
        />
      ) : (
        <input
          disabled={props?.disabled}
          type="file"
          accept={props?.accept}
          name={props?.id}
          id={props?.id}
          className={`file:hidden  block  rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[45px] text-txt text-gray-900   border ${
            props?.error ? "border-[red]" : "border-inputBorder "
          } appearance-none   focus:outline-none focus:ring-0 peer ${
            props?.disabled ? "bg-lightgray" : "bg-transparent"
          } `}
          placeholder={`${props?.label}`}
          value={props?.value}
          onChange={(e) => {
            if (!privateDocs.includes(props?.type)) {
              uploadphototoserver(e.target.files[0]);
            } else {
              uploadphototoserverPrivate(e?.target?.files[0]);
            }
            console.log("profile pic choose", e?.target?.files[0]);
          }}
        />
      )}
      {props?.value?.length > 0 ? (
        <RiDeleteBinLine
          onClick={(e) => {
            e.preventDefault();
            if (!props?.disabled) {
              props?.fileChange("");
            }
          }}
          //onChange={props.onChange}
          style={{ color: "red" }}
          className={`absolute ${
            props.label === "" ? "top-2" : "top-8"
          }  h-7 w-5 right-2 ${props?.error ? "fill-[red]" : ""}`}
        />
      ) : !loading ? (
        <CgAttachment
          style={{ color: "#A6AEBB" }}
          className={`absolute top-7 h-8 w-6 right-2 ${
            props?.error ? "fill-[red]" : "fill-red"
          }`}
        />
      ) : (
        <div>
          <div className={`absolute top-7 h-8 w-6 right-2 `} role="status">
            <svg
              aria-hidden="true"
              class="w-6 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilePickInput;
