import { RecordAmount } from "./RecordAmount";
import { RecordCategory } from "./RecordCategory";
import { RecordType } from "./RecordType";

export const RecordsLeft = () => {
  return (
    <div className="w-[300px] h-full py-6 px-4 flex flex-col justify-center gap-6 bg-[#F9FAFB] rounded-md">
      <p className="w-full h-fit text-[24px] text-[#000] font-semibold ">
        Records
      </p>
      <p className="h-8 w-full flex items-center justify-center bg-[#0166FF] text-[16px] text-[#fff] rounded-3xl leading-6">
        + Add
      </p>
      <input
        type="search"
        placeholder="Search"
        className="w-full h-8 px-2 rounded-md bg-[#F3F4F6]"
      ></input>
      <RecordType />
      <RecordCategory />
      <RecordAmount />
    </div>
  );
};
