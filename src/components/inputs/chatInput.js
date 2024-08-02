import { useEffect, useRef, useState } from "react";
import { useFilePicker } from "use-file-picker";
import { ReactComponent as FilePicIcon } from "images/chatRoom/fileUploadPic.svg";
import { ReactComponent as SendIcon } from "images/chatRoom/sendIcon.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ReactComponent as PdfIcon } from "../../images/pdfIcon.svg";
import { ReactComponent as PptIcon } from "../../images/pptIcon.svg";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { apiPOST } from "utils/apiHelper";
import Loading from "../loading/loading";
const ChatInput = (props) => {
  const [openFileSelector, { filesContent, loading, errors, plainFiles }] =
    useFilePicker({
      multiple: true,
      readAs: "DataURL", // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
      accept: ".ics,.pdf,.png",
      accept: [".json", ".pdf", ".png"],
      limitFilesConfig: { min: 2, max: 3 },
    });
  const [inputStr, setInputStr] = useState("");
  const [fileName, setFileName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [removeImage, setRemoveImage] = useState(false);
  const [removeDoc, setRemoveDoc] = useState(false);
  const [accepted, setAccepted] = useState(null);
  const [showloading, setShowLoading] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [fileAttachModal, setFileAttachModal] = useState(false);
  const [showUploadImage, setShowUploadImage] = useState(false);
  const [showDocument, setShowDocument] = useState(false);
  const [docUrl, setDocUrl] = useState("");
  const [finalUrlImage, setFinalUrlImage] = useState("");
  const [finalUrlDocs, setFinalUrlDocs] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [docUrlLoading, setDocUrlLoading] = useState(false);
  const uploadRef = useRef();

  const onDropImage = useCallback((acceptedFiles) => {
    // Do something with the files
    setAccepted(acceptedFiles[0]);
    if (acceptedFiles.length > 0) {
      setShowLoading(true);
      uploadphototoserver(acceptedFiles[0]);
    }
  }, []);

  const onDropDocs = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log("accepted files--------xzxzv-", acceptedFiles);
    setAccepted(acceptedFiles);
    if (acceptedFiles.length > 0) {
      setShowLoading(true);
      uploadDocsserver(acceptedFiles[0]);
    }
  }, []);

  const acceptImagePayload = {
    "image/*": [],
  };

  const acceptDocsPayload = {
    "application/pdf": [],
    "application/vnd.ms-powerpoint": [],
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
      [],
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      [],
  };

  const {
    getRootProps: getRootPropsImage,
    getInputProps: getInputPropsImage,
    isDragActive: isDragActive1,
  } = useDropzone({
    onDrop: onDropImage,
    accept: acceptImagePayload,
  });

  const {
    getRootProps: getRootPropsDocs,
    getInputProps: getInputPropsDocs,
    isDragActive: isDragActive2,
  } = useDropzone({
    onDrop: onDropDocs,
    accept: acceptDocsPayload,
  });

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

    setShowLoading(true);
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
      setShowLoading(false);
      //isUploading(false);

      if (xhr.readyState == 4) {
        let fileUrl = url.split("?")[0];
        setFinalUrlImage(fileUrl);
        //onUploadImage(fileUrl);
        console.log(" file success upload ********************* ", fileUrl);
      } else {
        console.log("Could not upload image please try again");
      }
    };
    xhr.onerror = function (error) {
      //setUploading(false);

      console.log("Could not upload image please try again", error);
    };
    xhr.send(fileObj);
  };

  const uploadDocsserver = async (file) => {
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

    setShowLoading(true);
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
      setShowLoading(false);
      //isUploading(false);

      if (xhr.readyState == 4) {
        let fileUrl = url.split("?")[0];
        //onUploadImage(fileUrl);
        setFinalUrlDocs(fileUrl);

        console.log(" file success upload ********************* ", fileUrl);
      } else {
        console.log("Could not upload pdf please try again");
      }
    };
    xhr.onerror = function (error) {
      //setUploading(false);
      setShowLoading(false);
      console.log("Could not upload pdf please try again", error);
    };
    xhr.send(fileObj);
  };

  const removeFile = () => {
    console.log("file to remove :");
    setFinalUrlImage("");
    setFinalUrlDocs("");
    setAccepted(null);
    imagefileChange("");
    docsFileChange("");
    setRemoveImage(false);
    setRemoveDoc(false);
  };

  const imagefileChange = (url) => {
    // console.log("e----------", url);
    setImageURL(url);
  };

  const docsFileChange = (url) => {
    setDocUrl(url);
    console.log("url----------", url);
  };

  useEffect(() => {
    plainFiles.map((file) => setFileName(file.name));
  }, [loading]);

  useEffect(() => {
    if (imageURL) {
      props.setMsg({ ...props.value, fileUrl: imageURL, type: "image" });
    } else {
      props.setMsg({ ...props.value, fileUrl: "", type: "text" });
    }
  }, [imageURL]);

  useEffect(() => {
    if (docUrl) {
      props.setMsg({ ...props.value, fileUrl: docUrl, type: "document" });
    }
  }, [docUrl]);

  useEffect(() => {
    // add event listener to document to detect clicks outside of dropdown
    const handleDocumentClick = (event) => {
      if (uploadRef.current && !uploadRef.current.contains(event.target)) {
        setFileAttachModal(false);
      }
    };
    document.addEventListener("click", handleDocumentClick);

    // cleanup event listener
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    if (removeImage) {
      console.log("removeImg called");
      removeFile();
    }
  }, [removeImage]);

  useEffect(() => {
    if (removeDoc) {
      console.log("removeImg called");
      removeFile();
    }
  }, [removeDoc]);

  useEffect(() => {
    if (props?.msgSent) {
      setRemoveImage(true);
      setRemoveDoc(true);
      props?.setMsgSent(false);
    }
  }, [props?.msgSent]);

  useEffect(() => {
    if (finalUrlImage.length > 0) {
      imagefileChange(finalUrlImage);
    }
    if (finalUrlDocs.length > 0) {
      docsFileChange(finalUrlDocs);
    }
  }, [finalUrlImage, finalUrlDocs, props.loading]);

  useEffect(() => {
    setFinalUrlImage(imageURL);
  }, [imageURL]);

  useEffect(() => {
    setFinalUrlDocs(docUrl);
  }, [docUrl]);

  return (
    <div class="relative  mt-[2px]">
      <div className="flex justify-between">
        <label
          id={props.id}
          for="floating_outlined"
          className="  text-[15px]font-semibold text-black "
        >
          {props.label}
        </label>
        {props.optional ? (
          <p className="  text-[15px] text-inputBorder ">Optional</p>
        ) : null}
      </div>
      {imageURL && !showDocument ? (
        <div className="flex justify-start gap-1 border rounded-md border-inputBorder px-3 pt-5 pb-3">
          <img
            className="object-fill h-[100px] rounded-md place-self-center flex"
            src={imageURL}
            alt="image dropzone"
          ></img>
          <AiOutlineCloseCircle
            onClick={(e) => {
              setRemoveImage(true);
              console.log("removeImage");
            }}
            className="relative cursor-pointer -top-3 w-5 h-5 text-red"
          />
        </div>
      ) : null}
      {docUrl && !showUploadImage && !showloading ? (
        <div
          className={`flex relative content-center justify-center items-center rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[124px] text-txt text-gray-900 ${
            props.disabled ? "bg-lightgray" : "bg-transparent"
          }  border ${
            props.error ? "border-[red]" : "border-inputBorder "
          } appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        >
          <div>
            <div className="flex gap-2">
              <div className="w-6 h-6">
                {docUrl.substring(docUrl.lastIndexOf(".") + 1).toLowerCase() ===
                "pdf" ? (
                  <PdfIcon />
                ) : (
                  <PptIcon />
                )}
              </div>
              <span>{docUrl?.split("/")?.pop()}</span>
            </div>
            <AiOutlineCloseCircle
              onClick={(e) => {
                setRemoveDoc(true);
              }}
              className="absolute cursor-pointer top-2 right-10 w-5 h-5 text-red ml-3"
            />
          </div>
        </div>
      ) : null}
      {showloading ? (
        <div className="w-full h-20 flex justify-center items-center">
          <Loading />
        </div>
      ) : null}
      <div
        className={`relative w-full bg-[#EBEDF0] border ${
          props.error ? "border-[red]" : "border-inputBorder"
        } `}
      >
        <input
          maxLength={props.maxLength}
          type="text"
          name={props.id}
          id={props.id}
          className={`block bg-transparent   placeholder:text-lg px-2.5 pb-2.5 pt-3 w-[80%] min-h-[67px] lg:rounded-b-lg text-txt text-gray-900 pl-[75px]   "
						} appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
          placeholder={`Type Your Message`}
          value={props.value?.message}
          onChange={(e) => {
            props.setMsg({ ...props.value, message: e.target.value });
          }}
          onKeyUp={(e) => {
            if (e.keyCode === 13 && props?.id === "chat") {
              props?.sendChat();
            }
          }}
        />
        {fileAttachModal ? (
          <div className="flex flex-wrap gap-7 absolute shadow-lg py-4 px-7 rounded-lg -top-32 left-4 bg-[#f5f6f7]">
            <div
              className="flex flex-col gap-2 items-center w-20 cursor-pointer"
              {...getRootPropsDocs()}
            >
              <input {...getInputPropsDocs()} />
              <div className="w-12 h-12 bg-[#2626EA] rounded-full p-2 flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-white fill-white"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    stroke="#FFF"
                    stroke-width="2"
                    d="M14,1 L14,8 L21,8 M21,23 L3,23 L3,1 L15,1 L18,4 L21,7 L21,23 L21,23 L21,23 Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#091E42] font-semibold">Document</p>
            </div>
            <div
              className="flex flex-col gap-2 items-center w-20 cursor-pointer"
              {...getRootPropsImage()}
            >
              <input {...getInputPropsImage()} />
              <div className="w-12 h-12 bg-[#2626EA] rounded-full p-2 flex justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="white"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 18 16"
                  height="20px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 2h-1v-1c0-0.55-0.45-1-1-1h-14c-0.55 0-1 0.45-1 1v12c0 0.55 0.45 1 1 1h1v1c0 0.55 0.45 1 1 1h14c0.55 0 1-0.45 1-1v-12c0-0.55-0.45-1-1-1zM2 3v10h-0.998c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v0.998h-12c-0.55 0-1 0.45-1 1v0zM17 14.998c-0.001 0.001-0.001 0.001-0.002 0.002h-13.996c-0.001-0.001-0.001-0.001-0.002-0.002v-11.996c0.001-0.001 0.001-0.001 0.002-0.002h13.996c0.001 0.001 0.001 0.001 0.002 0.002v11.996z"></path>
                  <path d="M15 5.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5 0.672-1.5 1.5-1.5 1.5 0.672 1.5 1.5z"></path>
                  <path d="M16 14h-12v-2l3.5-6 4 5h1l3.5-3z"></path>
                </svg>
              </div>
              <p className="text-[#091E42] font-semibold">Image</p>
            </div>
          </div>
        ) : null}

        <div className=" flex place-items-center">
          <button
            ref={uploadRef}
            onClick={() => setFileAttachModal(!fileAttachModal)}
          >
            <FilePicIcon
              className={`absolute cursor-pointer  top-4 h-8 w-6 left-7 rotate-[-4] }`}
            />
          </button>

          {!props.loading ? (
            <button
              className={`absolute z-50 cursor-pointer bg-[#00008E] text-white top-2.5 rounded-md right-4 `}
              onClick={() => props.sendChat()}
            >
              <SendIcon />{" "}
            </button>
          ) : (
            <svg
              aria-hidden="true"
              class="absolute z-50 cursor-pointer top-2.5 rounded-md right-4 w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
