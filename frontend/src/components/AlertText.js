export const AlertText = (props) => {
  return (
    <p className="w-fit h-fit text-black text-[14px] font-medium ">
      {props.text}
    </p>
  );
};

export const RedText = (props) => {
  return <p className="w-fit h-fit text-[12px] text-red-400">{props.text}</p>;
};
