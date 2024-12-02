import { useEffect, useState } from "react";
import { Cart } from "../model/cart.model";
import { deleteCart, fetchCart } from "../apis/carts.api";

export const useCart = () => {
  const [carts, setCart] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      setCart(carts.filter((v) => v.id !== id));
    });
  };

  useEffect(() => {
    fetchCart().then((cart) => {
      setCart(cart);
      setIsEmpty(cart.length === 0);
    });
  }, []);
  return { carts, isEmpty, deleteCartItem };
};
