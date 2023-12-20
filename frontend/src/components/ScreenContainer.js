export const NavContainer = ({ children }) => {
  return (
    <div className="w-[1200px] m-auto h-fit flex justify-between items-center">
      {children}
    </div>
  );
};

export const DashboardContainer = ({ children }) => {
  return (
    <div className="w-[1200px] h-fit m-auto flex flex-col gap-6">
      {children}
    </div>
  );
};

export const RecordsContainer = ({ children }) => {
  return (
    <div className="w-[1200px] h-fit flex items-center gap-9"> {children}</div>
  );
};
