"use client";
import { useAuth } from "@/app/layout";
import { DashboardCard } from "./DashboardCard";

export const DashboardHead = () => {
  const { totalIncome, totalExpense } = useAuth();
  return (
    <div className="w-full h-fit  grid grid-cols-3 gap-5">
      <div className="h-full rounded-2xl w-full  overflow-hidden">
        <img className="w-full h-full" src="/Noise.png" />
      </div>
      <DashboardCard
        title="Your Income"
        total={totalIncome}
        percentage="32"
        color="#84CC16"
      />
      <DashboardCard
        title="Total expenses"
        total={totalExpense}
        percentage="-32"
        color="#0166FF"
      />
    </div>
  );
};
