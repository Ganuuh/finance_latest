import { RecordRightCategory } from "./RecordRightComps";
import { data } from "./data";

export const RecordDay = (props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <p className="w-full h-fit p-4 text-4 text-black font-medium ">
        {props.date}
      </p>
      <div className="w-full h-fit flex flex-col gap-3 max-h-[350px] overflow-y-scroll">
        {data.map((each, index) => {
          return <RecordRightCategory key={index} title={each} />;
        })}
      </div>
    </div>
  );
};
