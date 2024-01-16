import React from 'react'
import styles from "@/components/login/page.module.css";
import Image from "next/image";

const LoginSocials = () => {
  return (
    <div className={styles.LoginSocials}>
      <button>
        <Image src={"/img/google.svg"} alt='google' width={21} height={21} />
        Google
      </button>
      <button>
        <Image src={"/img/facebook.svg"} alt='facebook' width={21} height={21} />
        Facebook
      </button>
    </div>
  )
}

export default LoginSocials