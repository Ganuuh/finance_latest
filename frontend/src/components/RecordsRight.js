import { RecordDay } from "./RecordDates";
import { RecordRightFilter } from "./RecordRightComps";

export const RecordRight = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6">
      <RecordRightFilter />
      <RecordDay date="Today" />
      <RecordDay date="Yesterday" />
    </div>
  );
};
