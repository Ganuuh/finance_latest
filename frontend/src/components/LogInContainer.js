export const LogInContainer = ({ children }) => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-[50%] h-full flex justify-center items-center bg-[#FFFFFF]">
        {children}
      </div>
      <div className="w-[50%] h-full bg-[#0166FF]"></div>
    </div>
  );
};
