"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./page.module.css";
import ChartInput from "@/components/chart/ChartInput";
import PieChart from "@/components/chart/PieChart";
import BarChart from "@/components/chart/BarChart";
import { SelectChangeEvent } from "@mui/material";

const Chart = () => {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [chart, setChart] = useState<"none" | "pie" | "bar" | "error">("none");
  const [error, setError] = useState<Error | undefined>(undefined);

  const yearSetter = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value as string);
    if (parseInt(e.target.value) < 2000) {
      setError(new Error("", { cause: "YearInput" }));
    } else {
      setError(undefined);
    }
  };

  const monthSetter = (e: SelectChangeEvent) => {
    setMonth(e.target.value as string);
    setError(undefined);
  };

  const handleChart = () => {
    if (year && month) {
      if (month === "anual") {
        setChart("bar");
      } else {
        setChart("pie");
      }

      setError(undefined);
    } else {
      setError(new Error("", { cause: "EmptyPetition" }));
    }
  };

  return (
    <div className="page">
      <div className="h1_container">
        <h1>Graficos</h1>
      </div>
      <div className={styles.Chart_InputContainer}>
        <ChartInput
          month={month}
          setMonth={monthSetter}
          year={year}
          setYear={yearSetter}
          handleChart={handleChart}
          error={error}
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
