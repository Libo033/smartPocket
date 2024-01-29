import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "./page.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [total, setTotal] = useState<string>("");

  const pieChartData = {
    labels: [
      "Restaurantes",
      "Medicina",
      "Auto",
      "Alimentacion",
      "Vacaciones",
      "Otros",
    ],
    datasets: [
      {
        label: "Total $",
        data: [12000, 1900, 39000, 45000, 3000, 10100],
        backgroundColor: [
          "#8c1d7990",
          "#7cde7990",
          "#FFFB0090",
          "#b9c8f190",
          "#62c0bf90",
          "#43E62F90",
        ],
        borderColor: [
          "#8c1d79",
          "#7cde79",
          "#FFFB00",
          "#b9c8f1",
          "#62c0bf",
          "#43E62F",
        ],
      },
    ],
  };

  useEffect(() => {
    let t = 0;
    pieChartData.datasets[0].data.forEach((a) => (t = a + t));
    setTotal(Intl.NumberFormat().format(t));
  }, []);

  return (
    <div className={styles.PieChart}>
      <Pie data={pieChartData} />
      <span>Total gastado: ${total}</span>
      <div className={styles.PieChart_Info}>
        {pieChartData.labels.map((category, i) => (
          <p
            key={category}
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
            ${Intl.NumberFormat().format(pieChartData.datasets[0].data[i])}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
