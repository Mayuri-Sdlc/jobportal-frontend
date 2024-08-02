import { useState } from "react";

export default function ToggleSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <div className="flex">
        <label class="inline-flex relative items-center mr-5 cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={enabled}
            readOnly
          />
          <div
            onClick={() => {
              setEnabled(!enabled);
            }}
            className="w-6 md:w-8 lg:w-10 h-3 md:h-4 lg:h-5 bg-gray-200 rounded-full peer  peer-focus:[#00DDE2]  peer-checked:after:translate-x-full peer-checked:after:border-[#2626EA] after:content-[''] after:absolute after:top-0.5 after:left-[3px] lg:after:top-[3px] lg:after:left-[6.5px] xl:after:top-[2.5px] xl:after:left-[5px] after:bg-[#2626EA] after:border-[#2626EA] after:border after:rounded-full after:h-2 after:w-2 md:after:h-3 md:after:w-3 lg:after:h-3.5 lg:after:w-3.5 xl:after:h-3.5 xl:after:w-3.5 after:transition-all peer-checked:bg-[#00DDE2]"
          ></div>
        </label>
      </div>
    </div>
  );
}
