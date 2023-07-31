import styles from "./Order.module.scss";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../../../shared/Button";
import { useApiData } from "../../../hooks/useApiData";
import { composeData } from "./utils/composeData";
import { Loader } from "../Loader";
import { NoOrder } from "./components/NoOrder";
import { Modal } from "./components/Modal";
import { makeOrder } from "../../../api/orders/makeOrder";

export function Order() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [posting, setPosting] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<"available" | "ordered">(
    "available"
  );

  const [urlParam] = useSearchParams();
  const orderId = Number(urlParam.get("id"));

  const { users, orders, products, loading } = useApiData();
  const { name, product, price } = composeData(
    orderId,
    users,
    products,
    orders
  );

  const toggleModal = async (posting: boolean) => {
    if (posting) {
      setPosting(true);
      await makeOrder();
      setPosting(false);
      setOrderStatus("ordered");
    }
    setShowModal(!showModal);
  };

  if (
    orderId > orders.length - 1 ||
    urlParam.get("id") === null ||
    urlParam.get("id") === ""
  ) {
    return (
      <>
        {loading && <Loader />}
        <NoOrder />;
      </>
    );
  }

  return (
    <>
      {loading && <Loader />}
      {posting && <Loader />}
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
                    orderStatus={orderStatus}
                    handlerType="makeOrder"
                    toggleModal={toggleModal}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modal showModal={showModal} toggleModal={toggleModal} />
      </div>
    </>
  );
}
