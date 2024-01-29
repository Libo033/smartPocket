import React from "react";
import styles from "../page.module.css";
import Link from "next/link";
import ExpenseForm from "@/components/expense/ExpenseForm";

const ExpenseNew = () => {
  return (
    <div className={styles.Expense}>
      <div className={styles.Expense_TitleContainer}>
        <h1 className={styles.Expense_Title}>Nuevo Egreso</h1>
      </div>
      <div className={styles.Expense_LinkContainer}>
        <Link className="linkA" href={"/dashboard/movements"}>
          Volver
        </Link>
      </div>
      <div>
        <ExpenseForm id={null} />
      </div>
    </div>
  );
};

export default ExpenseNew;
