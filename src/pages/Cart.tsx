import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import Empty from "../components/common/Empty";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
  const { carts, deleteCartItem, isEmpty } = useCart();
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
        {!isEmpty && (
          <>
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
          </>
        )}
        {isEmpty && (
          <Empty
            title="장바구니가 비었습니다."
            icon={<FaShoppingCart />}
            description={<>장바구니를 채워보세요</>}
          />
        )}
      </CartStyle>
    </>
  );
}

export default Cart;

const CartStyle = styled.div``;
