"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import ChartInput from "@/components/chart/ChartInput";
import PieChart from "@/components/chart/PieChart";
import BarChart from "@/components/chart/BarChart";

const Chart = () => {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [chart, setChart] = useState<"none" | "pie" | "bar">("none");

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
        <h1 className={styles.Chart_Title}>Graficos</h1>
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
            <BarChart />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;
