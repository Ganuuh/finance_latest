"use client";

import { useAuth } from "@/app/layout";
import { useMemo } from "react";
import { LastRecord } from "./LastRecord";
import { RecordRightCategory } from "./RecordRightComps";

export const DashBoardRecordMemo = () => {
  const { filteredRecords, newIcons, recordAdded } = useAuth();

  const list = useMemo(() => {
    return (
      <>
        {filteredRecords.map((each, index) => {
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
  }, [filteredRecords, recordAdded]);

  return list;
};

export const RecordRecordMemoToday = () => {
  const { newIcons, filteredRecords, recordAdded } = useAuth();

  const list = useMemo(() => {
    return (
      <div className="w-full h-fit flex flex-col gap-3 max-h-[350px] overflow-y-scroll">
        <p className="w-fit h-fit text-[16px] text-[#000] font-semibold">
          Today
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
  }, [filteredRecords, recordAdded]);
  return list;
};

export const RecordRecordMemoYesterday = () => {
  const { filteredRecords, newIcons, recordAdded } = useAuth();

  const list = useMemo(() => {
    return (
      <div className="w-full h-fit flex flex-col gap-3 max-h-[350px] overflow-y-scroll">
        <p className="w-fit h-fit text-[16px] text-[#000] font-semibold">
          Yesterday
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
  }, [filteredRecords, recordAdded]);
  return list;
};
