"use client";

import { useAuth } from "@/app/layout";

export const RecordAmount = () => {
  const { inputMax, maxAmount, setMaxAmount } = useAuth();

  return (
    <div className="w-full h-fit flex flex-col items-center gap-4">
      <p className="w-full h-fit text-[16px] text-[#1F2937] font-semibold">
        Amount Range
      </p>
      <div className="w-full h-fit flex justify-center gap-4 items-center">
        <p className="w-fit h-fit text-[#000] text-[24px]">0 </p>
        <p className="text-[#000] text-[14px]">to</p>
        <input
          className="w-[50%] h-[48px] flex items-center px-2 border-[1px] rounded-md text-[#0F172A] bg-[#F3F4F6]"
          type="number"
          value={maxAmount}
          onChange={(e) => {
            setMaxAmount(e.target.value);
          }}
          placeholder="Max amount"
        ></input>
      </div>
      <div className="w-full h-2 bg-transparent  rounded-md relative ">
        <input
          type="range"
          min={0}
          value={maxAmount}
          onChange={(e) => {
            setMaxAmount(e.target.value);
          }}
          max={inputMax}
          className={`w-full h-full bg-[#0166FF]  flex items-center rounded-md absolute bottom-0 right-0 `}
        ></input>
      </div>
    </div>
  );
};
