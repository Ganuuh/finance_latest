"use client";
import { useEffect, useState } from "react";
import { RecordRightCategory } from "./RecordRightComps";
import { useAuth } from "@/app/layout";
import { Loading } from "./LoadingPage";

export const RecordDay = (props) => {
  const { getRecord, records, recordAdded, newIcons } = useAuth();
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    getRecord();
    setIsloading(false);
  }, [recordAdded]);
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="w-full h-fit p-4 text-4 text-black font-medium ">
        {props.date}
      </p>
      <div className="w-full h-fit flex flex-col gap-3 max-h-[350px] overflow-y-scroll">
        {isLoading ? (
          <div></div>
        ) : (
          // <Loading />
          records.map((each, index) => {
            return (
              <RecordRightCategory
                key={index}
                icon={newIcons[each.category.icon]}
                color={each.category.color}
                title={each.category.name}
                amount={each.amount}
                type={each.type}
              />
            );
          })
        )}
      </div>
    </div>
  );
};
