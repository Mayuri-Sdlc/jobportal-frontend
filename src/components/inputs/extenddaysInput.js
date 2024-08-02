import { MinusIcon, PlusIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

const ExtendDaysInput = ({ setDays }) => {
  const [number, setNumber] = useState(0);

  const handleMinusClick = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
      setDays((prevNumber) => prevNumber - 1);
    }
  };

  const handlePlusClick = () => {
    setNumber((prevNumber) => prevNumber + 1);
    setDays((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="absolute left-1/2 top-[100px] transform -translate-x-1/2">
      <div className="relative w-80">
        <div
          className="cursor-pointer text-xl font-bold text-white  bg-gradient-to-r rounded-xl  from-[#2626F4]  to-[#171795] absolute left-0 top-0 w-16 h-full flex items-center justify-center"
          onClick={() => handleMinusClick()}
        >
          <MinusIcon className="w-6 h-6" />
        </div>
        <input
          type="number"
          value={number}
          readOnly
          className="w-full p-0 m-0 border-0 text-center text-3xl text-gray-700 font-semibold bg-transparent"
        />
        <div
          className="cursor-pointer text-xl font-bold rounded-xl bg-gradient-to-r from-[#2626F4]  to-[#171795] text-white absolute right-0 top-0 w-16 h-full flex items-center justify-center"
          onClick={() => handlePlusClick()}
        >
          <PlusIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default ExtendDaysInput;
