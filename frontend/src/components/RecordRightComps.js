"use client";
import { useAuth } from "@/app/layout";
import { useEffect, useState } from "react";

export const RecordRightFilter = () => {
  const [date, setDate] = useState(0);

  const { setDays } = useAuth();
  const data = [
    { date: "Today", number: 0 },
    { date: "3 days", number: 3 },
    { date: "Week", number: 7 },
    { date: "30 days", number: 30 },
  ];

  useEffect(() => {
    setDays(data[date].number);
  }, [date]);
  return (
    <div className="w-full flex h-fit justify-between">
      <div className="w-fit h-full flex gap-4 items-center text-[#000]">
        <p
          className="w-8 h-8 flex justify-center items-center bg-[#E5E7EB] text-[20px] text-[#0F172A] rounded-md cursor-pointer"
          onClick={() => {
            if (date === 0) {
              setDate(3);
            } else {
              setDate(date - 1);
            }
          }}
        >{`<`}</p>
        <p className="w-[70px] flex justify-center items-center h-fit text-[16px] leading-6">
          {data[date].date}
        </p>
        <p
          className="w-8 h-8 flex justify-center items-center bg-[#E5E7EB] text-[20px] text-[#0F172A] rounded-md cursor-pointer"
          onClick={() => {
            if (date === 3) {
              setDate(0);
            } else {
              setDate(date + 1);
            }
          }}
        >{`>`}</p>
      </div>
      <div className="w-fit h-12 bg-[#F9FAFB] text-[16px] text-[#000] p-4 flex items-center gap-3 rounded-md">
        <p>Newest First</p>
        <img className="w-5 h-5" src="/arrow_drop_down.png" />
      </div>
    </div>
  );
};
export const RecordRightCategory = (props) => {
  const { setDeleteBannerRecord, setRecordId } = useAuth();
  return (
    <div className="w-full h-fit px-6 py-3 flex items-center justify-between bg-[#FFFFFF] rounded-md">
      <div className="w-fit h-fit flex items-center gap-4">
        <div
          className="w-4 aspect-square  rounded-md cursor-pointer"
          onClick={() => {
            setRecordId(props.id);
            setDeleteBannerRecord(true);
          }}
        >
          <img className="w-full h-full" src="/trashcan.png" />
        </div>
        <div
          className="w-10 h-10 flex justify-center items-center bg-[#fff] rounded-full"
          style={{ backgroundColor: props.color }}
        >
          {props.icon}
        </div>
        <div className="w-fit h-full flex flex-col items-start justify-between">
          <p className="text-4 w-fit h-fit text-black">{props.title}</p>
          <p className="text-3 w-fit h-fit text-[#6B7280] text-[12px]">
            {props.date}
          </p>
        </div>
      </div>
      <p
        className="w-fit text-[16px] h-fit"
        style={{ color: props.type === "expense" ? "red" : "green" }}
      >
        {props.type === "expense" ? `- ${props.amount}₮` : `${props.amount}₮`}
      </p>
    </div>
  );
};
