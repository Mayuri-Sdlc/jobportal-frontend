import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { apiPOST } from "utils/apiHelper";
const DropZoneWebinarImages = (props) => {
  console.log("EEEEEEE", props.value.endsWith(".mp4"));
  const [accepted, setAccepted] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  console.log(":::::::", finalUrl);
  const [uploadProgress, setUploadProgress] = useState("");
  const [VideoShow, setVideoShow] = useState(
    props.value.endsWith(".mp4") ? true : false
  );
  console.log("videoShow", VideoShow);
  const removeFile = (file) => {
    const newFiles = [...accepted];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFinalUrl("");
    setAccepted(newFiles);
    // callChange()
    props.fileChange("");
  };

  const onDrop = useCallback(async (acceptedFiles, fileRejections) => {
    if (fileRejections.length > 0) {
      if (fileRejections[0].file.size > 50 * 1024 * 1024) {
        props.setError1();
        return;
      } else {
        props.setError2();
      }
      return;
    }

    // Do something with the files

    if (acceptedFiles.length > 0) {
      if (props.setError2()) {
        props.setError2();
      }
      const file = acceptedFiles[0];

      setLoading(true);
      console.log("KKKKKKK", file.size);
      setAccepted(acceptedFiles);
      uploadphototoserver(acceptedFiles[0]);
      if (props.setError2()) {
        props.setError2();
      }
      console.log("less than 3 mb");
    }
  }, []);

  useEffect(() => {
    if (finalUrl.length > 0) {
      props.fileChange(finalUrl);
    }
  }, [finalUrl]);

  const getFileContentType = (fileName) => {
    // Check the file name or extension to determine the content type.
    if (fileName.endsWith(".png") || fileName.endsWith(".jpg")) {
      return "image/png";
    } else if (fileName.endsWith(".mp4")) {
      setVideoShow(true);
      return "video/mp4";
    } else {
      // Default content type if it's not recognized
      return "application/octet-stream";
    }
  };

  const uploadphototoserver = async (file) => {
    console.log("file to upload ", file);
    var payload = {
      key: "uploads/" + new Date().getTime() + file.name,
      content: getFileContentType(file.name),
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
    xhr.setRequestHeader("Content-Type", "image/png");
    xhr.upload.addEventListener("progress", handleProgress, false);
    xhr.onload = function () {
      setLoading(false);
      //isUploading(false);
      if (xhr.readyState == 4) {
        let fileUrl = url.split("?")[0];
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,

    accept: {
      "image/jpeg": [],
      "image/png": [],
      "video/mp4": [],
    },
    maxSize: 50 * 1024 * 1024, // 3 MB in bytes
  });

  useEffect(() => {
    setFinalUrl(props.value);
  }, [props.value]);
  return (
    <div>
      {finalUrl.length == 0 ? (
        <div
          className={`flex justify-center items-center rounded-md px-2.5 pb-2.5 pt-3 w-full  h-[170px] text-txt text-gray-900 ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
          {...getRootProps()}>
          <input {...getInputProps()} />
          {loading ? (
            <div className="flex flex-1 flex-col justify-center items-center">
              <div class="w-[70%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div
                  class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                  style={{ width: `${uploadProgress}%` }}></div>
              </div>
              <p className="text-center text-subtxt">
                Uploading {uploadProgress}%
              </p>
            </div>
          ) : null}
          {isDragActive && !loading ? (
            <div className="text-inputBorder">
              <p>Drop the files here ...</p>
              <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
          ) : !loading ? (
            <div>
              {props?.id === "bannerImage" ? (
                <div className="text-inputBorder">
                  <p className="text-center">
                    Drag & Drop your files to upload your files
                  </p>
                  <p className="text-center">
                    Banner Should have 700 px width and 150 px height
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {props.value.length > 0 ? (
        <div>
          {accepted && (
            <div className="relative">
              {VideoShow ? (
                <video
                  className={` w-full h-[170px] object-contain  rounded-md text-txt text-gray-900 ${
                    props.disabled ? "bg-lightgray" : "bg-transparent"
                  }  border ${
                    props.error ? "border-[red]" : "border-inputBorder "
                  } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
                  controls>
                  <source
                    src={props.value.endsWith(".mp4") ? props.value : finalUrl}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  className={` w-full h-[170px] object-cover  rounded-md text-txt text-gray-900 ${
                    props.disabled ? "bg-lightgray" : "bg-transparent"
                  }  border ${
                    props.error ? "border-[red]" : "border-inputBorder "
                  } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
                  src={finalUrl}
                  alt="loading..."></img>
              )}
              {props?.accessUsers !== "admin" ? (
                <div
                  onClick={(e) => {
                    if (!props.disabled) {
                      removeFile(accepted[0]);
                    }
                  }}
                  className="absolute bottom-0 border bg-[#000] opacity-50 rounded-tl-xl  right-0 w-[148px] items-center justify-center cursor-pointer flex  h-[50px] text-white text[18px]">
                  Change Picture
                </div>
              ) : props?.status ? (
                <div
                  className={`flex  gap-2  absolute bottom-0   right-0 items-center justify-center     font-semibold w-fit text-lg px-3
                  ${
                    props?.status === "rejected"
                      ? "text-[#D65341] bg-[#FDEDEB] border  border-[#F6B3AD]"
                      : ""
                  }
                  ${
                    props?.status === "pending" ||
                    props?.status === "updateMeetLink" ||
                    props?.status === "updateMeetTime"
                      ? "text-[#F2C046] bg-[#FFF9E8] border  border-[#FEE4A0]"
                      : ""
                  }
                  ${
                    props?.status == "approved"
                      ? "text-[#539F56] bg-[#EAF6ED] border  border-[#AAD8B6]"
                      : ""
                  }
                   ${
                     props?.status == "completed"
                       ? "text-[#539F56] bg-[#EAF6ED] border  border-[#AAD8B6]"
                       : ""
                   }
                    `}>
                  <div
                    className={`h-2 w-2 ${
                      props?.status === "rejected"
                        ? "bg-[#D65341] rounded-full"
                        : ""
                    }
                    ${
                      props?.status === "pending" ||
                      props?.status === "updateMeetLink" ||
                      props?.status === "updateMeetTime"
                        ? "bg-[#F2C046] rounded-full"
                        : ""
                    }
                    ${
                      props?.status === "approved"
                        ? "bg-[#539F56] rounded-full"
                        : ""
                    }
                                                          ${
                                                            props?.status ===
                                                            "completed"
                                                              ? "bg-[#539F56] rounded-full"
                                                              : ""
                                                          }`}></div>
                  {props?.status === "pending" ||
                  props?.status === "updateMeetLink" ||
                  props?.status === "updateMeetTime" ? (
                    <p>REVIEWING</p>
                  ) : null}
                  {props?.status === "approved" ? <p>APPROVED</p> : null}
                  {props?.status === "rejected" ? <p>REJECTED</p> : null}
                  {props?.status === "completed" ? <p>COMPLETED</p> : null}
                </div>
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default DropZoneWebinarImages;
