import { Order } from "types/Order";
import { Product } from "types/Product";
import { User } from "types/User";
import { OrderData } from "../types";

/**
 * Функция-утилита composeData позволяет получить данные по конкретному предложению, преобразовывая выходные данные хука useApiData
 */
export const composeData = (
  orderId: number,
  users: User[],
  products: Product[],
  orders: Order[]
): OrderData => {
  const [order] = orders.filter((value) => {
    return value.id === orderId;
  });

  const [product] = products.filter((value) => {
    return typeof order === "object" ? value.id === order.productId : false;
  });

  const [user] = users.filter((value) => {
    return typeof order === "object" ? value.id === order.sellerId : false;
  });

  return {
    name: user ? user.name : null,
    product: product ? product.name : null,
    price: product ? product.price : null,
  };
};
