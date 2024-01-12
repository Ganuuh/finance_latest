"use client";
import { useAuth } from "@/app/layout";
import { EachCategory } from "./EachCategory";
export const RecordCategory = () => {
  const { categories, setCategoryFilter } = useAuth();
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex justify-between items-center">
        <p className="w-fit h-fit text-[16px] text-[#1F2937] font-semibold">
          Category
        </p>
        <p
          className="w-fit h-fit text-[#1F2937] text-[16px] cursor-pointer"
          onClick={() => {
            setCategoryFilter("All");
          }}
        >
          Clear
        </p>
      </div>
      <div className="w-full h-fit max-h-[300px] overflow-scroll flex flex-col gap-1">
        {categories.map((each, index) => {
          return (
            <EachCategory
              key={index}
              title={each.name}
              color={each.color}
              icon={each.icon}
            />
          );
        })}
        <div className="w-full h-fit px-3 py-2 flex gap-2 items-center">
          <p className="text-[20px] text-[#000]">+</p>
          <p className="w-fit h-fit text-[16px] text-[#1F2937]">Add Category</p>
        </div>
      </div>
    </div>
  );
};
