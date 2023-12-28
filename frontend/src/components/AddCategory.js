"use client";
import { useAuth } from "@/app/layout";
import { useState } from "react";
export const AddCategory = () => {
  const { addCategory, setAddCategory } = useAuth();
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 ${
        addCategory ? "flex" : "hidden"
      } items-center justify-center z-40 `}
    >
      <div
        onClick={() => {
          setAddCategory(false);
        }}
        className="w-full h-full bg-[#00000080] absolute top-0 left-0 z-10"
      ></div>
      <div className="w-fit h-fit flex flex-col items-center bg-[#fff] rounded-md z-20">
        <div className="w-full flex items-center px-6 py-5 justify-between">
          <p className="w-fit h-fit text-[#0F172A] text-[20px] font-semibold">
            Add Category
          </p>
          <p
            onClick={() => {
              setAddCategory(false);
            }}
            className="w-fit h-fit text-[#000] text-[20px] font-semibold"
          >
            X
          </p>
        </div>
        <div className="w-full h-fit flex flex-col  p-6 gap-8">
          <div className="w-full h-fit flex gap-4">
            <div className="w-[84px] h-[48px] bg-[#F9FAFB] rounded-md flex justify-around items-center relative">
              <div className="w-[24px] h-[24px] border-[1px] border-[#000]"></div>
              <img
                onClick={() => {
                  setIsOn((prev) => !prev);
                }}
                className={`w-6 h-6 rotate-${isOn ? "180" : "0"} duration-300`}
                src="/arrow_drop_down.png"
              />
              <div
                className={`absolute top-[110%] left-0 w-fit h-fit border-[1px] bg-[#fff] p-6 rounded-md flex flex-col items-center gap-6`}
              >
                <div className="w-fit h-fit grid grid-cols-6 gap-6"></div>
              </div>
            </div>
            <input
              placeholder="Name"
              className="w-[350px] h-[48px] bg-[#F9FAFB] rounded-md px-3"
            ></input>
          </div>
          <div className="w-full h-fit py-4 text-[#fff] bg-[#16A34A] flex justify-center items-center rounded-full">
            Add Category
          </div>
        </div>
      </div>
    </div>
  );
};
