import { Button } from "../Orders/components/Button";
import styles from "./Order.module.scss";

export function Order() {
  return (
    <>
      <div className={styles.root}>
        <h1 className={styles.header}>Предложение (арт. 1)</h1>
        <div className={styles.order}>
          <table>
            <tbody>
              <tr>
                <th className={styles.headerCell}>Продавец</th>
                <th className={styles.headerCell}>Товар</th>
                <th className={styles.headerCell}>Цена</th>
              </tr>
              <tr>
                <td className={styles.cell}>Продавец Алексей</td>
                <td className={styles.cell}>Яйца</td>
                <td className={styles.cell}>10</td>
                <td className={styles.cell}>
                  <Button size="sm" radius={true} text="Заказать" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
