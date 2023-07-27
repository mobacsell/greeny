import styles from "./Orders.module.scss";
import { Button } from "./components/Button/Button";
import { composeData } from "./utils/composeData";
import { useApiData } from "../../../hooks/useApiData";
import { Loader } from "../Loader";

export function Orders() {
  const { users, orders, products, loading } = useApiData();
  const compositeData = composeData(users, orders, products);

  return (
    <>
      {loading && <Loader />}
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
                      <Button
                        size="sm"
                        radius={true}
                        text="Просмотреть"
                        handlerType="openOrder"
                        orderId={value.id}
                      />
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
