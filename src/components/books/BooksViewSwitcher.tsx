import styled from "styled-components";
import Button from "../common/Button";
import { FaList, FaTh } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";
import { useEffect } from "react";

const viewOptions = [
  {
    value: "list",
    icon: <FaList />,
  },
  {
    value: "grid",
    icon: <FaTh />,
  },
];

export type ViewMode = "grid" | "list";

const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch("grid");
    }
  }, []);

  return (
    <>
      <BooksViewSwitcherStyle>
        {viewOptions.map((v) => (
          <Button
            size="medium"
            scheme={
              searchParams.get(QUERYSTRING.VIEW) === v.value
                ? "primary"
                : "normal"
            }
            key={v.value}
            onClick={() => handleSwitch(v.value as ViewMode)}
          >
            {v.icon}
          </Button>
        ))}
      </BooksViewSwitcherStyle>
    </>
  );
};

export default BooksViewSwitcher;

const BooksViewSwitcherStyle = styled.div`
  display: flex;
  gap: 8ps;
  svg {
    fill: white;
  }
`;
