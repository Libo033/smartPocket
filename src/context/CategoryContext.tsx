"use client";
import { ICategory, ICategoryContext } from "@/libs/interfaces";
import React, { useEffect, useState, createContext } from "react";

const categoriesDefault: ICategory[] = [
  {
    _id: "1",
    categoria: "Restaurantes",
    color: "#8c1d79",
  },
  {
    _id: "2",
    categoria: "Alimentacion",
    color: "#b9c8f1",
  },
  {
    _id: "3",
    categoria: "Medicina",
    color: "#7cde79",
  },
  {
    _id: "4",
    categoria: "Auto",
    color: "#FFFB00",
  },
];

const defaultValue: ICategoryContext = {
  categories: categoriesDefault,
  load: false,
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
  const [load, setLoad] = useState<boolean>(false);

  const createCategory = (category: string, color: string) => {
    let newCategory: ICategory = {
      _id: (categories.length + 1).toString(),
      categoria: category,
      color: color,
    };

    setCategories([...categories, newCategory]);
  };

  const editCategory = (id: string, category: string, color: string) => {
    let editCategory: ICategory = {
      _id: id,
      categoria: category,
      color: color,
    };

    setCategories([...categories.filter((c) => c._id !== id), editCategory]);
  };

  const deleteCategory = (id: string) => {
    setCategories(categories.filter((c) => c._id !== id));
  };

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <CategoryContext.Provider
      value={{ categories, load, createCategory, editCategory, deleteCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
