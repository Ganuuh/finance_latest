export const DashboardCard = (props) => {
  return (
    <div className="h-fit rounded-2xl w-full border-[1px] bg-[#FFFFFF]">
      <div className="w-full h-fit border-b-[1px] flex gap-2 items-center p-6">
        <div className={`w-2 h-2 rounded-full bg-[${props.color}]`}></div>
        <p className="text-[#0F172A] text-[16px] font-semibold">
          {props.title}
        </p>
      </div>
      <div className="h-fit w-full flex flex-col px-6 py-5">
        <p
          className="w-full h-fit text-[36px] font-semibold text-black"
          style={{ color: props.total < 0 ? "red" : "green" }}
        >
          {props.total}₮
        </p>
        <p className="w-full h-fit text-[18px] text-[#64748B] leading-7">
          Your Income Amount
        </p>
        <div className="w-full h-fit flex items-start gap-2 mt-4">
          <img
            className={`w-6 h-6 rotate-[${
              props.percentage < 0 ? "0deg" : "180deg"
            }]`}
            src="/Leading_icon.png"
          />

          <p className="w-fit h-fit text-black text-[18px]">
            {props.percentage}% from last month
          </p>
        </div>
      </div>
    </div>
  );
};
