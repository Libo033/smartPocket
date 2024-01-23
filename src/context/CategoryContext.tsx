"use client";
import { ICategory, ICategoryContext } from "@/libs/interfaces";
import React, { useEffect, useState, createContext } from "react";

const categoriesDefault: ICategory[] = [
  {
    _id: "123",
    categoria: "Restaurantes",
    color: "#8c1d79",
  },
  {
    _id: "1234",
    categoria: "Alimentacion",
    color: "#b9c8f1",
  },
  {
    _id: "12",
    categoria: "Medicina",
    color: "#7cde79",
  },
  {
    _id: "1",
    categoria: "Auto",
    color: "#FFFB00",
  },
];

const defaultValue: ICategoryContext = {
  categories: categoriesDefault,
  createCategory: null,
  editCategory: null,
  deleteCategory: null,
};

export const CategoryContext: React.Context<ICategoryContext> =
  createContext(defaultValue);

export const CategoryContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [categories, setCategories] = useState<ICategory[]>(categoriesDefault);

  const createCategory = () => {};
  const editCategory = () => {};
  const deleteCategory = () => {};

  return (
    <CategoryContext.Provider
      value={{ categories, createCategory, editCategory, deleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
