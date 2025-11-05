import { useState, useEffect } from "react";

interface UploadImageProps {
    bookId: number;
    onUploadSuccess?: (imageUrl: string) => void;
}

export default function UploadImage({ bookId, onUploadSuccess }: UploadImageProps) {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [message, setMessage] = useState<string>("");
    const [uploading, setUploading] = useState<boolean>(false);

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const handleUpload = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        if (!file) {
            setMessage("Please select a file.");
            return;
        }
        setUploading(true);

        const formData = new FormData();
        formData.append("file", file);

        try {

            const API_URL = `${import.meta.env.VITE_UPLOAD_API_URL}/api/books/${bookId}/upload`;

            const res = await fetch(API_URL, { method: "POST", body: formData });
            if (!res.ok) throw new Error("Upload failed");
            const data = await res.json();
            setMessage("File uploaded successfully!");
            setFile(null);
            setPreviewUrl(null);
            if (onUploadSuccess) onUploadSuccess(data.imageUrl);
        } catch (err) {
            console.error("Upload error", err);
            setMessage("An error occurred during upload. Please try again!");
        } finally {
            setUploading(false);
        }
    };

    return (
        <form onSubmit={handleUpload} className="p-2 border border-gray-400 rounded space-x-6 flex items-end">
            <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                    const selectedFile = e.target.files?.[0] ?? null;
                    setMessage("");
                    if (selectedFile) {
                        setFile(selectedFile);
                        setPreviewUrl(URL.createObjectURL(selectedFile));
                    } else {
                        setFile(null);
                        setPreviewUrl(null);
                    }
                }}
                className="border border-gray-400 rounded px-2 py-1"
            />
            {previewUrl && <img src={previewUrl} alt="Preview" className="h-32 object-cover rounded" />}
            <button
                type="submit"
                disabled={uploading}
                className={`px-4 py-1 rounded text-white ${uploading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`}
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>
            {message && (
                <p className={`text-sm ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{message}</p>
            )}
        </form>
    );
}