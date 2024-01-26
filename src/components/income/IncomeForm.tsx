"use client";
import React, { useContext, useEffect, useId, useState } from "react";
import styles from "./page.module.css";
import { MovementContext } from "@/context/MovementsContext";
import { IIncome } from "@/libs/interfaces";

const IncomeForm: React.FC<{ id: string | null }> = ({ id }) => {
  const { incomes } = useContext(MovementContext);
  const [income, setIncome] = useState<number>(0);
  const $income = useId();
  const $date = useId();

  useEffect(() => {
    if ((document.getElementById($date) as HTMLInputElement) && id === null) {
      (document.getElementById($date) as HTMLInputElement).valueAsDate =
        new Date();
    }
    if (id) {
      incomes.forEach((i) => {
        if (id === i._id) {
          setIncome(i.income);
          (document.getElementById($date) as HTMLInputElement).value =
            i.year +
            "-" +
            (i.month < 10 ? "0" + (i.month + 1) : i.month + 1) +
            "-" +
            (i.day < 10 ? "0" + i.day : i.day);
        }
      });
    }
  }, []);

  return (
    <form className={styles.IncomeForm} action="post">
      <div className={styles.IncomeForm_InputsContainer}>
        <div className={styles.IncomeForm_Container}>
          <label htmlFor={$income}>Ingreso $</label>
          <input
            type="number"
            id={$income}
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
          />
        </div>
        <div className={styles.IncomeForm_Container}>
          <label htmlFor={$date}>Fecha</label>
          <input type="date" id={$date} />
        </div>
      </div>
      <div className={styles.IncomeForm_ButtonGroup}>
        {id ? (
          <button className={styles.IncomeForm_Create}>CREAR</button>
        ) : (
          <>
            <button className={styles.IncomeForm_Edit}>EDITAR</button>
            <button className={styles.IncomeForm_Delete}>ELIMINAR</button>
          </>
        )}
      </div>
    </form>
  );
};

export default IncomeForm;
