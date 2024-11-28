import React from "react";
import styled from "styled-components";
import { BookDetail } from "../../model/book.model";
import Button from "../common/Button";
import { FaHeart } from "react-icons/fa";

interface Prop {
  book: BookDetail;
  onClick: () => void;
}

function LikeButton({ book, onClick }: Prop) {
  return (
    <LikeButtonStyle
      size="medium"
      scheme={book.liked ? "like" : "normal"}
      onClick={onClick}
    >
      <FaHeart />
      {book.liked}
    </LikeButtonStyle>
  );
}

export default LikeButton;

const LikeButtonStyle = styled(Button)`
  display: flex;
  gap: 6px;
`;
