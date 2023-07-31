import { Order } from "types/Order";
import { Product } from "types/Product";
import { User } from "types/User";
import { ResultComposeData } from "../types";

export const composeData = (
  users: User[],
  orders: Order[],
  products: Product[]
) => {
  const resultData: ResultComposeData[] = [];
  users.forEach((user) => {
    orders.forEach((order) => {
      if (user.id === order.sellerId) {
        products.forEach((product) => {
          if (order.productId === product.id) {
            resultData.push({
              id: order.id,
              name: user.name,
              product: product.name,
              price: product.price,
            });
          }
        });
      }
    });
  });
  return resultData;
};
