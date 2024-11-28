import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { FaAngleDoubleDown } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  linelimit: number;
}

function ElipsisBox({ children, linelimit }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <ElipsisBoxStyle linelimit={linelimit} $expanded={expanded}>
      <p>{children}</p>
      <div className="toogle">
        <Button
          size="small"
          scheme="normal"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "접기" : "펼치기"}
          <FaAngleDoubleDown />
        </Button>
      </div>
    </ElipsisBoxStyle>
  );
}

export default ElipsisBox;

interface ElipsisBoxStyleProps {
  linelimit: number;
  $expanded: boolean;
}
const ElipsisBoxStyle = styled.div<ElipsisBoxStyleProps>`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${({ linelimit, $expanded }) =>
      $expanded ? "none" : linelimit};
    -webkit-box-orient: vertical;
  }

  .toogle {
    display: flex;
    justify-content: end;
    svg {
      transform: ${({ $expanded }) =>
        $expanded ? "rotate(180deg)" : "rotate(0)"};
    }
  }
`;
