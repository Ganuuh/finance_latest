"use client";
import { useAuth } from "@/app/layout";

export const AddRecordsRight = () => {
  return (
    <div className="w-full h-full flex flex-col gap-7 py-8 px-6">
      <div className="w-full h-fit flex flex-col gap-4">
        <label className="w-fit h-fit text-[#000] text-[16px]">Payee</label>
        <input
          className="w-full h-[48px] rounded-md bg-[#F9FAFB] px-4 text-[#000]"
          placeholder="Write here"
        ></input>
      </div>
      <div className="w-full flex flex-col h-full gap-4 ">
        <label className="w-fit h-fit text-[#000] text-[16px]">Note</label>
        <textarea
          className="w-full h-full bg-[#F9FAFB] rounded-md p-4 text-[#000]"
          placeholder="Write here"
        ></textarea>
      </div>
    </div>
  );
};

export const AddRecordCategory = () => {
  const { setCategory, category, setIsShown, setAddCategory } = useAuth();
  const clickHandler = () => {
    setIsShown(false);
    setAddCategory(true);
    setCategory(false);
  };

  return (
    <div className="w-full h-fit flex flex-col items-center">
      <label className="w-full h-fit text-[16px] text-black">Category</label>
      <div className="w-full h-[48px] border-[1px] rounded-md bg-[#F9FAFB] flex items-center justify-around px-3 relative">
        <p className="w-full h-fit text-[14px] text-[#94A3B8]">
          Find or choose category
        </p>
        <div
          className={`w-[24px] h-[24px] flex items-center justify-center cursor-pointer rotate-${
            category ? "180" : "0"
          } duration-300`}
          onClick={() => {
            setCategory((prev) => !prev);
          }}
        >
          <img className="w-full h-full" src="/arrow_drop_down.png" />
        </div>
        <div
          className={`w-full absolute ${
            category ? "flex" : "hidden"
          } top-[110%] h-fit  flex-col px-4 border-[1px] bg-[#FFFFFF] rounded-md`}
        >
          <div
            onClick={() => {
              clickHandler();
            }}
            className="w-full h-fit flex items-center gap-3 py-4 border-b-[1px]"
          >
            <p className="w-fit h-fit text-[#000] text-[24px]">+</p>
            <p className="w-fit h-fit text-[16px] text-[#000]">Category</p>
          </div>
          <div className="w-full h-fit flex items-center py-4">
            <p className="text-[#000] text-[14px]">Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};
