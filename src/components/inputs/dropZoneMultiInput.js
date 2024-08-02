import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { apiPOST } from "utils/apiHelper";

const DropZoneMultiInput = (props) => {
  const [image, setImage] = useState({});
  const [accepted, setAccepted] = useState([]);
  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState(null);
  const [uploadProgress, setUploadProgress] = useState("");

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
      if (
        fileRejections[0].file.size > 3 * 1024 * 1024 &&
        acceptedFiles.length == 0
      ) {
        props.setError1();
      }
    }

    // Do something with the files
    console.log("accepted files---------", acceptedFiles, accepted);
    setAccepted([...acceptedFiles]);
   
    acceptedFiles.forEach((file) => {
      setLoading(true);
      uploadphototoserver(file);
    });
  }, []);

  useEffect(() => {
    if (finalUrl && finalUrl.length > 0) {
      let t = arr;
      console.log("before Pishuing", t);
      t.push(finalUrl);
      console.log("after pushing", t);
      setArr(t);
      
      props.fileChange(t.toString());
    }

   
  }, [finalUrl]);

  const uploadphototoserver = async (file) => {
    console.log("file to upload ", file);
    var payload = {
      key: "uploads/" + new Date().getTime() + file.name,
      content: "image/png",
    };

    const data = await apiPOST("/v1/upload-file", payload);
    if (data && data.error) return;
    console.log("data ", JSON.stringify(data, null, 4));
    var url = data.data.data;
    console.log("fuploadImage success ********************* ", data.data.data);
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

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,

      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
      maxSize: 3 * 1024 * 1024,
    });

  useEffect(() => {
    console.log("props value-----------", props.value);
    // setFinalUrl(props.value)
    let d = props.value.split(",");

    console.log("array of links ", d, arr.length, d.length);
    if (d.length > 0 && d[0] != "") {
      if (arr.length == 0) {
        let t = [];
        for (let i = 0; i <= d.length - 1; i++) {
          console.log("counter---", i, d[i], d.length, arr, arr.length);
          console.log("before Pishuing", t);
          t.push(d[i]);
        }

        console.log("after pushing", t);
        setArr(t);
      }
    }
  }, [props.value]);

  return (
    <div>
      <div className="flex flex-1 flex-row justify-between">
        <label
          id={`lbl${props.id}`}
          for={props.id}
          className=" text-[15px] font-semibold text-black "
        >
          {props.label}
        </label>

        <label className=" text-[15px]  text-inputBorder ">
          {props.label2}
        </label>
      </div>

      {/* {finalUrl.length==0? */}
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
          <div>
            <p>Drop the files here ...</p>
            <em>(Only *.jpeg and *.png images will be accepted)</em>
          </div>
        ) : !loading ? (
          <div>
            {props?.id === "gallery" ? (
              <div className="text-inputBorder">
                <p className="text-center">
                  Drag & Drop your files to upload your files
                </p>
                <p className="text-center">
                  Gallery Should have 640 px width and 360 px height
                </p>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    
      <div className="flex">
        {arr.map((item, index) => {
          return (
            <div className="flex relative flex-row m-2">
              <img className="w-24 h-24  " src={item} />
              <AiOutlineCloseCircle
                onClick={(e) => {
                  if (!props.disabled) {
                    const updatedFiles = [...arr];
                    updatedFiles.splice(index, 1);
                    setArr(updatedFiles);

                    setFinalUrl("");
                    props.fileChange(updatedFiles.toString());
                  }
                }}
                className="absolute right-0 w-5 h-5 bg-white text-red ml-3"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropZoneMultiInput;
