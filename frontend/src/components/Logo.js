export const Logo = (props) => {
  return (
    <div className="w-fit h-fit">
      <div className="w-fit h-fit flex gap-[10px] items-center m-auto">
        <img
          className={`aspect-square h-[${props.height}] `}
          src="/Vector.png"
        />
        <h1 className={`text-[${props.text}] text-[#000] font-bold`}>Geld</h1>
      </div>
      <div className="w-full h-fit gap-2 flex flex-col items-center">
        <p className="w-fit h-fit text-[24px] text-black font-semibold">
          {props.title}
        </p>
        <p className="w-fit h-fit text-[16px] text-[#334155]">{props.desc}</p>
      </div>
    </div>
  );
};
