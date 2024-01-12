"use client";

import { useAuth } from "@/app/layout";

export const EachCategory = (props) => {
  const { newIcons, setCategoryFilter, categoryFilter } = useAuth();
  return (
    <div className="w-full h-fit flex items-center justify-between">
      <div className="w-fit h-fit flex gap-[6px] px-3 py-1 items-center">
        <div
          className="h-4 w-4 border-2 rounded-full"
          onClick={() => {
            setCategoryFilter(props.title);
          }}
          onDoubleClick={() => {
            setCategoryFilter("All");
          }}
          style={{
            backgroundColor:
              props.title === categoryFilter ? "#0166FF" : "#F9FAFB",
          }}
        ></div>
        <div
          className="w-6 h-6 flex items-center"
          style={{ color: props.color }}
        >
          {newIcons[props.icon]}
        </div>
        <p className="w-fit h-fit text-[#1F2937] text-[16px]">{props.title}</p>
      </div>
      <img className="w-5 h-5" src="/arrow.png" />
    </div>
  );
};
