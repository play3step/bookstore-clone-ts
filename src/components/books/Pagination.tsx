import styled from "styled-components";
import { Pagination as IPagination } from "../../model/paginatio.model";
import { LIMIT } from "../../constants/pagination";
import Button from "../common/Button";
import { useSearchParams } from "react-router-dom";
import { QUERYSTRING } from "../../constants/querystring";

interface Props {
  pagination: IPagination;
}

const Pagination = ({ pagination }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { totalCount, currentPage } = pagination;
  const pages: number = Math.ceil(totalCount / LIMIT);
  const handleClickPage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERYSTRING.PAGE, page.toString());
    setSearchParams(newSearchParams);
  };
  return (
    <>
      <PaginationStyle>
        {pages > 0 && (
          <ol>
            {Array(pages)
              .fill(0)
              .map((_, i) => (
                <li>
                  <Button
                    key={i}
                    size="small"
                    scheme={i + 1 === currentPage ? "primary" : "normal"}
                    onClick={() => handleClickPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                </li>
              ))}
          </ol>
        )}
      </PaginationStyle>
    </>
  );
};

export default Pagination;

const PaginationStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;
  ol {
    list-style: none;
    display: flex;
    gap: 8px;
  }
`;
