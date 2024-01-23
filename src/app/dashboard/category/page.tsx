"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import CategoryCard from "@/components/category/CategoryCard";
import { ICategory } from "@/libs/interfaces";
import CategoryCardPlaceholder from "@/components/category/CategoryCardPlaceholder";

const Category = () => {
  const [category, setCategory] = useState<ICategory[]>([]);
  const [load, setLoad] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    let data: ICategory[] = [
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

    setCategory(data);
    setLoad(true);

    return () => controller.abort();
  }, []);

  return (
    <div className={styles.Category}>
      <div className={styles.Category_TitleContainer}>
        <h1 className={styles.Category_Title}>Categorias</h1>
      </div>
      <div className={styles.Category_LinkContainer}>
        <Link className="linkA" href={"/dashboard/category/new"}>
          Crear categoria
        </Link>
      </div>
      <section className={styles.Category_CategoryContainer}>
        {load ? (
          category.length > 0 ? (
            category.map((c) => <CategoryCard key={c._id} {...c} />)
          ) : (
            <p className={styles.Category_CreateCategory}>
              Crear nuevas categorias para que aparezcan aqui
            </p>
          )
        ) : (
          <>
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
            <CategoryCardPlaceholder />
          </>
        )}
      </section>
    </div>
  );
};

export default Category;
