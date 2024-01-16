"use client";

import { useAuth } from "@/app/layout";
import { useMemo } from "react";
import { LastRecord } from "./LastRecord";
import { RecordRightCategory } from "./RecordRightComps";
import { format } from "date-fns";

export const DashBoardRecordMemo = () => {
  const { newIcons, dashboardRecords } = useAuth();

  const list = useMemo(() => {
    return (
      <>
        {dashboardRecords.map((each, index) => {
          return (
            <LastRecord
              key={index}
              date={format(each.createdAt, "yyyy-MM-dd")}
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
  }, [dashboardRecords]);

  return list;
};

export const RecordRecordMemo = () => {
  const { newIcons, filteredRecords } = useAuth();

  const list = useMemo(() => {
    return (
      <div className="w-full h-full flex flex-col gap-3 overflow-y-scroll">
        <p className="w-fit h-fit text-[16px] text-[#000] font-semibold">
          Records
        </p>
        {filteredRecords.length === 0 ? (
          <div className="w-full h-[250px] flex justify-center items-center">
            <p className="text-[20px] text-[#000] font-semibold">
              Sorry, No records found in the filter.
            </p>
          </div>
        ) : (
          filteredRecords.map((each, index) => {
            return (
              <RecordRightCategory
                key={index}
                id={each._id}
                date={each.createdAt.slice(0, 10)}
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
    );
  }, [filteredRecords]);
  return list;
};
