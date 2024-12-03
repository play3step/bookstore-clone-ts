import React, { useMemo, useState } from "react";
import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import Empty from "../components/common/Empty";
import { FaShoppingCart } from "react-icons/fa";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import { useAlert } from "../hooks/useAlert";
import { OrderSheet } from "../model/order.model";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { showAlert, showConfirm } = useAlert();

  const nav = useNavigate();

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

  const totalQuantity = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItem.includes(cart.id)) {
        return acc + cart.quantity;
      }
      return acc;
    }, 0);
  }, [carts, checkedItem]);

  const totalPrice = useMemo(() => {
    return carts.reduce((acc, cart) => {
      if (checkedItem.includes(cart.id)) {
        return acc + cart.price;
      }
      return acc;
    }, 0);
  }, [carts, checkedItem]);

  const handleOrder = () => {
    if (checkedItem.length === 0) {
      showAlert("주문할 상품을 선택해 주세요.");
      return;
    } else {
      const orderData: Omit<OrderSheet, "delivery"> = {
        items: checkedItem,
        totalPrice,
        totalQuantity,
        firstBookTitle: carts[0].title,
      };
      showConfirm("주문하시겠습니까?", () => {
        nav("/order", { state: orderData });
      });
    }
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
            <div className="summary">
              <CartSummary
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
              />
              <Button size="large" scheme="primary" onClick={handleOrder}>
                주문하기
              </Button>
            </div>
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

const CartStyle = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  padding: 24px 0 0 0;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .summary {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;
