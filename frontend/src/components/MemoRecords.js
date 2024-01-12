"use client";

import { useAuth } from "@/app/layout";
import { useMemo } from "react";
import { LastRecord } from "./LastRecord";
import { RecordRightCategory } from "./RecordRightComps";

export const DashBoardRecordMemo = () => {
  const { records, newIcons } = useAuth();

  const list = useMemo(() => {
    return (
      <>
        {records.map((each, index) => {
          return (
            <LastRecord
              key={index}
              icon={newIcons[each.category.icon]}
              color={each.category.color}
              title={each.category.name}
              amount={each.amount}
              type={each.type}
            />
          );
        })}
      </>
    );
  }, [records]);

  return list;
};

export const RecordRecordMemo = () => {
  const { records, newIcons } = useAuth();

  const list = useMemo(() => {
    return (
      <div className="w-full h-fit flex flex-col gap-3 max-h-[350px] overflow-y-scroll">
        {records.map((each, index) => {
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
        })}
      </div>
    );
  }, [records]);
  return list;
};
