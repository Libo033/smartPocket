import React, { FormEvent, useEffect, useId } from "react";
import styles from "./page.module.css";
import { CirclePicker, ColorResult, HuePicker } from "react-color";
import { useRouter } from "next/navigation";

const CategoryForm: React.FC<{
  handleColors: Function;
  background: string;
  id: string | null;
}> = ({ handleColors, background, id }) => {
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

    router.push("/dashboard/category");
  };

  useEffect(() => {
    console.log(id);
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
          onChange={(color: ColorResult) => handleColors(color)}
        />
        <CirclePicker
          className={styles.CategoryForm_ColorPicker}
          onChange={(color: ColorResult) => handleColors(color)}
          circleSpacing={21}
          circleSize={45}
          colors={colors}
        />
      </div>
      <div className={styles.CategoryForm_ButtonContainer}>
        <button type="submit" className={styles.CategoryForm_Button}>
          Crear
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
