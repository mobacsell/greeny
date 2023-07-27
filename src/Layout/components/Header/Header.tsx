import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>Greeny</div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}><a href="./" className={styles.link}>Home</a></li>
          <li className={styles.item}><a href="./" className={styles.link}>Order</a></li>
        </ul>
      </nav>
    </header>
  );
}
