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
  const [labels, setLabels] = useState([
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
  ]);
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

  const createData = () => {
    for (let i = 1; i < 13; i++) {
      let array = [];
      dashboardRecords.forEach((record) => {
        if (Number(format(record.createdAt, "MM")) === i) {
          array.push(record);
        }
      });
      console.log(array);
      if (array.length === 0) {
        setExample(example.push({ in: 0, ex: 0 }));
      } else {
        let income = 0;
        let expense = 0;
        dashboardRecords.forEach((each) => {
          each.type === "income"
            ? (income += Number(each.amount))
            : (expense += Number(each.amount));
        });
        setExample(example.push({ in: income, ex: expense }));
      }
    }
    console.log(example);
  };

  useEffect(() => {
    createData();
  }, [recordAdded]);

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
