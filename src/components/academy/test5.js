import { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import data from "./test5.json";
import TestCongrats from "../../images/home/testcongrats.png";
import { toast } from "react-toastify";
import ModuleEmail from "./moduleEmail";
import ModuleDetails from "./moduleDeatils";
import { useDispatch } from "react-redux";
import { apiPOST } from "utils/apiHelper";
import { addNewMsg } from "app/chatSlice";

const Test5 = (props) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [resultArray, setResultArry] = useState([]);
  const [active, setActive] = useState("");
  const [email, setEmail] = useState("");

  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [activetab, setActiveTab] = useState("1");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const updateAnswers = async (id, ans) => {
    console.log("id and answer-----------", id, ans);

    if (answers.filter((e) => e.id == id).length > 0) {
      console.log("call 1");
      let d = answers.map((obj) =>
        obj["id"] == id ? { ...obj, ans: ans.toString() } : obj
      );
      console.log("d--------------", d);
      setAnswers(d);
    } else {
      let t = { id: id, ans: ans.toString() };

      setAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers, t];
        console.log("d2-------", updatedAnswers);
        return updatedAnswers;
      });
    }
  };

  const updateResult = async (e) => {
    setEmail(e);
    setActiveTab(5);
    window.scrollTo(0, 0);
  };

  const isValid = () => {
    let valid = true;
    console.log("asner ans question", data.length, answers);
    if (answers.length != data.length) {
      toast.error("Attempt All Questions");
      valid = false;
    }

    return valid;
  };

  const calculateResult = () => {
    let temp = [];
    data.forEach((d, index) => {
      let tempData = d;
      tempData["choice"] = answers
        .filter((e) => e.id == index + 1)
        .map((e) => e.ans)
        .toString();
      tempData["correct"] =
        d.answer ==
        answers
          .filter((e) => e.id == index + 1)
          .map((e) => e.ans)
          .toString();
      temp.push(tempData);
    });
    let onlyCorrectedone = temp.filter((t) => t.choice == t.answer);
    console.log("result of only corrected one=======", onlyCorrectedone);
    setResultArry(temp);
    setScore(onlyCorrectedone.length);
    setTotal(temp.length);
    setActiveTab(2);
    window.scrollTo(0, 0);

    console.log("d------------", temp);
  };

  useEffect(() => {
    if (activetab == 5) {
      if (score >= 2) {
        updateResulttodb();
      }
    }
  }, [activetab]);

  const updateResulttodb = async () => {
    const payload = {
      email: email,
      level1: "level1",
      chapter5: "pass",
    };
    const response = await apiPOST(`/v1/academy/addAcademy`, payload);
    console.log("response to updte test db--", response);
    if (response.data.status == 201) {
      toast.success("Congratulations, You have passed Chapter 5");
      dispatch(addNewMsg(Math.floor(Math.random() * 90 + 10)));
    }
  };

  return (
    <div className="flex flex-col text-black flex-1">
      {activetab == 1 ? (
        <div>
          <p className="font-bold text-[25px] text-primary ">
            Level-1| Estimated Time : 30 mins
          </p>

          <p className="font-bold mt-5 text-[25px]">Test your knowledge</p>

          <p className="mt-5 font-semibold text-[25px]"></p>

          <p className="text-[18px] text-black">
            {data.map((item, index) => {
              return (
                <div className="flex flex-col mt-5">
                  <p className="font-bold">
                    {index + 1}. {item.question}
                  </p>

                  <div className=" flex-1 sm:ml-5 mt-2">
                    {item.options.map((i, ind) => {
                      return (
                        <div
                          id={i + ind + index + 1}
                          className="mt-3 relative flex flex-row"
                        >
                          <div className=" w-[10%] sm:w-auto mt-1 ">
                            <input
                              className="cursor-pointer  accent-blue-800"
                              type="radio"
                              checked={
                                answers
                                  .filter((e) => e.id == index + 1)
                                  .map((e) => e.ans)
                                  .toString() == Object.keys(i).toString()
                                  ? true
                                  : false
                              }
                              onChange={async () => {
                                let t = await updateAnswers(
                                  index + 1,
                                  Object.keys(i).toString()
                                );
                              }}
                            />
                          </div>
                          <p
                         
                         onClick={async () => {
                           let t = await updateAnswers(
                             index + 1,
                             Object.keys(i).toString()
                           );
                         }}
                       
                       className="cursor-pointer ml-2">{i[Object.keys(i)]}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="flex flex-1 justify-between mt-5 items-center">
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
                    calculateResult();
                  }
                }}
                className="cursor-pointer bg-primary rounded-full p-3 pl-5 pr-5 flex items-center justify-center "
              >
                <p className="text-txt text-white">Submit</p>

                <FiChevronRight
                  className={`text-white transition-transform transform ${
                    isHovered && active == 1 ? "translate-x-2" : ""
                  }`}
                />
              </div>

              <div></div>
            </div>
          </p>
        </div>
      ) : null}

      {activetab == 2 ? (
        <div className="flex flex-1 flex-col justify-center items-center">
          <p className="text-primary text-center  mt-3 font-bold text-[22px]">
            Level-1 - Chapter 5{" "}
          </p>
          <p className="text-primary text-center mt-5 font-bold text-[20px]">
            Why Invest, beginners guide to investing
          </p>

          <div className="mt-0 ">
            <img src={TestCongrats} />
          </div>

          <p className="text-black text-center font-bold text-[24px]">
            Succesfully Completed!
          </p>
          <div className=" flex w-full  flex-col flex-1 justify-between mt-5 items-center">
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
                setActiveTab(3);
                window.scrollTo(0, 0);
              }}
              className="cursor-pointer border-primary border-[1px] bg-white rounded-full p-3 pl-5 pr-5 flex items-center justify-center "
            >
              <p className="text-txt text-primary">
                Check how many your got right
              </p>

              <FiChevronRight
                className={`text-primary transition-transform transform ${
                  isHovered && active == 1 ? "translate-x-2" : ""
                }`}
              />
            </div>

            <div className=" mt-5 "> </div>
            <div
              onClick={() => {
                props.onChange(6);
              }}
              onMouseEnter={() => {
                setActive(2);
                handleMouseEnter();
              }}
              onMouseLeave={() => {
                setActive(2);
                handleMouseLeave();
              }}
              className="cursor-pointer bg-primary rounded-full p-3 pl-5 pr-5 flex items-center justify-center "
            >
              <p className="text-txt text-white">Level 1 - Chapter 6</p>
              <FiChevronRight
                className={`text-white transition-transform transform ${
                  isHovered && active == 2 ? "translate-x-2" : ""
                }`}
              />
            </div>
          </div>
        </div>
      ) : null}

      {activetab == 3 ? (
        <div className="flex flex-1 flex-col  justify-center items-center">
          <ModuleEmail
            mailchange={(e) => {
              updateResult(e);
            }}
          />
        </div>
      ) : null}
      {activetab == 4 ? (
        <div className="flex flex-1 flex-col  justify-center items-center">
          <ModuleDetails
            email={email}
            nameChange={(e) => {
              setActiveTab(5);
              window.scrollTo(0, 0);
            }}
          />
        </div>
      ) : null}
      {activetab == 5 ? (
        <div>
          <p className="font-bold text-[25px] text-primary ">
            Level-1 | Estimated Time : 30 mins
          </p>

          <p className="font-bold mt-5 text-[25px]">
            Check how many you got right?
          </p>

          <p className="mt-5 font-semibold text-[25px]"></p>

          <p className="text-[18px] text-black">
            {resultArray.map((item, index) => {
              return (
                <div className="flex flex-col mt-5">
                  <p className="font-bold">
                    {index + 1}. {item.question}
                  </p>

                  <p className="font-normal">
                    <p
                      className={`${
                        item.choice == item.answer
                          ? "text-[#00ff00]"
                          : "text-red"
                      }`}
                    >
                      {" "}
                      Your Answer: {item.choice} ){" "}
                      {item.options
                        .filter((e) => Object.keys(e).toString() == item.choice)
                        .map((e) => e[Object.keys(e)])
                        .toString()}{" "}
                    </p>

                    <p className="mt-3">
                      {" "}
                      Answer: {item.answer} ){" "}
                      {item.options
                        .filter((e) => Object.keys(e).toString() == item.answer)
                        .map((e) => e[Object.keys(e)])
                        .toString()}{" "}
                    </p>

                    <p className="mt-3"> Explaination: {item.explain}</p>
                  </p>

                  <div className=" flex-1 sm:ml-5 mt-2"></div>
                </div>
              );
            })}

            <div className="flex flex-1 justify-between mt-5 items-center">
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
                    props.onChange(6);
                    window.scrollTo(0, 0);
                  }
                }}
                className="cursor-pointer bg-primary rounded-full p-3 pl-5 pr-5 flex items-center justify-center "
              >
                <p className="text-txt text-white">Level-1 Chapter 6</p>

                <FiChevronRight
                  className={`text-white transition-transform transform ${
                    isHovered && active == 1 ? "translate-x-2" : ""
                  }`}
                />
              </div>

              <div></div>
            </div>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Test5;
