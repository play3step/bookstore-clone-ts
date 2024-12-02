import React, { useMemo } from "react";
import { Cart } from "../../model/cart.model";
import styled from "styled-components";
import Button from "../common/Button";
import Title from "../common/Title";
import { formatNumber } from "../../utils/format";
import CheckIconBtn from "./CheckIconBtn";
import { useAlert } from "../../hooks/useAlert";

interface Props {
  cart: Cart;
  checkedItem: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

function CartItem({ cart, checkedItem, onCheck, onDelete }: Props) {
  const { showConfirm } = useAlert();
  const isChecked = useMemo(() => {
    return checkedItem.includes(cart.id);
  }, [checkedItem, cart.id]);

  const handleChecked = () => {
    onCheck(cart.id);
  };
  const handleDelete = () => {
    showConfirm("정말 삭제하시겠습니까?", () => {
      onDelete(cart.id);
    });
  };
  return (
    <CartItemStyle>
      <div className="info">
        <CheckIconBtn isChecked={isChecked} onCheck={handleChecked} />

        <div>
          <Title size="medium">{cart.title}</Title>
          <div className="summary">{cart.sunmary}</div>
          <div className="price">{formatNumber(cart.price)}</div>
          <div className="quantity">{cart.quantity}</div>
        </div>
      </div>
      <Button size="medium" scheme="normal" onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </CartItemStyle>
  );
}

export default CartItem;

const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: ${({ theme }) => theme.colors.border};
  padding: 12px;

  p {
    padding: 0 0 8px 0;
  }
`;
