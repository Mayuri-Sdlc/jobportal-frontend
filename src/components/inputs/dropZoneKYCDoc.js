import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast, ToastContainer } from "react-toastify";
import { API_URL} from "utils/apiHelper";
import axios from "axios";
const DropZoneKYCDoc = (props) => {
  const [image, setImage] = useState({});
  const [accepted, setAccepted] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");
  const [path, setPath] = useState("");

  const openFile = () => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      setPath(dataURL);
    };
  };

  const removeFile = (file) => {
    const newFiles = [...accepted];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFinalUrl("");
    setAccepted(newFiles);
    // callChange()
    props.fileChange("");
  };

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    // console.log("accepted files---------", acceptedFiles)
    setAccepted(acceptedFiles);
    setPath(URL.createObjectURL(acceptedFiles[0]));
    if (acceptedFiles.length > 0) {
      setLoading(true);
      if (acceptedFiles[0]?.size < 32000) {
        setLoading(false);
        toast.error("Document size should be minimum 32KB.");
      } else if (acceptedFiles[0]?.size > 10485760) {
        setLoading(false);
        toast.error("Document size should be maximum 10MB.");
      } else {
        console.log("file type", acceptedFiles[0].type, accepted);
        uploadphototoserver(acceptedFiles[0]);
      }
    }
  }, []);

  useEffect(() => {
    if (finalUrl.length > 0) {
      props.fileChange(finalUrl);
    }
  }, [finalUrl]);

  const uploadphototoserver = async (file) => {
    console.log("file to upload ", file);
    var payload = {
      key: "uploads/" + new Date().getTime() + file.name,
      content: "image/png",
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "application/pdf": [],
    },
  });

  useEffect(() => {
    setFinalUrl(props.value);
  }, [props.value]);

  return (
    <div>
      <ToastContainer />
      <label
        id={`lbl${props.id}`}
        for={props.id}
        className="text-[15px] font-semibold text-black "
      >
        {props.label}
      </label>
      {finalUrl.length == 0 ? (
        <div
          className={`flex justify-center cursor-pointer items-center rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[124px] text-txt text-gray-900 ${
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
            <div>
              <p>Drop The Files Here ...</p>
              <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
          ) : !loading ? (
            <p>Drag & Drop Or Choose File To Upload</p>
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
              {accepted[0] && accepted[0].type == "application/pdf" ? (
                <p>{accepted[0].name}</p>
              ) : (
                <img
                  className="object-fill h-[100px]  place-self-center flex"
                  src={path}
                  alt={path}
                ></img>
              )}

              <AiOutlineCloseCircle
                onClick={(e) => {
                  removeFile(accepted[0]);
                }}
                className="absolute top-2 cursor-pointer right-10 w-5 h-5 text-red ml-3"
              />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default DropZoneKYCDoc;
