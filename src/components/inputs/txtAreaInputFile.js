import Loading from "components/loading/loading";
import { useState, useEffect } from "react";
import { apiPOST } from "utils/apiHelper";
import { ReactComponent as PdfIcon } from "../../images/pdfIcon.svg";
import { ReactComponent as PptIcon } from "../../images/pptIcon.svg";
import { AiOutlineCloseCircle } from "react-icons/ai";
const TxtAreaInputFile = (props) => {
  const [show, setShow] = useState(false);

  function isUrlValid(str) {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return pattern.test(str);
  }

  const [loading, setLoading] = useState(false);
  const [finalUrl, setFinalUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState("");

  const uploadphototoserver = async (file) => {
    console.log("file to upload ", file);
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

  useEffect(() => {
    if (finalUrl.length > 0) {
      props.fileChange(finalUrl);
    }
  }, [finalUrl]);

  const removeFile = () => {
    setFinalUrl("");
    props.fileChange("");
  };

  return (
    <div class="relative w-full  mt-[2px]">
      <div className={`flex justify-between`}>
        <div className="flex flex-1">
          <label
            id={"lbl" + props.id}
            for="floating_outlined"
            className=" text-[15px] font-semibold text-black "
          >
            {props.label}
          </label>
          {!props.optional ? <span className="text-red ml-1">*</span> : null}
        </div>
        <div className="flex flex-1 sm:flex-row flex-col  text-right items-end justify-end ">
          <div>
            <label
              for={"file" + props.id}
              className=" text-[15px] text-primary"
            >
              [+] Attach Document
            </label>
            <input
              id={"file" + props.id}
              accept=".pdf,.ppt"
              className="file:hidden hidden appearance-none"
              type="file"
              onClick={(event) => (event.target.value = null)}
              onChange={(e) => {
                console.log("file", e);
                uploadphototoserver(e.target.files[0]);
                console.log("profile pic choose", e.target.files[0]);
              }}
            ></input>
          </div>
          <p className="ml-3"> </p>
          <p className="  text-[15px]  text-inputBorder ">(Max 100 words)</p>
        </div>
      </div>

      <textarea
        maxLength={props.maxLength}
        type="text"
        disabled={props.disabled}
        name={props.id}
        id={props.id}
        className={`block relative textarea-with-custom-scrollbar  rounded-[6px] px-2.5 pb-2.5 pt-3 w-full  h-[145px] text-txt text-gray-900  ${
          props.disabled ? "bg-lightgray" : "bg-transparent"
        }   border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } text-black appearance-none  focus:outline-none focus:ring-0 peer`}
        placeholder={`${
          props.placeholder ? props.placeholder : `Enter ${props.label}`
        }`}
        value={props.value}
        style={{ resize: "none" }}
        onChange={(e) => {
          props.fileChange2(e.target.value);
        }}
      />

      {props.value2 && props.value2.length > 0 ? (
        <div className="flex mt-3 ">
          <div className="flex sm:w[90%] w-[90%]  gap-2">
            <div className="w-[10%]">
              <div className="w-6 h-6">
                {props?.value
                  .substring(props?.value2.lastIndexOf(".") + 1)
                  .toLowerCase() === "pdf" ? (
                  <PdfIcon />
                ) : (
                  <PptIcon />
                )}
              </div>
            </div>
            <div className="truncate">{props?.value2?.split("/")?.pop()}</div>
          </div>

          <AiOutlineCloseCircle
            onClick={(e) => {
              if (!props.disabled) {
                removeFile();
              }
            }}
            className="  w-5 h-5 text-red ml-3"
          />
        </div>
      ) : null}

      {loading ? (
        <div className=" flex flex-col absolute top-[40%] self-center place-self-center left-[45%] ">
          <Loading />
          <p className="txt-txt">{uploadProgress}%</p>
        </div>
      ) : null}
    </div>
  );
};

export default TxtAreaInputFile;
