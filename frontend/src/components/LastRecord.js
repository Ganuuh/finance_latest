export const LastRecord = (props) => {
  return (
    <div className="w-full h-fit flex justify-between items-center py-5 border-b-[1px] border-[#E5E7EB]">
      <div className="flex w-fit h-fit gap-4 items-center">
        <div className="w-10 aspect-square flex justify-center items-center bg-[#0166FF] rounded-full">
          <img className="w-5 aspect-square" src={props.pic} />
        </div>
        <div className="w-fit h-fit flex flex-col items-start ">
          <p className="text-4 text-[#000000]">{props.gategory}</p>
          <p className="text-[#6B7280] text-[12px]">{props.date} hours ago</p>
        </div>
      </div>
      <p className="text-[#84CC16] text-[16px] font-medium"> - 1000₮</p>
    </div>
  );
};
