"use client";

import { useAuth } from "@/app/layout";

export const RecordAmount = () => {
  const { minAmount, maxAmount, setMaxAmount, setMinAmount } = useAuth();

  return (
    <div className="w-full h-fit flex flex-col items-center gap-4">
      <p className="w-full h-fit text-[16px] text-[#1F2937] font-semibold">
        Amount Range
      </p>
      <div className="w-full h-fit grid grid-cols-2 gap-4">
        {/* <input
          className="w-full h-[48px] flex items-center px-2 border-[1px] rounded-md text-[#0F172A] bg-[#F3F4F6]"
          type="number"
          value={minAmount}
          onChange={(e) => {
            setMinAmount(e.target.value);
          }}
          placeholder="Min amount"
        ></input> */}
        <input
          className="w-full h-[48px] flex items-center px-2 border-[1px] rounded-md text-[#0F172A] bg-[#F3F4F6]"
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
          max={200000}
          className={`w-[51%] h-full bg-[#0166FF]  flex items-center rounded-md absolute bottom-0 right-0 `}
        ></input>
        {/* front input  */}
        {/* <input
          type="range"
          min={0}
          value={minAmount}
          onChange={(e) => {
            setMinAmount(e.target.value);
          }}
          max={maxAmount}
          className={`w-[51%] h-full bg-[#0166FF]  flex items-center rounded-md absolute bottom-0 left-0 rotate-180 `}
        ></input> */}
      </div>
    </div>
  );
};
