"use client";
import { IIncome } from "@/libs/interfaces";
import React from "react";
import styles from "./page.module.css";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const IncomeMovement = ({ _id, income, day, month, year }: IIncome) => {
  const router: AppRouterInstance = useRouter();

  return (
    <div
      onClick={() => router.push(`/dashboard/movements/income/${_id}`)}
      className={styles.IncomeMovement}
    >
      <p className={styles.IncomeMovement_Inc}>Ingreso</p>
      <p className={styles.IncomeMovement_Total}>
        ${Intl.NumberFormat().format(income)}
      </p>
    </div>
  );
};

export default IncomeMovement;
