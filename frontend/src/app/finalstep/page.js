import { BigButton } from "@/components/BigButton";
import { Container } from "@/components/Container";
import { DynamicStep } from "@/components/DynamicStep";
import { Logo } from "@/components/Logo";
import { SignUpHeader } from "@/components/SignUpHeader";
import Link from "next/link";

export default function FinalStep() {
  return (
    <Container>
      <div className="w-[70%] h-fit flex flex-col items-center gap-[140px]">
        <div className="w-fit h-fit flex flex-col items-center gap-4">
          <Logo height="40px" text="24px" />
          <DynamicStep number="3" />
        </div>
        <div className="w-[384px] h-fit flex flex-col items-center gap-[24px]">
          <SignUpHeader pic="/Check.png" text="Good Job!" />
          <p className="text-[#475569] text-[12px] self-start text-center">
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
          <Link href={"/dashboard"} className="w-full h-fit">
            <BigButton text="Go To Dashboard" />
          </Link>
        </div>
      </div>
    </Container>
  );
}
