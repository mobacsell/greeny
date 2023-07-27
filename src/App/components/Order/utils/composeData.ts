import { Order } from "../../../../types/Order";
import { Product } from "../../../../types/Product";
import { User } from "../../../../types/User";
import { OrderData } from "../types";

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
    return value.id === order.productId;
  });

  const [user] = users.filter((value) => {
    return value.id === order.sellerId;
  });

  return {
    name: user ? user.name : null,
    product: product ? product.name : null,
    price: product ? product.price : null,
  };
};
