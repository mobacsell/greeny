import styles from "./Orders.module.scss";
import { OrdersProps } from "./types";
import { composeData } from "./utils/composeData";

export function Orders({ data }: OrdersProps) {
  const { users, orders, products } = data;
  const compositeData = composeData(users, orders, products);

  return (
    <>
      <div className={styles.root}>
        <h1>Ордера</h1>
        <div className={styles.orders}>
          <table>
            <tbody>
              <tr key="headTable">
                <th className={styles.headCell}>Продавец</th>
                <th className={styles.headCell}>Товар</th>
                <th className={styles.headCell}>Цена</th>
                <th className={styles.headCell}></th>
              </tr>
              {compositeData.map((value) => {
                return (
                  <tr key={value.id}>
                    <td className={styles.cell}>{value.name}</td>
                    <td className={styles.cell}>{value.product}</td>
                    <td className={styles.cell}>{value.price}</td>
                    <td className={styles.cell}>
                      <button className={styles.btn}>Просмотреть</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
