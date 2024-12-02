import React from "react";
import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

function CheckIconBtn({ isChecked, onCheck }: Props) {
  return (
    <CheckIconBtnStyle onClick={onCheck}>
      {isChecked ? <FaRegCheckCircle /> : <FaRegCircle />}
    </CheckIconBtnStyle>
  );
}

export default CheckIconBtn;

const CheckIconBtnStyle = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;
