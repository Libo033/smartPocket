import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import IncomeForm from "@/components/income/IncomeForm";

const IncomeNew = () => {
  return (
    <div className="page">
      <div className="h1_container">
        <h1>Nuevo Ingreso</h1>
      </div>
      <div className={styles.Income_LinkContainer}>
        <Link className="linkA" href={"/dashboard/movements"}>
          Volver
        </Link>
      </div>
      <div>
        <IncomeForm id={null} />
      </div>
    </div>
  );
};

export default IncomeNew;
