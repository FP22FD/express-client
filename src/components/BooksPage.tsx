import { useState } from "react";
import BooksList from "../components/BookList";
import BookForm from "../components/BookForm";
import type { BookResponse } from "../services/books";

export default function BooksPage() {
    const [editingBook, setEditingBook] = useState<BookResponse | undefined>();
    const [showForm, setShowForm] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState("");


    const handleEdit = (book: BookResponse) => {
        setEditingBook(book);
        setShowForm(true);
    };

    const handleCancel = () => {
        setEditingBook(undefined);
        setShowForm(false);
    };

    const handleSaved = (msg: string) => {
        setFeedbackMessage(msg);
        setEditingBook(undefined);
        setShowForm(false);

        setTimeout(() => {
            setFeedbackMessage("");
        }, 3000);
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Books Library</h1>

            {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    className="px-4 py-2 bg-green-500 text-white rounded"
                >
                    + Add New Book
                </button>
            )}

            {feedbackMessage && (
                <p className="text-green-600">{feedbackMessage}</p>
            )}

            {showForm && (
                <BookForm bookToEdit={editingBook} onSaved={handleSaved} onCancel={handleCancel} />
            )}
            <BooksList onEdit={handleEdit} />


        </div>
    );
}
