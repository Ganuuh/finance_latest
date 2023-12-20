// "use client";
export const DynamicStep = (props) => {
  // const number = props.number;
  return (
    <div className="w-fit h-fit flex gap-[40px] relative justify-center">
      <div className="w-[45px] h-fit flex flex-col items-center gap-2 z-20">
        <p
          className={`h-5 w-5 text-white text-[14px] bg-[#0166FF] font-medium rounded-full aspect-square flex justify-center items-center`}
        >
          1
        </p>
        <p className="text-[#0F172A] text-[14px] font-normal">Currency</p>
      </div>
      <div className="w-[45px]  h-fit flex flex-col items-center gap-2 z-20">
        <p
          className={`h-5 w-5 text-${
            props.number > 1 ? "white" : "[#0F172A]"
          } text-[14px] bg-[${
            props.number > 1 ? "#0166FF" : "#E5E7EB"
          }] font-medium rounded-full aspect-square flex justify-center items-center`}
        >
          2
        </p>
        <p className="text-[#0F172A] text-[14px] font-normal">Balance</p>
      </div>
      <div className="w-[45px]  h-fit flex flex-col items-center gap-2 z-20">
        <p
          className={`h-5 w-5 text-${
            props.number > 2 ? "white" : "[#0F172A]"
          } text-[14px] bg-[${
            props.number > 2 ? "#0166FF" : "#E5E7EB"
          }] font-medium rounded-full aspect-square flex justify-center items-center`}
        >
          3
        </p>
        <p className="text-[#0F172A] text-[14px] font-normal">Finish</p>
      </div>
      <div className="w-[85%] h-1 flex justify-between absolute z-10 top-[17%] ">
        <div
          className={`h-full w-[45%] bg-[${
            props.number > 1 ? "#0166FF" : "#E5E7EB"
          }]`}
        ></div>
        <div
          className={`h-full w-[45%] bg-[${
            props.number > 2 ? "#0166FF" : "#E5E7EB"
          }]`}
        ></div>
      </div>
    </div>
  );
};
