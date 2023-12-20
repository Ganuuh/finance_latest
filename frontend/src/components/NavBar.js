import Link from "next/link";
import { NavContainer } from "./ScreenContainer";

export const NavBar = () => {
  return (
    <div className="w-screen h-fit py-4 px-[120px] flex items-center justify-between bg-[#FFFFFF] text-[#0F172A] fixed top-0 right-0 z-20">
      <NavContainer>
        <div className="w-fit h-fit flex gap-6 items-center">
          <img src="/Vector.png" />
          <Link href={"/dashboard"}>
            <p className="w-fit h-fit text-[#0F172A] text-[16px]">Dashboard</p>
          </Link>
          <Link href={"/records"}>
            <p className="w-fit h-fit text-[#0F172A] text-[16px]">Records</p>
          </Link>
        </div>
        <div className="w-fit h-fit flex gap-6 items-center">
          <button className="w-[100px] h-[32px] text-[#fff] text-[16px] bg-[#0166FF] rounded-2xl">
            + Record
          </button>
          <img
            className="w-32px aspect-square rounded-full overflow-hidden"
            src="/Placeholder.png"
          />
        </div>
      </NavContainer>
    </div>
  );
};
