import React from "react";
import styles from "../page.module.css";
import Link from "next/link";

const IncomeNew = () => {
  return (
    <div className={styles.Income}>
      <div className={styles.Income_TitleContainer}>
        <h1 className={styles.Income_Title}>Nuevo Ingreso</h1>
      </div>
      <div className={styles.Income_LinkContainer}>
        <Link className="linkA" href={"/dashboard/movements"}>
          Volver
        </Link>
      </div>
    </div>
  );
};

export default IncomeNew;
