export const Container = ({ children }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-start py-8 bg-white">
      {children}
    </div>
  );
};
