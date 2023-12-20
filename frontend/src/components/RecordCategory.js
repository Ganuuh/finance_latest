import { EachCategory } from "./EachCategory";
import { data } from "./data";
export const RecordCategory = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-4">
      <div className="w-full h-fit flex justify-between items-center">
        <p className="w-fit h-fit text-[16px] text-[#1F2937] font-semibold">
          Category
        </p>
        <p className="w-fit h-fit text-[#1F2937] text-[16px]">Clear</p>
      </div>
      <div className="w-full h-fit flex flex-col gap-1">
        {data.map((each, index) => {
          return <EachCategory key={index} title={each} />;
        })}
        <div className="w-full h-fit px-3 py-2 flex gap-2">
          <img className="w-5 h-5" src="/plus.png" />
          <p className="w-fit h-fit text-[16px] text-[#1F2937]">Add Category</p>
        </div>
      </div>
    </div>
  );
};
