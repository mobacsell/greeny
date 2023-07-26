import { Order } from "../../../types/Order";
import { Product } from "../../../types/Product";
import { User } from "../../../types/User";

export type OrdersProps = {
  data: {
    users: User[];
    orders: Order[];
    products: Product[];
  };
};

export type ResultComposeData = {
  id: number;
  name: string;
  product: string;
  price: number;
};
