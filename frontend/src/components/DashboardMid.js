"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const DashboardMid = () => {
  // const chartData = ["Zail", "hu"];
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-[35px]">
      <div className="w-full h-fit flex flex-col items-center rounded-md bg-[#FFFFFF]">
        <div className="w-full h-fit text-[#0F172A] text-[16px] font-semibold px-6 py-2 flex justify-between">
          <p>Income - Expense</p>
        </div>
        <div className="w-full h-[226px]">
          {/* <Doughnut data={chartData} /> */}
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center rounded-md bg-[#FFFFFF]">
        <div className="w-full h-fit text-[#0F172A] text-[16px] font-semibold px-6 py-2 flex justify-between">
          <p>Income - Expense</p>
          <p className="text-[#6B7280] text-[16px]">Jun 1 - Nov 30</p>
        </div>
        <div className="w-full h-[226px]"></div>
      </div>
    </div>
  );
};
