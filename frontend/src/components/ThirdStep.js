"use client";
import { BigButton } from "./BigButton";
import { DynamicStep } from "./DynamicStep";
import { Logo } from "./Logo";
import { SignUpHeader } from "./SignUpHeader";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const ThirdStep = () => {
  const [amount, setAmount] = useState("");
  const router = useRouter();
  const clickHandler = () => {
    amount === "" ? alert("Amount is empty") : router.push("/finalstep");
  };
  return (
    <div className="w-[70%] h-fit flex flex-col items-center gap-[140px]">
      <div className="w-fit h-fit flex flex-col items-center gap-4">
        <Logo height="40px" text="24px" />
        <DynamicStep number="2" />
      </div>
      <div className="w-[384px] h-fit flex flex-col items-center gap-[24px]">
        <SignUpHeader pic="/Coins.png" text="Set up your cash Balance" />
        <input
          className="w-full h-[48px] bg-[#F3F4F6] text-black border-[1px] rounded-md border-[#D1D5DB] px-3"
          placeholder="Amout"
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        ></input>
        <p className="text-[#475569] text-[12px] self-start">
          How much cash do you have in your wallet?
        </p>
        <div
          className="w-full"
          onClick={() => {
            clickHandler();
          }}
        >
          <BigButton text="Confirm" />
        </div>
      </div>
    </div>
  );
};
