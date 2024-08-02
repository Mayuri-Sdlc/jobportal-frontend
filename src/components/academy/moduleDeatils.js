import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
const ModuleDetails = (props) => {
  const [email, setEmail] = useState(props.email);
  const [emailerr, setEmailerr] = useState("");
  const [name, setName] = useState("");
  const [nameerr, setNameerr] = useState("");
  const [comment, setComment] = useState("");
  const [commenterr, setCommenterr] = useState("");

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //Validation
  const isValid = () => {
    let valid = true;
    if (email.trim().length == 0) {
      valid = false;
      setEmailerr("Invalid Email Address");
    } else {
      if (reg.test(email) === false) {
        valid = false;
        setEmailerr("Invalid Email Address");
      } else {
        setEmailerr("");
      }
    }

    if (name.trim().length == 0) {
      valid = false;
      setNameerr("Invalid Name");
    } else {
      setNameerr("");
    }
    if (comment.trim().length == 0) {
      valid = false;
      setCommenterr("Invalid Comments");
    } else {
      setCommenterr("");
    }
    return valid;
  };
  const [isHovered, setIsHovered] = useState(false);
  const [active, setActive] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex-col justify-center justify-items-center">
      <p className="text-[#2626EA] text-xl font-bold  text-center">
        Test Your Knowledge
      </p>
      <p className="text-[#2626EA] text-2xl font-medium  text-center mt-1">
        Join our email list to track your Test Result
      </p>

      <div className="mt-5 m-auto h-[45px] w-[70%] ">
        <input
          value={name}
          id={"email"}
          className=" w-full h-[45px] text-txt block rounded-[6px] px-2.5 pb-2.5 pt-3 text-gray-900  bg-white border-[0.5px] border-[#CDCAC9]"
          error={nameerr.length > 0 ? true : false}
          placeholder="Enter Your Name"
          onChange={(e) => {
            if (name.trim().length == 0) {
              setNameerr("Invalid name");
            } else {
              setNameerr("");
            }
            setName(e.target.value);
          }}
        />

        {nameerr && nameerr.length > 0 ? (
          <div className="lg:w-[60%] w-[80%]">
            <p className="text-[red] text-subtxt">{nameerr}</p>
          </div>
        ) : null}
      </div>
      <div className="mt-5 m-auto h-[45px] w-[70%] ">
        <input
          value={props.email}
          disabled
          id={"email"}
          className=" w-full h-[45px] text-txt block rounded-[6px] px-2.5 pb-2.5 pt-3 text-gray-900  bg-white border-[0.5px] border-[#CDCAC9]"
          error={emailerr.length > 0 ? true : false}
          placeholder="Enter Your Email Here"
          onChange={(e) => {
            if (reg.test(e.target.value) == false) {
              setEmailerr("Invalid Email Address");
            } else {
              setEmailerr("");
            }
            setEmail(e.target.value);
          }}
        />

        {emailerr && emailerr.length > 0 ? (
          <div className="lg:w-[60%] w-[80%]">
            <p className="text-[red] text-subtxt">{emailerr}</p>
          </div>
        ) : null}
      </div>

      <div className="mt-5 m-auto h-[120px] w-[70%] ">
        <textarea
          value={comment}
          id={"email"}
          className=" w-full h-[120px] text-txt block rounded-[6px] px-2.5 pb-2.5 pt-3 text-gray-900  bg-white border-[0.5px] border-[#CDCAC9]"
          error={commenterr.length > 0 ? true : false}
          placeholder="Enter Your Comments Here"
          onChange={(e) => {
            if (comment.trim().length == 0) {
              setCommenterr("Invalid Comments");
            } else {
              setCommenterr("");
            }
            setComment(e.target.value);
          }}
        />

        {commenterr && commenterr.length > 0 ? (
          <div className="lg:w-[60%] w-[80%]">
            <p className="text-[red] text-subtxt">{commenterr}</p>
          </div>
        ) : null}
      </div>
      <div
        onMouseEnter={() => {
          setActive(1);
          handleMouseEnter();
        }}
        onMouseLeave={() => {
          setActive(1);
          handleMouseLeave();
        }}
        onClick={() => {
          if (isValid()) {
            props.nameChange(email);
          }
        }}
        className="cursor-pointer bg-primary rounded-full p-3 pl-5 pr-5 m-auto flex items-center justify-center justify-items-center w-[30%] h-11 mt-5"
      >
        <p className="text-txt text-white">Submit </p>

        <FiChevronRight
          className={`text-white transition-transform transform  ${
            isHovered && active == 1 ? "translate-x-2" : ""
          }`}
        />
      </div>
    </div>
  );
};

export default ModuleDetails;
