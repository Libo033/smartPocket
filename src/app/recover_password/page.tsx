import React, { useId } from "react";
import styles from "@/app/recover_password/page.module.css";
import Image from "next/image";
import Link from "next/link";

const Recover_password = () => {
  const $emailId = useId();

  return (
    <div className={styles.Recover_password}>
      <div className={styles.Recover_password_ImgContainer}>
        <Image className={styles.Recover_password_Img} src={"/img/pass.svg"} alt="password" width={60} height={60} />
      </div>
      <div className={styles.Recover_password}>
        <h2>Olvidaste tu contraseña?</h2>
        <h3>No te preocupes, te mandaremos las instrucciones para que cambies tu costraseña.</h3>
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" id={$emailId} />
        <button>Recuperar contraseña</button>
      </div>
      <Link href={"/"}>Volver a iniciar sesion!</Link>
    </div>
  );
};

export default Recover_password;
