import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "./page.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [total, setTotal] = useState<number>(0);

  const pieChartData = {
    labels: ["Restaurantes", "Medicina", "Auto", "Alimentacion"],
    datasets: [
      {
        label: "Total $",
        data: [12000, 1900, 39000, 45000],
        backgroundColor: ["#8c1d7990", "#7cde7990", "#FFFB0090", "#b9c8f190"],
        borderColor: ["#8c1d79", "#7cde79", "#FFFB00", "#b9c8f1"],
      },
    ],
  };

  useEffect(() => {
    let t = 0;
    pieChartData.datasets[0].data.forEach((a) => (t = a + t));
    setTotal(t);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Pie data={pieChartData} />
      <span style={{ fontSize: "24px" }}>Total gastado: ${total}</span>
      <div style={{ width: "90%" }}>
        {pieChartData.labels.map((category, i) => (
          <p
            style={{
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "9px",
            }}
          >
            <b>{category}:</b>
            <span
              style={{ borderBottom: "1px dotted gray", width: "100%" }}
            ></span>
            ${pieChartData.datasets[0].data[i]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
