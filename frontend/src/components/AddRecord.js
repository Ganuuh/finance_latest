"use client";

import { useAuth } from "@/app/layout";
import { useState } from "react";

export const AddRecord = () => {
  const { isShown, setIsShown } = useAuth();
  const [color, setColor] = useState(false);
  return (
    <>
      <div
        className={`w-full h-full bg-transparent flex fixed left-0 top-0 z-30 justify-center items-center      ${
          isShown ? "flex" : "hidden"
        } `}
      >
        <div
          className="w-full h-full bg-[#00000080]"
          onClick={() => {
            setIsShown(false);
          }}
        ></div>
        <div
          className={`w-[800px] h-fit flex flex-col items-center justify-center bg-white rounded-md z-30 absolute `}
        >
          <div className="w-full h-fit flex justify-between items-center px-6 py-5 border-b-[1px]">
            <p className="w-fit h-fit text-black text-[20px] font-semibold">
              Add Record
            </p>
            <p
              onClick={() => {
                setIsShown(false);
              }}
              className="w-fit h-fit text-black font-semibold text-[20px]"
            >
              X
            </p>
          </div>
          <div className="w-full h-fit flex">
            {/* // Left div */}
            <div className="w-[50%] h-fit flex flex-col items-center gap-5 p-4">
              {/* Income and Expense */}
              <div className="w-full h-full flex gap-5  rounded-full bg-[#F3F4F6]">
                <p
                  onClick={() => {
                    setColor(true);
                  }}
                  className={`w-[50%] h-full flex items-center p-4 justify-center rounded-full cursor-pointer  ${
                    color
                      ? "text-[#ffffff]  bg-[#0166FF]"
                      : "text-[#000000] bg-[#F3F4F6]"
                  }`}
                >
                  Expense
                </p>
                <p
                  onClick={() => {
                    setColor(false);
                  }}
                  className={`w-[50%] h-full flex items-center p-4  justify-center rounded-full cursor-pointer  ${
                    color
                      ? "text-[#000000] bg-[#F3F4F6]"
                      : "text-[#ffffff]  bg-[#16A34A]"
                  }`}
                >
                  Income
                </p>
              </div>
              <div className="w-full h-fit flex flex-col items-center gap-12">
                <div className="w-full h-fit flex flex-col items-start rounded-md border-[1px] px-4 py-3 bg-[#F3F4F6]">
                  <label className="w-full h-fit text-[16px] text-black">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="bg-transparent"
                    placeholder="₮ 000.00"
                  ></input>
                </div>
                <div className="w-full h-fit flex flex-col items-center">
                  <label className="w-full h-fit text-[16px] text-black">
                    Category
                  </label>
                  <select className="w-full bg-[#F3F4F6] text-black p-3">
                    <option className="w-full text-black text-[12px]">
                      House
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {/* Right Div */}
            <div className="w-[50%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};
