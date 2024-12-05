import { useEffect, useState } from "react";
import { OrderListItem } from "../model/order.model";
import { fetchOrder, fetchOrders } from "../apis/order.api";

export const useOrders = () => {
  const [orders, setOrders] = useState<OrderListItem[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  useEffect(() => {
    fetchOrders().then((v) => {
      setOrders(v);
    });
  }, []);

  const selectedItem = (orderId: number) => {
    if (orders.filter((item) => item.id === orderId)[0].detail) {
      setSelectedItemId(orderId);
      return;
    }
    fetchOrder(orderId).then((detail) => {
      setSelectedItemId(orderId);
      setOrders(
        orders.map((item) => {
          if (item.id === orderId) {
            return {
              ...item,
              detail: detail,
            };
          }
          return item;
        })
      );
    });
  };

  return { orders, selectedItemId, selectedItem };
};
