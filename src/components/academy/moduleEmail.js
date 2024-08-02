import { addNewMsg } from "app/chatSlice";
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
const ModuleEmail = (props) => {
  const [email, setEmail] = useState("");
  const [emailerr, setEmailerr] = useState("");
  const dispatch = useDispatch();
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //Validation
  const isValid = () => {
    let valid = true;
    if (email.length == 0) {
      valid = false;
      setEmailerr("Invalid email address");
    } else {
      if (reg.test(email) === false) {
        valid = false;
        setEmailerr("Invalid email address");
      } else {
        setEmailerr("");
      }
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

  //email
  useEffect(() => {
    const academyemaill = localStorage.getItem("academyemail");
    console.log("my academy email------", academyemaill);
    if (academyemaill != null) {
      setEmail(academyemaill);
    }
  }, []);
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
          value={email}
          id={"email"}
          className=" w-full h-[45px] text-txt block rounded-[6px] px-2.5 pb-2.5 pt-3 text-gray-900  bg-white border-[0.5px] border-[#CDCAC9]"
          error={emailerr.length > 0 ? true : false}
          placeholder="Enter your email here"
          onChange={(e) => {
            if (reg.test(e.target.value) == false) {
              setEmailerr("Invalid email address");
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
            localStorage.setItem("academyemail", email);
            props.mailchange(email);
            dispatch(addNewMsg(Math.floor(Math.random() * 90 + 10)));
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

export default ModuleEmail;
