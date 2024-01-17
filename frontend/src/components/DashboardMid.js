"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
import { useAuth } from "@/app/layout";
import { format } from "date-fns";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const DashboardMid = () => {
  const { dashboardRecords, inputMax, recordAdded } = useAuth();
  const [inEx, setInEx] = useState([]);
  const [month, setMonth] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [example, setExample] = useState([]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "August",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const array = month.forEach((each) => {
      return each;
    });

    setExample(array);
  }, [recordAdded]);

  console.log(example);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: inEx.map((each) => each.in),
        backgroundColor: "rgba(132, 204, 22, 1)",
      },
      {
        label: "Expense",
        data: inEx.map((each) => each.ex),
        backgroundColor: "rgba(249, 115, 22, 1)",
      },
    ],
  };
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-[35px]">
      <div className="w-full h-fit flex flex-col items-center rounded-md bg-[#FFFFFF]">
        <div className="w-full h-fit text-[#0F172A] text-[16px] font-semibold px-6 py-2 flex justify-between">
          <p>Income - Expense</p>
        </div>
        <div className="w-full h-[226px]  flex items-center justify-center">
          <Bar data={data} options={options} />
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
