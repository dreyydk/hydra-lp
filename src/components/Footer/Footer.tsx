import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Dev: Andrei Bacin</p>
      <a
        href="https://github.com/dreyydk"
        className={styles.link}
        target="_blank"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/andreibacin/"
        className={styles.link}
        target="_blank"
      >
        LinkedIn
      </a>
    </footer>
  );
}
