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

import { Bar, Doughnut } from "react-chartjs-2";
import { useAuth } from "@/app/layout";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { api } from "@/common";

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
  const { dashboardRecords, inputMax, recordAdded, categoryAdded } = useAuth();
  const [inEx, setInEx] = useState([
    { expense: 0, income: 1000 },
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
    { expense: 300, income: 100 },
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

  const [categories, setCategories] = useState([]);

  const [categoryLabel, setClabel] = useState([]);

  const [number, setNumber] = useState(5);

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

  // const createData = () => {
  //   dashboardRecords.forEach((records) => {
  //     records.type === "income"
  //       ? setInEx(
  //           (inEx[Number(format(records.createdAt, "MM")) - 1].income += Number(
  //             records.amount
  //           ))
  //         )
  //       : setInEx(
  //           (inEx[Number(format(records.createdAt, "MM")) - 1].expense +=
  //             Number(records.amount))
  //         );
  //   });
  //   console.log(inEx);
  // };

  // useEffect(() => {
  //   createData();
  // }, [recordAdded]);

  // const getCategory = async () => {
  //   try {
  //     const res = await api.get("/get-categories", {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     });

  //     setCategories(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    labelCreater();
  }, [recordAdded]);

  const labelCreater = () => {
    // let array = [];
    for (let i = 0; i < dashboardRecords.length; i++) {
      let count = 0;
      for (let j = 0; j < dashboardRecords.length; j++) {
        dashboardRecords[i].category.name === dashboardRecords[j].category.name
          ? count++
          : null;
      }
      if (categoryLabel.length === 0) {
        setClabel(
          categoryLabel.push({
            name: dashboardRecords[i].category.name,
            c: count,
          })
        );
      } else {
        categoryLabel.forEach((each) => {
          if (each.name === dashboardRecords[i].category.name) {
            return;
          }
        });
      }
    }
    // categoryLabel.forEach((each) => {
    //   if (!array.includes(each)) {
    //     array.push(each);
    //   }
    // });
    // console.log(array, "ARRAY");

    let array = [{ name: "Books", c: 8 }];
    console.log(categoryLabel[0]);
    console.log(array[0].name.includes(categoryLabel[0].name));
  };

  const barData = {
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
  // const doughnutData = {
  //   labels,
  // };
  return (
    <div className="w-full h-fit grid grid-cols-2 gap-[35px]">
      <div className="w-full h-fit flex flex-col items-center rounded-md bg-[#FFFFFF]">
        <div className="w-full h-fit text-[#0F172A] text-[16px] font-semibold px-6 py-2 flex justify-between">
          <p>Income - Expense</p>
        </div>
        <div className="w-full h-[226px]  flex items-center justify-center">
          <Bar data={barData} options={options} />
        </div>
      </div>
      <div className="w-full h-fit flex flex-col items-center rounded-md bg-[#FFFFFF]">
        <div className="w-full h-fit text-[#0F172A] text-[16px] font-semibold px-6 py-2 flex justify-between">
          <p>Income - Expense</p>
          <p className="text-[#6B7280] text-[16px]">Jun 1 - Nov 30</p>
        </div>
        <div className="w-full h-[226px]">
          {/* <Doughnut data={doughnutData} options={options} /> */}
        </div>
      </div>
    </div>
  );
};
