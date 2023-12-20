export const RecordType = () => {
  return (
    <div className="w-full h-fit flex flex-col items-start gap-4">
      <p className="w-full h-fit text-[16px] text-[#1F2937] font-semibold">
        Types
      </p>
      <div className="w-full h-fit flex flex-col gap-1 px-3 py-2">
        <div className="w-full h-fit flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-[1px]"></div>
          <p className="w-fit h-fit text-[16px] text-[#1F2937] font-medium">
            All
          </p>
        </div>
        <div className="w-full h-fit flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-[1px]"></div>
          <p className="w-fit h-fit text-[16px] text-[#1F2937] font-medium">
            Income
          </p>
        </div>
        <div className="w-full h-fit flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border-[1px]"></div>
          <p className="w-fit h-fit text-[16px] text-[#1F2937] font-medium">
            Expense
          </p>
        </div>
      </div>
    </div>
  );
};
