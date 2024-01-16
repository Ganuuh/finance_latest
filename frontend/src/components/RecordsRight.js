import { RecordRecordMemo } from "./MemoRecords";
import { RecordRightFilter } from "./RecordRightComps";

export const RecordRight = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 justify-start overflow-y-scroll">
      <RecordRightFilter />
      <RecordRecordMemo />
    </div>
  );
};
