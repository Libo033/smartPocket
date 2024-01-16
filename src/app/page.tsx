import Login from "@/components/login/Login";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_left}>
        <Login />
      </div>
      <div className={styles.main_right}>
        <div className={styles.main_rightTitleContainer}>
          <h2 className={styles.main_rightTitle}>
            Somos tu aliado financiero. Controla tus gastos de
            manera sencilla y ahorra para tus proximos objetivos.
          </h2>
          <Image
            className={styles.main_rightImg}
            src={"/img/finance.svg"}
            alt="finances"
            width={450}
            height={450}
          />
        </div>
      </div>
    </main>
  );
}
