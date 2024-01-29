"use client";
import React, {
  FormEvent,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { MovementContext } from "@/context/MovementsContext";
import { CategoryContext } from "@/context/CategoryContext";
import { IExpense } from "@/libs/interfaces";

const ExpenseForm: React.FC<{ id: string | null }> = ({ id }) => {
  const router: AppRouterInstance = useRouter();
  const { expenses, createExpense, editExpense, deleteExpense } =
    useContext(MovementContext);
  const { categories, load } = useContext(CategoryContext);
  const [expense, setExpense] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const $expense = useId();
  const $date = useId();
  const $category = useId();

  const handleExpenseOptions = (e: FormEvent) => {
    e.preventDefault();

    if (id) {
      const date: string = (document.getElementById($date) as HTMLInputElement)
        .value;
      let y: number = parseInt(date.slice(0, 4));
      let m: number = parseInt(date.slice(5, 7));
      let d: number = parseInt(date.slice(8, 10));

      const expenseToEdit: IExpense = {
        _id: id,
        category_id: category,
        expense,
        day: d,
        month: m - 1,
        year: y,
      };

      if (expense > 0) {
        editExpense(expenseToEdit);
      }
    } else {
      const date: string = (document.getElementById($date) as HTMLInputElement)
        .value;
      let y: number = parseInt(date.slice(0, 4));
      let m: number = parseInt(date.slice(5, 7));
      let d: number = parseInt(date.slice(8, 10));

      if (expense > 0) {
        createExpense(category, expense, d, m - 1, y);
      }
    }

    router.push("/dashboard/movements");
  };

  const handleDeleteExpense = (id: string) => {
    deleteExpense(id);
    router.push("/dashboard/movements");
  };

  useEffect(() => {
    if ((document.getElementById($date) as HTMLInputElement) && id === null) {
      (document.getElementById($date) as HTMLInputElement).valueAsDate =
        new Date();
    }
    if (id) {
      expenses.forEach((e) => {
        if (id === e._id) {
          setExpense(e.expense);
          setCategory(e.category_id);
          (document.getElementById($date) as HTMLInputElement).value =
            e.year +
            "-" +
            (e.month < 10 ? "0" + (e.month + 1) : e.month + 1) +
            "-" +
            (e.day < 10 ? "0" + e.day : e.day);
        }
      });
    }
  }, []);

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
      <div className={styles.ExpenseForm_Container}>
        <label htmlFor={$category}>Categoria</label>
        <select
          id={$category}
          value={category}
          onChange={(e) => setCategory(e.target.value as string)}
        >
          {load &&
            categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.categoria}
              </option>
            ))}
        </select>
      </div>
      <div className={styles.ExpenseForm_ButtonGroup}>
        {id ? (
          <>
            <button type="submit" className={styles.ExpenseForm_Edit}>
              EDITAR
            </button>
            <button
              type="button"
              onClick={() => handleDeleteExpense(id)}
              className={styles.ExpenseForm_Delete}
            >
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
