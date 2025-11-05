import { useEffect, useState } from "react";
import { BookService } from "../services/BookService";
import type { BookResponse } from "../services/books";
import UploadImage from "../components/UploadImage";

interface BooksListProps {
    onEdit: (book: BookResponse) => void;
}

export default function BooksList({ onEdit }: BooksListProps) {
    const [books, setBooks] = useState<BookResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchBooks = async () => {

        setLoading(true);
        setError("");

        try {
            const data = await BookService.getAll();
            setBooks(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        await BookService.delete(id);
        setBooks(books.filter((b) => b.bookId !== id));
    };

    useEffect(() => {
        fetchBooks();
    }, []);


    return (
        <div className="space-y-4">

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}


            {books.map((book) => (
                <div
                    key={`${book.title}+${book.bookId}`}
                    className="flex items-center p-4 border border-gray-400 rounded shadow-sm"
                >
                    <div className="w-full space-y-4">
                        <div>
                            <p className="font-semibold">Title: {book.title}</p>
                            <p className="text-gray-500">Year: {book.year}</p>
                            <p className="text-gray-500">Book ID: {book.bookId}</p>
                            <p className="text-gray-500">Language ID: {book.languageId}</p>
                            <p className="text-gray-500">ISBN: {book.isbn}</p>

                            <p className="text-gray-500">Created: {new Date(book.createdAtUtc).toLocaleDateString()}</p>
                            {book.modifiedAtUtc && (
                                <p className="text-gray-500">Modified: {new Date(book.modifiedAtUtc).toLocaleDateString()}</p>
                            )}

                            <p className="text-gray-500 ">Description: {book.description}</p>

                            {book.imageUrl && (
                                <div className="mt-2">
                                    <a href={book.imageUrl} target="_blank" rel="noopener noreferrer">
                                        <img src={book.imageUrl} alt={book.title} className="h-32 object-cover" />
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-end justify-between items-end rounded py-4">
                            <div className="w-sm flex space-x-6 border border-gray-400 rounded p-2">
                                <button
                                    onClick={() => onEdit(book)}
                                    className="px-3 py-1 bg-yellow-400 rounded w-1/2 "
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(book.bookId)}
                                    className="px-3 py-1 bg-red-500 text-white rounded w-1/2"
                                >
                                    Delete
                                </button>
                            </div>

                            <div >
                                <UploadImage
                                    bookId={book.bookId}
                                    onUploadSuccess={(imageUrl: string) => {
                                        setBooks((prevBooks) =>
                                            prevBooks.map((b) =>
                                                b.bookId === book.bookId ? { ...b, imageUrl } : b
                                            )
                                        );
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}
