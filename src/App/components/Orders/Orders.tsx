import styles from "./Orders.module.scss";

export function Orders() {
  return (
    <>
      <div className={styles.root}>
        <h1>Ордера</h1>
        <div className={styles.orders}>
          <table>
            <tbody>
              <tr>
                <th className={styles.headCell}>Продавец</th>
                <th className={styles.headCell}>Товар</th>
                <th className={styles.headCell}>Цена</th>
                <th className={styles.headCell}></th>
              </tr>
              <tr>
                <td className={styles.cell}>Продавец Иван</td>
                <td className={styles.cell}>Яйца</td>
                <td className={styles.cell}>10</td>
                <td className={styles.cell}>
                  <button className={styles.btn}>Просмотреть</button>
                </td>
              </tr>
              <tr>
                <td className={styles.cell}>Продавец Алексей</td>
                <td className={styles.cell}>Сыр</td>
                <td className={styles.cell}>30</td>
                <td className={styles.cell}>
                  <button className={styles.btn}>Просмотреть</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
