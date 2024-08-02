import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { API_URL, apiPOST } from "utils/apiHelper";
import { ReactComponent as PdfIcon } from "../../images/pdfIcon.svg";
import { ReactComponent as PptIcon } from "../../images/pptIcon.svg";
import { toast } from "react-toastify";
import axios from "axios";

const PDFUploadDropzone = (props) => {
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
  const [pdfURL, setPdfUrl] = useState({});
  const [accepted, setAccepted] = useState([]);
  const [loading, setLoading] = useState(false);

  const [finalUrl, setFinalUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const removeFile = (file) => {
    const newFiles = [...accepted];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFinalUrl("");
    setAccepted(newFiles);
    // callChange()
    props.fileChange("");
  };

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      console.log("file rejection-------", fileRejections);

      if (fileRejections[0].file.size > 15 * 1024 * 1024) {
        toast.error("Document Should not exceed 15 MB");

        return;
      } else {
      }
      return;
    }
    // Do something with the files
    console.log("accepted files--------xzxzv-", acceptedFiles);
    setAccepted(acceptedFiles);
    if (acceptedFiles.length > 0) {
      setLoading(true);

      if (!privateDocs.includes(props.type)) {
        uploadphototoserver(acceptedFiles[0]);
      } else {
        uploadphototoserverPrivate(acceptedFiles[0]);
      }
    }
  }, []);

  useEffect(() => {
    if (finalUrl?.length > 0) {
      props.fileChange(finalUrl);
    }
  }, [finalUrl]);

  const uploadphototoserver = async (file) => {
    setSelectedFile(file);

    var payload = {
      key: "uploads/" + new Date().getTime() + file.name,
      content: file.type,
    };

    const data = await apiPOST("/v1/upload-file", payload);
    if (data && data.error) return;
    console.log("data ", JSON.stringify(data, null, 4));
    var url = data.data.data;
    console.log("uploadImage success ********************* ", data.data.data);
    const fileObj = file;

    const handleProgress = (evt) => {
      let p = `${evt.type}: ${evt.loaded} bytes transferred\n`;
      var progress = Math.ceil((evt.loaded / evt.total) * 100);
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
    xhr.setRequestHeader("Content-Type", file.type);
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.onload = function () {
      setLoading(false);

      if (xhr.readyState == 4) {
        let fileUrl = url.split("?")[0];

        setFinalUrl(fileUrl);

        console.log(" file success upload ********************* ", fileUrl);
      } else {
        console.log("Could not upload pdf please try again");
      }
    };
    xhr.onerror = function (error) {
      setLoading(false);
      console.log("Could not upload pdf please try again", error);
    };
    xhr.send(fileObj);
  };

  const uploadphototoserverPrivate = async (file) => {
    setLoading(true);
    setSelectedFile(file);

    var payload = {
      key: "uploads/" + new Date().getTime() + file.name,
      content: file.type,
      file: file,
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("key", "uploads/" + new Date().getTime() + file.name);
    formData.append("content", file.type);
    // Define the request config, including the URL and method
    const config = {
      onUploadProgress: (progressEvent) => {
        const progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );

        console.log("progress------------", progress);
      },
    };

    await axios
      .post(`${API_URL}/v1/private-upload-file`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 50;
          setUploadProgress(progress);
          console.log("progress-----------", progress);
        },
        onDownloadProgress: (progressEvent) => {
          const progress =
            50 + (progressEvent.loaded / progressEvent.total) * 50;
          console.log(progress);
          //setProgress(progress);
        },
      })
      .then((response) => {
        console.log("response---------------", response);
        if (response.data.status == 200) {
          setFinalUrl(response.data.data);
          setLoading(false);
          setUploadProgress(0);
        }
      });
  };

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "application/pdf": [],
        "application/vnd.ms-powerpoint": [],
        "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
          [],
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          [],
      },
      maxSize: 15 * 1024 * 1024,
    });

  useEffect(() => {
    setFinalUrl(props.value);
  }, [props.value]);

  return (
    <div className="flex flex-col">
      <div className="flex flex-1 flex-row w-full  justify-between">
        <label
          id={`lbl${props.id}`}
          for={props.id}
          className="  text-[15px] flex-1  font-semibold text-black "
        >
          {props.label}{" "}
          {!props.optional ? <span className="text-red">*</span> : null}
        </label>

        <label className="  text-[15px] flex-1 text-right  text-inputBorder ">
          {props.label2}
        </label>
      </div>

      {finalUrl?.length === 0 ? (
        <div
          className={`flex justify-center items-center rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[124px] text-txt text-gray-900 ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none   focus:outline-none focus:ring-0 peer`}
          {...getRootProps()}
        >
          <input {...getInputProps()} />
          {loading ? (
            <div className="flex flex-1 flex-col justify-center items-center">
              <div class="w-[70%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-center text-subtxt">
                Uploading {uploadProgress}%
              </p>
            </div>
          ) : null}
          {isDragActive && !loading ? (
            <div className="text-gray-500">
              <p>Drop the files here ...</p>
              <em>(Only *.pdf files will be accepted)</em>
            </div>
          ) : !loading ? (
            <p>Drag & Drop Your Files To Upload Your Files</p>
          ) : null}
        </div>
      ) : null}

      {props?.value?.length > 0 ? (
        <div
          className={`flex relative content-center justify-center items-center rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[124px] text-txt text-gray-900 ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        >
          <div className="flex sm:w-[100%] justify-center items-center w-[80%]  gap-2">
            <div className="w-6 h-6">
              {props?.value
                .substring(props?.value.lastIndexOf(".") + 1)
                .toLowerCase() === "pdf" ? (
                <PdfIcon />
              ) : (
                <PptIcon />
              )}
            </div>
            <span className="truncate">{props?.value?.split("/")?.pop()}</span>
          </div>

          <AiOutlineCloseCircle
            onClick={(e) => {
              if (!props.disabled) {
                removeFile(accepted[0]);
              }
            }}
            className="absolute top-2 right-10 w-5 h-5 text-red ml-3"
          />
        </div>
      ) : null}
    </div>
  );
};

export default PDFUploadDropzone;
