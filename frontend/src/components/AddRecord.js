"use client";

import { useAuth } from "@/app/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { AddRecordCategory, AddRecordsRight } from "./AddRecordComps";
import { api } from "@/common";

export const AddRecord = () => {
  const { isShown, setIsShown } = useAuth();
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [type, setType] = useState("income");

  const postRecord = async (type, amount, category, dateFrom, dateTo) => {
    try {
      const { data } = await api.post(
        "/add-record",
        {
          type,
          amount,
          category,
          dateFrom,
          dateTo,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      toast.info(data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.log(error, "Error");
    }
  };

  return (
    <>
      <ToastContainer />
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
          <div className="w-full h-fit grid grid-cols-2">
            {/* // Left div */}
            <div className="w-full h-fit flex flex-col items-center gap-5 p-4">
              {/* Income and Expense */}
              <div className="w-full h-full flex  rounded-full bg-[#F3F4F6]">
                <p
                  onClick={() => {
                    setType("income");
                    console.log(type);
                  }}
                  className={`w-[50%] h-full flex items-center p-4 justify-center rounded-full cursor-pointer  ${
                    type === "income"
                      ? "text-[#ffffff]  bg-[#0166FF]"
                      : "text-[#000000] bg-[#F3F4F6]"
                  }`}
                >
                  Expense
                </p>
                <p
                  onClick={() => {
                    setType("expense");
                    console.log(type);
                  }}
                  className={`w-[50%] h-full flex items-center p-4  justify-center rounded-full cursor-pointer  ${
                    type === "income"
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
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    type="number"
                    className="bg-transparent"
                    placeholder="₮ 000.00"
                  ></input>
                </div>
                <AddRecordCategory />
                <div className="w-full h-fit grid grid-cols-2 gap-3">
                  <div className="w-full h-fit flex flex-col items-start gap-1">
                    <label className="w-fit h-fit text-black text-[16px]">
                      Date
                    </label>
                    <input
                      value={dateFrom}
                      onChange={(e) => {
                        setDateFrom(e.target.value);
                      }}
                      className="w-full h-12 border-[1px] rounded-md px-2 bg-[#F9FAFB] text-[#000]"
                      type="date"
                    ></input>
                  </div>
                  <div className="w-full h-fit flex flex-col items-start gap-1">
                    <label className="w-fit h-fit text-black text-[16px]">
                      Date
                    </label>
                    <input
                      value={dateTo}
                      onChange={(e) => {
                        setDateTo(e.target.value);
                      }}
                      className="w-full h-12 border-[1px] rounded-md px-2 bg-[#F9FAFB] text-[#000]"
                      type="date"
                    ></input>
                  </div>
                </div>
                <div
                  onClick={() => {
                    console.log(type);
                    postRecord(type, amount, category, dateFrom, dateTo);
                    setIsShown(false);
                  }}
                  className={`w-full h-fit py-3 flex justify-center items-center bg-[${
                    type === "income" ? "#0166FF" : "#16A34A"
                  }] text-[#F9FAFB] text-[16px] rounded-full `}
                >
                  Add Record
                </div>
              </div>
            </div>
            {/* Right Div */}
            <AddRecordsRight />
          </div>
        </div>
      </div>
    </>
  );
};
