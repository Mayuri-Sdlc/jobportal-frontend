import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const PasswordInput = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <div class="relative lg:w-[60%] w-[92%] mt-[16px] ">
      <input
        id={`floating_outlined_${props.id}`}
        className={`block text-txt rounded-[6px] px-2.5 pb-2.5 pt-4 w-full  h-[45px] text-sm text-gray-900 bg-transparent  border ${
          props.error ? "border-[red]" : "border-inputBorder "
        } appearance-none dark:border-gray-600 focus:outline-none focus:ring-0 peer`}
        placeholder=" "
        value={props.value}
        onChange={props.onChange}
        onKeyUp={(e) => {
          if (e.keyCode === 13 && props.onKeyUp?.title === "login") {
            props?.onKeyUp?.loginCall();
          }
        }}
        type={visible ? "text" : "password"}
      />
      <label
        for={`floating_outlined_${props.id}`}
        className="absolute  text-[15px] text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 left-1"
      >
        {props.label}
      </label>
      {visible ? (
        <AiOutlineEye
          onClick={() => {
            setVisible(false);
          }}
          className={`absolute top-2 h-8 w-6 right-2 ${
            props.error ? "fill-[red]" : "fill-inputBorder"
          }`}
        />
      ) : (
        <AiOutlineEyeInvisible
          onClick={() => {
            setVisible(true);
          }}
          className={`absolute top-2 h-8 w-6 right-2 ${
            props.error ? "fill-[red]" : "fill-inputBorder"
          }`}
        />
      )}
    </div>
  );
};

export default PasswordInput;
