import {
  RecordRecordMemo,
  RecordRecordMemoToday,
  RecordRecordMemoYesterday,
} from "./MemoRecords";
import { RecordRightFilter } from "./RecordRightComps";

export const RecordRight = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8 justify-start">
      <RecordRightFilter />
      <RecordRecordMemoToday />
      <RecordRecordMemoYesterday />
    </div>
  );
};
