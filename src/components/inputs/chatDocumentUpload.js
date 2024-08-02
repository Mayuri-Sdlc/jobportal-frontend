import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { apiPOST } from "utils/apiHelper";
import { ReactComponent as PdfIcon } from "../../images/pdfIcon.svg";
import { ReactComponent as PptIcon } from "../../images/pptIcon.svg";
const ChatDocumentUpload = (props) => {
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
    props.setRemoveDoc(false);
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("accepted files--------xzxzv-", acceptedFiles);
    setAccepted(acceptedFiles);
    if (acceptedFiles.length > 0) {
      setLoading(true);

      uploadphototoserver(acceptedFiles[0]);
    }
  }, []);

  useEffect(() => {
    if (finalUrl?.length > 0) {
      props.fileChange(finalUrl);
    }
  }, [finalUrl]);

  useEffect(() => {
    if (props?.removeDoc) {
      console.log("removeDoc called");
      removeFile();
    }
  }, [props?.removeDoc]);

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
      //isUploading(false);
      if (xhr.readyState == 4) {
        let fileUrl = url.split("?")[0];
        //onUploadImage(fileUrl);
        setFinalUrl(fileUrl);

        console.log(" file success upload ********************* ", fileUrl);
      } else {
        console.log("Could not upload pdf please try again");
      }
    };
    xhr.onerror = function (error) {
      //setUploading(false);
      setLoading(false);
      console.log("Could not upload pdf please try again", error);
    };
    xhr.send(fileObj);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [],
      "application/vnd.ms-powerpoint": [],
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
        [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [],
    },
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
          className="  text-[15px] font-semibold text-black "
        >
          {props.label}{" "}
          {!props.optional ? <span className="text-red">*</span> : null}
        </label>

        <label className=" text-[15px]  text-inputBorder ">
          {props.label2}
        </label>
      </div>

      {finalUrl?.length === 0 ? (
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
            <div className="text-gray-500">
              <p>Drop the files here ...</p>
              <em>(Only *.pdf files will be accepted)</em>
            </div>
          ) : !loading ? (
            <p>Drag & Drop your files to upload your files</p>
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
          {accepted && (
            <div>
              {/* <img className='object-fill h-[100px]  place-self-center flex' src={finalUrl}
           alt="PDF file">
          </img> */}

              <div className="flex gap-2">
                <div className="w-6 h-6">
                  {props?.value
                    .substring(props?.value.lastIndexOf(".") + 1)
                    .toLowerCase() === "pdf" ? (
                    <PdfIcon />
                  ) : (
                    <PptIcon />
                  )}
                </div>
                <span>{props?.value?.split("/")?.pop()}</span>
              </div>

              <AiOutlineCloseCircle
                onClick={(e) => {
                  if (!props.disabled) {
                    removeFile(accepted[0]);
                  }
                }}
                className="absolute cursor-pointer top-2 right-10 w-5 h-5 text-red ml-3"
              />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ChatDocumentUpload;
