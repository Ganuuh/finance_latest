"use client";
import { useAuth } from "@/app/layout";
import { useEffect } from "react";
import { DashBoardRecordMemo } from "./MemoRecords";


export const DashboardBottom = () => {
  const { getRecord, recordAdded } = useAuth();

  useEffect(() => {
    getRecord();
  }, [recordAdded]);

  return (
    <div className="w-full h-fit flex flex-col rounded-md bg-[#FFFFFF] items-center px-6">
      <p className="w-full h-fit text-[16px] text-[#0F172A] py-6 font-semibold border-b-[1px]">
        Last Record
      </p>
      <DashBoardRecordMemo />
    </div>
  );
};
