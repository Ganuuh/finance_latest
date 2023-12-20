import Link from "next/link";
import { BigButton } from "./BigButton";
import { DynamicStep } from "./DynamicStep";
import { Logo } from "./Logo";
import { SignUpHeader } from "./SignUpHeader";

export const SecondStep = () => {
  return (
    <div className="w-[70%] h-fit flex flex-col items-center gap-[140px] bg-white">
      <div className="w-fit h-fit flex flex-col items-center gap-4">
        <Logo height="40px" text="24px" />
        <DynamicStep number="1" />
      </div>
      <div className="w-[384px] h-fit flex flex-col items-center gap-[24px]">
        <SignUpHeader pic="/Money.png" text="Select base currency" />
        <select className="w-full h-[64px] bg-[#F3F4F6] flex justify-center text-[#1F2937] rounded-md p-3">
          <option value={"MNT"} className="w-full h-full">
            MNT - Mongolian Tugrik
          </option>
        </select>
        <p className="text-[#475569] text-[12px]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </p>
        <Link href={"/thirdstep"} className="w-full h-fit">
          <BigButton text="Confirm" />
        </Link>
      </div>
    </div>
  );
};
