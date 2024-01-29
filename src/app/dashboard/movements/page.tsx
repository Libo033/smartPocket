"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import ExpenseMovement from "@/components/movement/ExpenseMovement";
import IncomeMovement from "@/components/movement/IncomeMovement";
import { MovementContext } from "@/context/MovementsContext";
import { IExpense, IIncome } from "@/libs/interfaces";

const Movements = () => {
  const d = new Date();
  const [date, setDate] = useState<string>(
    d.getFullYear() +
      "-" +
      (d.getMonth() < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1)
  );
  const [income, setIncome] = useState<IIncome[]>([]);
  const [expense, setExpense] = useState<IExpense[]>([]);
  const { incomes, expenses } = useContext(MovementContext);

  useEffect(() => {
    setIncome(
      incomes
        .filter(
          (i) =>
            i.year === parseInt(date.slice(0, 5)) &&
            i.month + 1 === parseInt(date.slice(6, 8))
        )
        .sort((a, b) => b.day - a.day)
    );
    setExpense(
      expenses
        .filter(
          (e) =>
            e.year === parseInt(date.slice(0, 5)) &&
            e.month + 1 === parseInt(date.slice(6, 8))
        )
        .sort((a, b) => b.day - a.day)
    );
  }, [date, incomes, expenses]);

  return (
    <div className={styles.Movements}>
      <div className={styles.Movements_TitleContainer}>
        <h1 className={styles.Movements_Title}>Movimientos</h1>
      </div>
      <div className={styles.Movements_InputContainer}>
        <input
          className={styles.Movements_Input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
          type="month"
          value={date}
        />
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
            <IncomeMovement income={income} />
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
            <ExpenseMovement expense={expense} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movements;
