import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { apiPOST } from "utils/apiHelper";

const ChatSendImage = (props) => {
  const [image, setImage] = useState({});
  const [accepted, setAccepted] = useState(null);
  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");

  const removeFile = () => {
    console.log("file to remove :");
    setFinalUrl("");
    setAccepted(null);
    props.fileChange("");
    props.setRemoveImage(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setAccepted(acceptedFiles[0]);
    if (acceptedFiles.length > 0) {
      setLoading(true);
      uploadphototoserver(acceptedFiles[0]);
    }
  }, []);

  useEffect(() => {
    if (finalUrl.length > 0) {
      props.fileChange(finalUrl);
    }
  }, [finalUrl]);

  useEffect(() => {
    if (props?.removeImg) {
      console.log("removeImg called");
      removeFile();
    }
  }, [props?.removeImg]);

  const uploadphototoserver = async (file) => {
    // console.log("file to upload ", file);
    var payload = {
      key: "uploads/" + new Date().getTime() + file.name,
      content: "image/*",
    };

    const data = await apiPOST("/v1/upload-file", payload);
    if (data && data.error) return;
    // console.log("data ", JSON.stringify(data, null, 4));
    var url = data.data.data;
    const fileObj = file;

    const handleProgress = (evt) => {
      let p = `${evt.type}: ${evt.loaded} bytes transferred\n`;
      var progress = Math.ceil((evt.loaded / evt.total) * 100);
      setUploadProgress(progress);
    };

    setLoading(true);
    //isUploading(true);
    setUploadProgress(0);

    var xhr = new XMLHttpRequest();
    xhr.open("PUT", url, true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.setRequestHeader("x-amz-acl", "public-read");
    xhr.setRequestHeader("Caches", false);
    xhr.setRequestHeader("Content-Type", "image/*");
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
      "image/*": [],
    },
  });

  useEffect(() => {
    setFinalUrl(props.value);
  }, [props.value]);

  return (
    <div>
      <div className="flex flex-1 flex-row justify-between">
        <label
          id={`lbl${props.id}`}
          for={props.id}
          className="  text-[15px] font-semibold text-black "
        ></label>
      </div>

      {finalUrl.length == 0 ? (
        <div
          className={`flex justify-center items-center rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[124px] text-txt text-gray-900 ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
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
            <div className="text-inputBorder">
              <p>Drop the image here ...</p>
            </div>
          ) : !loading ? (
            <div>
              {props?.id === "chatImage" ? (
                <div className="text-inputBorder">
                  <p className="text-center">
                    Drag & Drop your image to upload your image
                  </p>
                  <p className="text-center">
                    You can also click here to choose manually.
                  </p>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      ) : null}

      {props.value.length > 0 ? (
        <div
          className={`flex relative content-center justify-center items-center rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[124px] text-txt text-gray-900 ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        >
          {accepted && (
            <div>
              <img
                className="object-fill h-[100px]  place-self-center flex"
                src={finalUrl}
                alt="image dropzone"
              ></img>
              <AiOutlineCloseCircle
                onClick={(e) => {
                  if (!props.disabled) {
                    removeFile();
                  }
                }}
                className="absolute top-2 right-10 w-5 h-5 text-red ml-3"
              />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ChatSendImage;
