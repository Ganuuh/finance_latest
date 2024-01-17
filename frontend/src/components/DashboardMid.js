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
  const [inEx, setInEx] = useState([
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
    { expense: 0, income: 0 },
  ]);
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
    // dashboardRecords.forEach((record) => {
    //   record.type === "income"
    //     ? setInEx(
    //         inEx[Number(format(record.createdAt, "MM")) - 1].income +
    //           Number(record.amount)
    //       )
    //     : setInEx(
    //         inEx[Number(format(record.createdAt, "MM")) - 1].expense +
    //           Number(record.amount)
    //       );
    // });
    dashboardRecords.forEach((records) => {
      // if (records.type === "income") {
      //   setInEx(
      //     (inEx[Number(format(records.createdAt, "MM")) - 1].income += Number(
      //       records.amount
      //     ))
      //   );
      // } else {
      //   setInEx(
      //     (inEx[Number(format(records.createdAt, "MM")) - 1].expense += Number(
      //       records.amount
      //     ))
      //   );
      // }
      records.type === "income"
        ? setInEx(
            (inEx[Number(format(records.createdAt, "MM")) - 1].income += Number(
              records.amount
            ))
          )
        : setInEx(
            (inEx[Number(format(records.createdAt, "MM")) - 1].expense +=
              Number(records.amount))
          );
    });
    console.log(inEx);
  };

  useEffect(() => {
    createData();
  }, [recordAdded]);

  const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: inEx.map((each) => each.income),
        backgroundColor: "rgba(132, 204, 22, 1)",
      },
      {
        label: "Expense",
        data: inEx.map((each) => each.expense),
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
