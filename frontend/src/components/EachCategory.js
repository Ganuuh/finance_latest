export const EachCategory = (props) => {
  return (
    <div className="w-full h-fit flex items-center justify-between">
      <div className="w-fit h-fit flex gap-[6px] px-3 py-1 items-center">
        <img className="w-5 h-5" src="/eye.png" />
        <p className="w-fit h-fit text-[#1F2937] text-[16px]">{props.title}</p>
      </div>
      <img className="w-5 h-5" src="/arrow.png" />
    </div>
  );
};
