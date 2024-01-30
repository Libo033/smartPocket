"use client";
import React from "react";
import styles from "@/app/dashboard/page.module.css";
import Link from "next/link";
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

const Dashboard = () => {
  let barChartOpt = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Gastos",
      },
    },
  };

  let barChartData = {
    labels: ["auto", "alimentacion", "restaurantes", "varios", "casa"],
    datasets: [
      {
        label: "Ingresos $",
        data: [120000, 90000, 120000, 99000, 180000],
        borderColor: "#70FF00",
        backgroundColor: "#70FF0090",
      },
    ],
  };

  return (
    <div className="page">
      <div className="h1_container">
        <h1>Tablero</h1>
      </div>
      <div className={styles.Dashboard_LinkContainer}>
        <Link className="linkA" href={"/dashboard/movements/income/new"}>
          Nuevo Ingreso
        </Link>
        <Link className="linkA" href={"/dashboard/movements/expense/new"}>
          Nuevo Egreso
        </Link>
      </div>
      <div className={styles.Dashboard_ChartContainer}>
        <Bar options={barChartOpt} data={barChartData} />
        <div className={styles.Dashboard_IncomeMonth}>
          <h3>Ingresos del mes actual</h3>
          <p>total: $30.000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
