import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <Link to="./" className={styles.logoLink}>Greeny</Link>
      </div>
      <nav>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="./" className={styles.link}>
              {" "}
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="./order"
              className={styles.link}
              title="Переход на несуществующий заказ"
            >
              Order
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
