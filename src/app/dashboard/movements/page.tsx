import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import ExpenseMovement from "@/components/movement/ExpenseMovement";

const Movements = () => {
  return (
    <div className={styles.Movements}>
      <div className={styles.Movements_TitleContainer}>
        <h1 className={styles.Movements_Title}>Movimientos</h1>
      </div>
      <div className={styles.Movements_Container}>
        <div className={styles.Movements_MovContainer}>
          <div className={styles.Movements_MovTitleContainer}>
            <Link
              href={"/dashboard/movements/income/new"}
              className={styles.Movements_MovTitle}
            >
              Ingresos
            </Link>
          </div>
          <div className={styles.Movements_Movements}>
            <span className={styles.Movements_DateSeparator}>15/01/2024</span>
            <span className={styles.Movements_DateSeparator}>12/01/2024</span>
          </div>
        </div>
        <div className={styles.Movements_MovContainer}>
          <div className={styles.Movements_MovTitleContainer}>
            <Link
              href={"/dashboard/movements/expense/new"}
              className={styles.Movements_MovTitle}
            >
              Egresos
            </Link>
          </div>
          <div className={styles.Movements_Movements}>
            <span className={styles.Movements_DateSeparator}>12/01/2024</span>
            <ExpenseMovement
              _id={"1"}
              category_id={"1"}
              expense={120}
              year={2024}
              month={1}
              day={12}
            />
            <ExpenseMovement
              _id={"2"}
              category_id={"2"}
              expense={240}
              year={2024}
              month={1}
              day={12}
            />
            <ExpenseMovement
              _id={"3"}
              category_id={"3"}
              expense={270}
              year={2024}
              month={1}
              day={12}
            />
            <span className={styles.Movements_DateSeparator}>10/01/2024</span>
            <ExpenseMovement
              _id={"4"}
              category_id={"4"}
              expense={120}
              year={2024}
              month={1}
              day={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movements;
