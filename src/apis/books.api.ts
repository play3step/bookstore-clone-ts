import { Book } from "../model/book.model";
import { Pagination } from "../model/paginatio.model";
import { httpClient } from "./http";

interface FetchBooksParams {
  category_id?: number;
  new?: boolean;
  currentPage?: number;
  limit: number;
}
interface FetchBooksResponse {
  books: Book[];
  pagination: Pagination;
}

export const fetchBooks = async (params: FetchBooksParams) => {
  try {
    const response = await httpClient.get<FetchBooksResponse>("/books", {
      params: params,
    });
    return response.data;
  } catch (error) {
    return {
      books: [],
      pagination: {
        totalCount: 0,
        currentPage: 1,
      },
    };
  }
};
