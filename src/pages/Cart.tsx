import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";

function Cart() {
  const { carts, deleteCartItem } = useCart();
  const [checkedItem, setCheckedItems] = useState<number[]>([]);
  const handleCheckItem = (id: number) => {
    if (checkedItem.includes(id)) {
      setCheckedItems(checkedItem.filter((v) => v !== id));
    }
    setCheckedItems([...checkedItem, id]);
  };
  const handleItemDelete = (id: number) => {
    deleteCartItem(id);
  };
  return (
    <>
      <Title size="large"> 장바구니</Title>
      <CartStyle>
        <div className="content">
          {carts.map((v) => (
            <CartItem
              cart={v}
              key={v.id}
              checkedItem={checkedItem}
              onCheck={handleCheckItem}
              onDelete={handleItemDelete}
            />
          ))}
        </div>
        <div className="sumary"></div>
      </CartStyle>
    </>
  );
}

export default Cart;

const CartStyle = styled.div``;
