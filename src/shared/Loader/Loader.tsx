import styles from "./Loader.module.scss";

export function Loader() {
  return (
    <div className={styles.root}>
      <div className={styles.block}>
        <div className={styles.circle}></div>
      </div>
    </div>
  );
}
