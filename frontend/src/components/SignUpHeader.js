export const SignUpHeader = (props) => {
  return (
    <div className="w-fit h-fit flex flex-col items-center gap-[14px]">
      <div className="w-[48px] h-[48px] flex justify-center items-center bg-[#0166FF] rounded-full">
        <img className="w-[32px] h-[32px]" src={props.pic} />
      </div>
      <p className="w-fit h-fit text-[#0F172A] text-[24px]">{props.text}</p>
    </div>
  );
};
