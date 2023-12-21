"use client";
import { DashboardHead } from "@/components/DashBoardHead";
import { DashboardBottom } from "@/components/DashboardBottom";
import { DashboardMid } from "@/components/DashboardMid";
import { NavBar } from "@/components/NavBar";
import { DashboardContainer } from "@/components/ScreenContainer";
import { useAuth } from "../layout";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { isLoggedIn } = useAuth();
  const [color, setColor] = useState(false);
  const router = useRouter();
  // if (!isLoggedIn) {
  //   router.push("/");
  //   return;
  // }
  return (
    <>
      <NavBar />
      <div className="w-screen h-fit bg-[#F3F4F6] flex flex-col mt-[70px] px-[120px] py-8 gap-6">
        <DashboardContainer>
          <div
            className={`w-screen h-screen flex items-center fixed justify-center top-0 right-0 bg-[#00000080] z-20`}
          >
            <div className="w-[800px] h-fit flex flex-col items-center justify-center bg-white rounded-md">
              <div className="w-full h-fit flex justify-between items-center px-6 py-5">
                <p className="w-fit h-fit text-black text-[20px] font-semibold">
                  Add Record
                </p>
                <p className="w-fit h-fit text-black font-semibold text-[20px]">
                  X
                </p>
              </div>
              <div className="w-full h-fit flex">
                {/* Left div */}
                <div className="w-[50%] h-fit flex flex-col items-center gap-5 p-4">
                  {/* Income and Expense */}
                  <div className="w-full h-full flex gap-5 p-4 rounded-full bg-[#F3F4F6]">
                    <p
                      onClick={() => {
                        setColor(true);
                      }}
                      className={`w-[50%] h-full flex items-center justify-center rounded-full   ${
                        color
                          ? "text-[#ffffff]  bg-[#0166FF]"
                          : "text-[#000000] bg-[#F3F4F6]"
                      }`}
                    >
                      Expense
                    </p>
                    <p
                      onClick={() => {
                        setColor(false);
                      }}
                      className={`w-[50%] h-full flex items-center justify-center rounded-full   ${
                        color
                          ? "text-[#000000] bg-[#F3F4F6]"
                          : "text-[#ffffff]  bg-[#16A34A]"
                      }`}
                    >
                      Income
                    </p>
                  </div>
                </div>
                {/* Right Div */}
                <div className="w-[50%]"></div>
              </div>
            </div>
          </div>
          <DashboardHead />
          <DashboardMid />
          <DashboardBottom />
        </DashboardContainer>
      </div>
    </>
  );
}
