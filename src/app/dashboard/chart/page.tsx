"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import ChartInput from "@/components/chart/ChartInput";

const Chart = () => {
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

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
        />
      </div>
    </div>
  );
};

export default Chart;
