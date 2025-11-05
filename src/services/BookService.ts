import type { BookResponse, BookUpdateRequest, BookCreateRequest } from "./books";

const API_URL = import.meta.env.VITE_API_URL;

export const BookService = {
  getAll: async (): Promise<BookResponse[]> => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch books");
    return res.json();
  },

  create: async (book: BookCreateRequest): Promise<BookResponse> => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!res.ok) throw new Error("Failed to create book");
    return res.json();
  },

  update: async (id: number, book: BookUpdateRequest): Promise<BookResponse> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    if (!res.ok) throw new Error("Failed to update book");
    return res.json();
  },

  delete: async (id: number) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete book");
  },
};
