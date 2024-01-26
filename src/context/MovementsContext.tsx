"use client";
import { IExpense, IIncome, IMovementsContext } from "@/libs/interfaces";
import React, { useEffect, useState, createContext } from "react";

let defIncome: IIncome[] = [
  {
    _id: "1",
    income: 30000,
    day: 26,
    month: 0,
    year: 2024,
  },
  {
    _id: "2",
    income: 15000,
    day: 16,
    month: 0,
    year: 2024,
  },
  {
    _id: "3",
    income: 1500,
    day: 26,
    month: 0,
    year: 2024,
  }
];

let defExpense: IExpense[] = [
  {
    _id: "1",
    category_id: "2",
    expense: 3000,
    day: 20,
    month: 0,
    year: 2024,
  },
  {
    _id: "2",
    category_id: "4",
    expense: 45000,
    day: 1,
    month: 0,
    year: 2024,
  },
  {
    _id: "3",
    category_id: "2",
    expense: 4500,
    day: 12,
    month: 0,
    year: 2024,
  },
];

const defaultValue: IMovementsContext = {
  incomes: defIncome,
  expenses: defExpense,
  load: false,
  createIncome: () => {},
  createExpense: () => {},
  editIncome: () => {},
  editExpense: () => {},
  deleteIncome: () => {},
  deleteExpense: () => {},
};

export const MovementContext: React.Context<IMovementsContext> =
  createContext(defaultValue);

export const MovementContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [incomes, setIncomes] = useState<IIncome[]>(defIncome);
  const [expenses, setExpenses] = useState<IExpense[]>(defExpense);
  const [load, setLoad] = useState<boolean>(false);

  const createIncome = (
    income: number,
    day: number,
    month: number,
    year: number
  ): void => {
    let newIncome: IIncome = {
      _id: (incomes.length + 1).toString(),
      income,
      day,
      month,
      year,
    };

    setIncomes([...incomes, newIncome]);
  };

  const editIncome = (income: IIncome): void => {
    setIncomes([...incomes.filter((i) => i._id !== income._id), income]);
  };

  const deleteIncome = (id: string): void => {
    setIncomes(incomes.filter((i) => i._id !== id));
  };

  const createExpense = (
    category_id: string,
    expense: number,
    day: number,
    month: number,
    year: number
  ): void => {
    let newExpense: IExpense = {
      _id: (expenses.length + 1).toString(),
      category_id,
      expense,
      day,
      month,
      year,
    };

    setExpenses([...expenses, newExpense]);
  };

  const editExpense = (expense: IExpense): void => {
    setExpenses([...expenses.filter((e) => e._id !== expense._id), expense]);
  };

  const deleteExpense = (id: string): void => {
    setExpenses(expenses.filter((e) => e._id !== id));
  };

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <MovementContext.Provider
      value={{
        incomes,
        expenses,
        load,
        createIncome,
        createExpense,
        editIncome,
        editExpense,
        deleteIncome,
        deleteExpense,
      }}
    >
      {children}
    </MovementContext.Provider>
  );
};
