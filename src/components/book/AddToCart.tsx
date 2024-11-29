import styled from "styled-components";
import { BookDetail } from "../../model/book.model";
import InputText from "../common/InputText";
import Button from "../common/Button";
import { useState } from "react";

import { Link } from "react-router-dom";
import { useBook } from "../../hooks/useBook";

interface Prop {
  book: BookDetail;
}

function AddToCart({ book }: Prop) {
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart, cartAdded } = useBook(book.id.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <AddToCartStyle $added={cartAdded}>
      <InputText inputType="number" value={quantity} onChange={handleChange} />
      <div>
        <Button size="medium" scheme="normal" onClick={handleIncrease}>
          +
        </Button>
        <Button size="medium" scheme="normal" onClick={handleDecrease}>
          -
        </Button>
        <Button
          size="medium"
          scheme="primary"
          onClick={() => addToCart(quantity)}
        >
          장바구니 담기
        </Button>
        <div className="added">
          <p>장바구니에 추가되었습니다.</p>
          <Link to="/cart">장바구니로 이동</Link>
        </div>
      </div>
    </AddToCartStyle>
  );
}

export default AddToCart;

interface AddToCartStyleProp {
  $added: boolean;
}

const AddToCartStyle = styled.div<AddToCartStyleProp>`
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: relative;

  .added {
    position: absolute;
    right: 0;
    bottom: -90px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 0px 12px;
    opacity: ${({ $added }) => ($added ? "1" : "0")};
    transition: all 0.5s ease;
  }

  p {
    padding: 0 0 8px 0;
  }
`;
