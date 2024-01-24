import React, { FormEvent, useContext, useEffect, useId } from "react";
import styles from "./page.module.css";
import { CirclePicker, ColorResult, HuePicker } from "react-color";
import { useRouter } from "next/navigation";
import { CategoryContext } from "@/context/CategoryContext";

const CategoryForm: React.FC<{
  handleColors: Function;
  background: string;
  id: string | null;
}> = ({ handleColors, background, id }) => {
  const { categories, createCategory, editCategory } =
    useContext(CategoryContext);
  const router = useRouter();
  const $name = useId();
  const $color = useId();

  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b",
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b",
  ];

  const handleCategory = (e: FormEvent) => {
    e.preventDefault();

    if (id) {
      // Editar
      if (editCategory) {
        editCategory(
          id,
          (document.getElementById($name) as HTMLInputElement).value,
          background.slice(0, 7)
        );
      }
    } else {
      // Crear
      if (createCategory) {
        createCategory(
          (document.getElementById($name) as HTMLInputElement).value,
          background.slice(0, 7)
        );
      }
    }

    router.push("/dashboard/category");
  };

  useEffect(() => {
    if (id) {
      let category = categories.find((c) => c._id === id);

      if (category) {
        (document.getElementById($name) as HTMLInputElement).value =
          category?.categoria;
        handleColors(category.color);
      }
    }
  }, []);

  return (
    <form
      className={styles.CategoryForm}
      onSubmit={(Event: FormEvent) => handleCategory(Event)}
      action="post"
    >
      <div className={styles.CategoryForm_Container}>
        <label htmlFor={$name}>Nombre</label>
        <input type="text" id={$name} autoComplete="off" required />
      </div>
      <div className={styles.CategoryForm_Container}>
        <label htmlFor={$color}>Color</label>
        <HuePicker
          className={styles.CategoryForm_ColorPicker2}
          color={background}
          onChange={(color: ColorResult) => handleColors(color.hex)}
        />
        <CirclePicker
          className={styles.CategoryForm_ColorPicker}
          onChange={(color: ColorResult) => handleColors(color.hex)}
          circleSpacing={21}
          circleSize={45}
          colors={colors}
        />
      </div>
      <div className={styles.CategoryForm_ButtonContainer}>
        <button
          type="submit"
          style={{ backgroundColor: background }}
          className={styles.CategoryForm_Button}
        >
          {id ? "Editar" : "Crear"}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
