"use client";
import React, { useId, useState } from "react";
import styles from "@/app/recover_password/page.module.css";
import Image from "next/image";
import Link from "next/link";

const Recover_password = () => {
  const [emailSended, setEmailSended] = useState<boolean>(false);
  const [load, setLoad] = useState(false);
  const $emailId = useId();

  const sendEmail = () => {
    setEmailSended(true);
    setTimeout(() => {
      setLoad(true);
    }, 1500);
  };

  return (
    <div className={styles.Recover_password}>
      <div className={styles.Recover_password_ImgContainer}>
        <Image
          className={styles.Recover_password_Img}
          src={"/img/pass.svg"}
          alt="password"
          width={60}
          height={60}
        />
      </div>
      <div className={styles.Recover_passwordHeading}>
        <h2 className={styles.Recover_passwordHeading2}>
          Olvidaste tu contraseña?
        </h2>
        <h3 className={styles.Recover_passwordHeading3}>
          No te preocupes, te mandaremos las instrucciones para que cambies tu
          costraseña.
        </h3>
      </div>
      {emailSended ? (
        <>
          {load ? (
            <div className={styles.Recover_passwordSended}>
              <p>Revisa tu email. Ya enviamos las instrucciones.</p>
            </div>
          ) : (
            <div className={styles.Recover_passwordLoader}></div>
          )}
        </>
      ) : (
        <div className={styles.Recover_passwordForm}>
          <label htmlFor={$emailId}>Email</label>
          <input type="email" id={$emailId} required />
          <button onClick={() => sendEmail()}>Recuperar contraseña</button>
        </div>
      )}
      <Link className="linkA" href={"/"}>
        Volver a iniciar sesion!
      </Link>
    </div>
  );
};

export default Recover_password;
