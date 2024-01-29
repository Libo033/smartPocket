"use client";
import React, {
  FormEvent,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import styles from "./page.module.css";
import { MovementContext } from "@/context/MovementsContext";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IIncome } from "@/libs/interfaces";

const IncomeForm: React.FC<{ id: string | null }> = ({ id }) => {
  const router: AppRouterInstance = useRouter();
  const { incomes, createIncome, editIncome, deleteIncome } =
    useContext(MovementContext);
  const [income, setIncome] = useState<number>(0);
  const $income = useId();
  const $date = useId();

  const handleIncomeOptions = (e: FormEvent) => {
    e.preventDefault();

    if (id) {
      const date: string = (document.getElementById($date) as HTMLInputElement)
        .value;
      let y: number = parseInt(date.slice(0, 4));
      let m: number = parseInt(date.slice(5, 7));
      let d: number = parseInt(date.slice(8, 10));

      const incomeToEdit: IIncome = {
        _id: id,
        income,
        day: d,
        month: m - 1,
        year: y,
      };

      editIncome(incomeToEdit);
    } else {
      const date: string = (document.getElementById($date) as HTMLInputElement)
        .value;
      let y: number = parseInt(date.slice(0, 4));
      let m: number = parseInt(date.slice(5, 7));
      let d: number = parseInt(date.slice(8, 10));

      if (income > 0) {
        createIncome(income, d, m - 1, y);
      }
    }

    router.push("/dashboard/movements");
  };

  const handleDeleteIncome = (id: string) => {
    deleteIncome(id);
    router.push("/dashboard/movements");
  };

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
    <form
      className={styles.IncomeForm}
      onSubmit={(Event: FormEvent) => handleIncomeOptions(Event)}
      action="post"
    >
      <div className={styles.IncomeForm_InputsContainer}>
        <div className={styles.IncomeForm_Container}>
          <label htmlFor={$income}>Ingreso $</label>
          <input
            type="number"
            id={$income}
            value={income}
            onChange={(e) => setIncome(parseFloat(e.target.value))}
            required
          />
        </div>
        <div className={styles.IncomeForm_Container}>
          <label htmlFor={$date}>Fecha</label>
          <input type="date" id={$date} required />
        </div>
      </div>
      <div className={styles.IncomeForm_ButtonGroup}>
        {id ? (
          <>
            <button type="submit" className={styles.IncomeForm_Edit}>
              EDITAR
            </button>
            <button
              type="button"
              onClick={() => handleDeleteIncome(id)}
              className={styles.IncomeForm_Delete}
            >
              ELIMINAR
            </button>
          </>
        ) : (
          <button type="submit" className={styles.IncomeForm_Create}>
            CREAR
          </button>
        )}
      </div>
    </form>
  );
};

export default IncomeForm;
