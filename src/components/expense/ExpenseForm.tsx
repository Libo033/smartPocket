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
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

const ExpenseForm: React.FC<{ id: string | null }> = ({ id }) => {
  const router: AppRouterInstance = useRouter();
  const { expenses, createExpense, editExpense, deleteExpense } =
    useContext(MovementContext);
  const { categories, load } = useContext(CategoryContext);
  const [expense, setExpense] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [error, setError] = useState<Error | undefined>(undefined);
  const $expense = useId();
  const $date = useId();
  const $category = useId();

  const handleExpenseOptions = (e: FormEvent) => {
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
        } else {
          throw new Error("", { cause: "ExpenseNegative" });
        }
      } else {
        if (expense > 0) {
          createExpense(category, expense, d, m - 1, y);
        } else {
          throw new Error("", { cause: "ExpenseNegative" });
        }
      }

      router.push("/dashboard/movements");
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
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
          <TextField
            label="Egreso $"
            type="number"
            id={$expense}
            value={expense}
            onChange={(e) => {
              setExpense(parseFloat(e.target.value));
              setError(undefined);
            }}
            error={error?.cause === "ExpenseNegative"}
            required
          />
        </div>
        <div className={styles.ExpenseForm_Container}>
          <TextField
            label="Fecha"
            type="date"
            id={$date}
            error={error?.cause === "YearTooOld"}
            onChange={() => setError(undefined)}
            helperText={error?.message}
            required
          />
        </div>
      </div>
      <div className={styles.ExpenseForm_Container}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
          <Select
            style={{ width: "calc(100% - 9px)" }}
            id={$category}
            value={category}
            label="Categoria"
            onChange={(e: SelectChangeEvent) =>
              setCategory(e.target.value as string)
            }
            required
          >
            {load &&
              categories.length > 0 &&
              categories.map((c) => (
                <MenuItem key={c._id} value={c._id}>
                  {c.categoria}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
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
