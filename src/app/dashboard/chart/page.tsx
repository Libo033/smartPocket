"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import ChartInput from "@/components/chart/ChartInput";
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
import PieChart from "@/components/chart/PieChart";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Chart = () => {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [chart, setChart] = useState<"none" | "pie" | "bar">("none");

  let barChartOpt = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  let barChartData = {
    labels: [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ],
    datasets: [
      {
        label: "Ingresos $",
        data: [
          120000, 90000, 120000, 99000, 240000, 270000, 151000, 0, 100000,
          111000, 10000, 90000,
        ],
        borderColor: "#70FF00",
        backgroundColor: "#70FF0090",
      },
      {
        label: "Gastos $",
        data: [
          100000, 100000, 90000, 120000, 100000, 120000, 90000, 85000, 77000,
          89000, 130000, 90800,
        ],
        borderColor: "#FF2D00",
        backgroundColor: "#FF2D0090",
      },
    ],
  };

  const handleChart = () => {
    if (year && month) {
      if (month === "anual") {
        setChart("bar");
      } else {
        setChart("pie");
      }
    } else {
      setChart("none");
    }
  };

  return (
    <div className={styles.Chart}>
      <div className={styles.Chart_TitleContainer}>
        <h1 className={styles.Chart_Title}>Chart</h1>
      </div>
      <div className={styles.Chart_InputContainer}>
        <ChartInput
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          handleChart={handleChart}
        />
      </div>
      <div className={styles.Chart_ChartContainer}>
        {chart === "none" && <div className={styles.Chart_Chart}></div>}
        {chart === "pie" && (
          <div className={styles.Chart_Pie}>
            <PieChart />
          </div>
        )}
        {chart === "bar" && (
          <div className={styles.Chart_Bar}>
            <Bar options={barChartOpt} data={barChartData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;
