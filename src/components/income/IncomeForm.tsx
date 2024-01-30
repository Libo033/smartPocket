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
import { TextField } from "@mui/material";

const IncomeForm: React.FC<{ id: string | null }> = ({ id }) => {
  const router: AppRouterInstance = useRouter();
  const { incomes, createIncome, editIncome, deleteIncome } =
    useContext(MovementContext);
  const [income, setIncome] = useState<number>(0);
  const [error, setError] = useState<Error | undefined>(undefined);
  const $income = useId();
  const $date = useId();

  const handleIncomeOptions = (e: FormEvent) => {
    try {
      e.preventDefault();

      const date: string = (document.getElementById($date) as HTMLInputElement)
        .value;
      let y: number = parseInt(date.slice(0, 4));
      let m: number = parseInt(date.slice(5, 7));
      let d: number = parseInt(date.slice(8, 10));

      if (y < 2000) {
        throw new Error("Ingrese un año posterior al 2000.", {
          cause: "YearTooOld",
        });
      }

      if (id) {
        const incomeToEdit: IIncome = {
          _id: id,
          income,
          day: d,
          month: m - 1,
          year: y,
        };
        if (income > 0) {
          editIncome(incomeToEdit);
        } else {
          throw new Error("", { cause: "IncomeNegative" });
        }
      } else {
        if (income > 0) {
          createIncome(income, d, m - 1, y);
        } else {
          throw new Error("", { cause: "IncomeNegative" });
        }
      }

      router.push("/dashboard/movements");
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
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
          <TextField
            label="Ingreso $"
            type="number"
            id={$income}
            value={income}
            onChange={(e) => {
              setIncome(parseFloat(e.target.value));
              setError(undefined);
            }}
            error={error?.cause === "IncomeNegative"}
            required
          />
        </div>
        <div className={styles.IncomeForm_Container}>
          <TextField
            type="date"
            id={$date}
            error={error?.cause === "YearTooOld"}
            onChange={() => setError(undefined)}
            helperText={error?.message}
            required
          />
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
