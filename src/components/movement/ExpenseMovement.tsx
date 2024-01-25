"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import { ICategory, IExpense } from "@/libs/interfaces";
import { CategoryContext } from "@/context/CategoryContext";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const ExpenseMovement = ({
  _id,
  category_id,
  expense,
  year,
  month,
  day,
}: IExpense) => {
  const router: AppRouterInstance = useRouter();
  const [category, setCategory] = useState<ICategory | undefined>();
  const { categories } = useContext(CategoryContext);

  useEffect(() => {
    categories.forEach((c: ICategory) => {
      if (c._id === category_id) {
        setCategory(c);
      }
    });
  }, [categories]);

  return (
    <>
      {category && (
        <div
          className={styles.ExpenseMovement}
          onClick={() => router.push(`/dashboard/movements/expense/${_id}`)}
          style={{
            backgroundColor: category.color + "45",
            border: `1px solid ${category.color}60`,
            boxShadow: `3px 3px 15px ${category.color}72 inset`,
          }}
        >
          <p className={styles.ExpenseMovement_Category}>
            {category.categoria}
          </p>
          <p className={styles.ExpenseMovement_Expense}>
            ${Intl.NumberFormat().format(expense)}
          </p>
        </div>
      )}
    </>
  );
};

export default ExpenseMovement;