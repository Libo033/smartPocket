import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { Bar } from "react-chartjs-2";
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

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const BarChart = () => {
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

  return (
    <div className={styles.BarChart}>
      <Bar
        height={window.innerWidth < 640 ? "300px" : undefined}
        options={barChartOpt}
        data={barChartData}
      />
    </div>
  );
};

export default BarChart;
