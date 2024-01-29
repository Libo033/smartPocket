"use client";
import React, { FormEvent, useContext, useId, useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MovementContext } from "@/context/MovementsContext";

const ExpenseForm: React.FC<{ id: string | null }> = ({ id }) => {
  const router: AppRouterInstance = useRouter();
  const { expenses, createExpense, editExpense, deleteExpense } =
    useContext(MovementContext);
  const [expense, setExpense] = useState<number>(0);
  const $expense = useId();
  const $date = useId();

  const handleExpenseOptions = (e: FormEvent) => {
    e.preventDefault();

    if (id) {
    } else {
    }

    router.push("/dashboard/movements");
  };

  const handleDeleteExpense = (id: string) => {

    router.push("/dashboard/movements");
  };

  return (
    <form
      className={styles.ExpenseForm}
      onSubmit={(Event: FormEvent) => handleExpenseOptions(Event)}
      action="post"
    >
      <div className={styles.ExpenseForm_InputsContainer}>
        <div className={styles.ExpenseForm_Container}>
          <label htmlFor={$expense}>Egreso $</label>
          <input
            type="number"
            id={$expense}
            value={expense}
            onChange={(e) => setExpense(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className={styles.ExpenseForm_Container}>
          <label htmlFor={$date}>Fecha</label>
          <input type="date" id={$date} required />
        </div>
      </div>
      <div className={styles.ExpenseForm_ButtonGroup}>
        {id ? (
          <>
            <button type="submit" className={styles.ExpenseForm_Edit}>
              EDITAR
            </button>
            <button type="button" onClick={() => handleDeleteExpense(id)} className={styles.ExpenseForm_Delete}>
              ELIMINAR
            </button>
          </>
        ) : (
          <button type="submit" className={styles.ExpenseForm_Create}>
            CREAR
          </button>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
