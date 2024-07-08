import Image from "next/image";
import styles from "./styles.module.css";
import UserIcon from "../../../public/user.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mobileIcon}>
        <div className={styles.mobileIconLine}></div>
        <div className={styles.mobileIconLine}></div>
        <div className={styles.mobileIconLine}></div>
      </div>
      <h1 className={styles.title}>HYDRA</h1>
      <Image src={UserIcon} width={25} height={25} alt="Login/Sign Up" />
    </header>
  );
}
