import styles from "./Order.module.scss";
import { useSearchParams } from "react-router-dom";
import { Button } from "../Orders/components/Button";
import { useApiData } from "../../../hooks/useApiData";
import { composeData } from "./utils/composeData";
import { Loader } from "../Loader";

export function Order() {
  const [urlParam] = useSearchParams();
  const orderId = Number(urlParam.get("id"));

  const { users, orders, products, loading } = useApiData();
  const { name, product, price } = composeData(
    orderId,
    users,
    products,
    orders
  );

  return (
    <>
      {loading && <Loader />}
      <div className={styles.root}>
        <h1 className={styles.header}>Предложение (арт. {orderId})</h1>
        <div className={styles.order}>
          <table>
            <tbody>
              <tr>
                <th className={styles.headerCell}>Продавец</th>
                <th className={styles.headerCell}>Товар</th>
                <th className={styles.headerCell}>Цена</th>
              </tr>
              <tr>
                <td className={styles.cell}>{name}</td>
                <td className={styles.cell}>{product}</td>
                <td className={styles.cell}>{price}</td>
                <td className={styles.cell}>
                  <Button
                    size="sm"
                    radius={true}
                    text="Заказать"
                    handlerType="makeOrder"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
