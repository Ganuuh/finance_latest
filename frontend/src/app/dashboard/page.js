"use client";
import { DashboardHead } from "@/components/DashBoardHead";
import { DashboardBottom } from "@/components/DashboardBottom";
import { DashboardMid } from "@/components/DashboardMid";
import { NavBar } from "@/components/NavBar";
import { DashboardContainer } from "@/components/ScreenContainer";
import { useAuth } from "../layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AddRecord } from "@/components/AddRecord";
import { AddCategory } from "@/components/AddCategory";
import {
  DeleteBanner,
  DeleteBannerCategory,
  DeleteBannerRecord,
} from "@/components/DeleteBanner";

export default function Home() {
  const { isReady, isLoggedIn, records, setTotalIncome, setTotalExpense } =
    useAuth();

  const router = useRouter();
  useEffect(() => {
    if (isReady && !isLoggedIn) {
      router.push("/");
    }
  }, [isReady, isLoggedIn]);

  useEffect(() => {
    let income = 0;
    let expense = 0;
    records.forEach((each) => {
      each.type === "expense"
        ? (expense -= parseInt(each.amount))
        : (income += parseInt(each.amount));
    });
    setTotalExpense(expense);
    setTotalIncome(income);
  }, [records]);

  if (!isReady) return null;

  return (
    <>
      <DeleteBannerRecord />
      <DeleteBannerCategory />
      <AddRecord />
      <AddCategory />
      <NavBar />
      <div className="w-screen bg-[#F3F4F6] h-fit">
        <DashboardContainer>
          <DashboardHead />
          <DashboardMid />
          <DashboardBottom />
        </DashboardContainer>
      </div>
    </>
  );
}
