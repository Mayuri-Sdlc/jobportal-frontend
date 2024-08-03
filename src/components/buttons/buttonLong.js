import { AiOutlineCheckCircle } from "react-icons/ai";

const ButtonLong = (props) => {
  return (
    <div
      onClick={props.disabled ? null : props.onClick}
      className={` mt-[20px]  flex justify-start w-full ${
        props.disabled ? "opacity-50" : "cursor-pointer"
      } `}
    >
      {!props.loading ? (
        <div className="flex flex-row bg-gradient-to-r from-[#2626F4] hover:bg-gradient-to-r active:bg-gradient-to-r  active:from-[#00DDE2] active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#171795] rounded-[10px] h-11 w-40  justify-center items-center">
          <AiOutlineCheckCircle className=" h-6 w-6  fill-white" />

          <p className="text-white font-medium ml-1"> {props.title} </p>
        </div>
      ) : (
        <div className="flex flex-row bg-gradient-to-r from-[#2626F4]  active:bg-gradient-to-r  active:from-[#00DDE2] active:to-[#2626F4] hover:from-[#2626F4] hover:to-[#00DDE2] to-[#171795] rounded-[10px] h-11 w-40  justify-center items-center">
          <svg
            class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>

          <p className="text-white font-medium ml-1"> Loading... </p>
        </div>
      )}
    </div>
  );
};

export default ButtonLong;
