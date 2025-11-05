import { useState, useEffect } from "react";
import { BookService } from "../services/BookService";
import type { BookCreateRequest, BookResponse, BookUpdateRequest } from "../services/books";

interface BookFormProps {
    bookToEdit?: BookResponse;
    onSaved: (msg: string) => void;
    onCancel: () => void;
}

export default function BookForm({ bookToEdit, onSaved, onCancel }: BookFormProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [year, setYear] = useState("");
    const [isbn, setISBN] = useState("");
    const [languageId, setLanguageId] = useState(1);
    const [error, setError] = useState("");

    useEffect(() => {
        if (bookToEdit) {
            setTitle(bookToEdit.title || "");
            setDescription(bookToEdit.description || "");
            setYear(bookToEdit.year.toString() || "");
            setISBN(bookToEdit.isbn || "");
            setLanguageId(bookToEdit.languageId || 1);
        }
    }, [bookToEdit]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");

        if (!title || !description || !year || !isbn || !languageId) {
            setError("Please fill in all required fields.");
            return;
        }

        try {
            if (bookToEdit) {
                const updatePayload: BookUpdateRequest = {
                    title,
                    description,
                    isbn,
                    languageId,
                    year: Number(year),
                };

                await BookService.update(bookToEdit.bookId, updatePayload);
                onSaved("Book updated successfully!");

            } else {
                const createPayload: BookCreateRequest = {
                    title,
                    description,
                    isbn,
                    languageId,
                    year: Number(year),
                };

                await BookService.create(createPayload);
                onSaved("Book created successfully!");
            }
        } catch {
            setError("An error occurred. Please try again!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-white">
            {error && <p className="text-red-600">{error}</p>}

            <div>
                <label className="block font-semibold">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <div>
                <label className="block font-semibold">Description</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <div>
                <label className="block font-semibold">Year</label>
                <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <div>
                <label className="block font-semibold">Isbn</label>
                <input
                    type="text"
                    value={isbn}
                    onChange={(e) => setISBN(e.target.value)}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>
            <div>
                <label className="block font-semibold">Language</label>
                <input
                    type="number"
                    value={languageId}
                    onChange={(e) => setLanguageId(Number(e.target.value))}
                    className="w-full border px-2 py-1 rounded"
                    required
                />
            </div>

            <div className="flex space-x-2">
                <button type="submit" className="px-4 py-2 bg-rose-500 text-white rounded">
                    {bookToEdit ? "Update" : "Create"}
                </button>
                <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-300 rounded">
                    Cancel
                </button>
            </div>
        </form>
    );
}
