"use client";
import { DashboardHead } from "@/components/DashBoardHead";
import { DashboardBottom } from "@/components/DashboardBottom";
import { DashboardMid } from "@/components/DashboardMid";
import { NavBar } from "@/components/NavBar";
import { DashboardContainer } from "@/components/ScreenContainer";
import { useAuth } from "../layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AddRecord } from "@/components/AddRecord";

export default function Home() {
  const { isReady, isLoggedIn, isShown, setIsShown } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (isReady && !isLoggedIn) {
      router.push("/");
    }
  }, [isReady, isLoggedIn]);

  if (!isReady) return null;

  return (
    <>
      <AddRecord />
      <NavBar />
      <div className="w-screen h-fit bg-[#F3F4F6] flex flex-col mt-[70px] px-[120px] py-8 gap-6">
        <DashboardContainer>
          <DashboardHead />
          <DashboardMid />
          <DashboardBottom />
        </DashboardContainer>
      </div>
    </>
  );
}
