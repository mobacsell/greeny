import styles from "./Footer.module.scss";

const date = new Date();

export function Footer() {
  return (
    <footer className={styles.root}>
      <time className={styles.time}>Greeny, {date.getFullYear()}</time>
    </footer>
  );
}
