import styled from "styled-components";
import BookItem from "./BookItem";

const BooksList = () => {
  return (
    <BooksListStyle>
      <BookItem />
    </BooksListStyle>
  );
};

export default BooksList;

const BooksListStyle = styled.div``;
