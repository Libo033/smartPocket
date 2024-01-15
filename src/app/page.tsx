import Login from "@/components/login/Login";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main_left}>
        <Login />
      </div>
      <div className={styles.main_right}></div>
    </main>
  );
}
