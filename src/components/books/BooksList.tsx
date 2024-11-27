import styled from "styled-components";
import BookItem from "./BookItem";
import { Book } from "../../model/book.model";

interface Props {
  books: Book[];
}

const BooksList = ({ books }: Props) => {
  return (
    <BooksListStyle>
      {books?.map((v) => (
        <BookItem key={v.id} book={v} />
      ))}
    </BooksListStyle>
  );
};

export default BooksList;

const BooksListStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;
