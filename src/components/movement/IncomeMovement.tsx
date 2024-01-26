"use client";
import { IIncome } from "@/libs/interfaces";
import React, { Fragment } from "react";
import styles from "./page.module.css";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const IncomeMovementItem = ({ _id, income }: IIncome) => {
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

const IncomeMovement: React.FC<{ income: IIncome[] }> = ({ income }) => {
  return (
    <>
      {income.length > 0 ? (
        income.map((i, index) => (
          <Fragment key={"inc" + i._id}>
            {index === 0 || i.day !== income[index - 1].day ? (
              <>
                <span className={styles.Movement_DateSeparator}>
                  {i.day < 10 ? "0" + i.day : i.day}/
                  {i.month + 1 < 10 ? "0" + (i.month + 1) : i.month}/{i.year}
                </span>
                <IncomeMovementItem {...i} />
              </>
            ) : (
              <>
                <IncomeMovementItem {...i} />
              </>
            )}
          </Fragment>
        ))
      ) : (
        <p style={{ textAlign: "center", color: "gray", marginTop: "18px" }}>
          Sin movimientos
        </p>
      )}
    </>
  );
};

export default IncomeMovement;
