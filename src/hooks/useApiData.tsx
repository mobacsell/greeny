import { useEffect } from "react";
import { getOrders } from "api/orders/getOrders";
import { getProducts } from "api/products/getProducts";
import { getUsers } from "api/users/getUsers";
import { useState } from "react";
import { User } from "types/User";
import { Order } from "types/Order";
import { Product } from "types/Product";

export function useApiData() {
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const [users, orders, products] = await Promise.all([
        getUsers(),
        getOrders(),
        getProducts(),
      ]);

      setUsers(users);
      setOrders(orders);
      setProducts(products);
    } catch {}
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { users, orders, products, loading };
}
