# Books Library - Frontend

Frontend application built with `React`, `TypeScript` and `Vite`.
This project provides a library management interface with features like book listing, creating/updating books, uploading book images, and a dashboard with reading stats.

## Features

- Dashboard with summary cards (Books Read, Currently Reading, Authors Followed, Tasks Complete)
- CRUD operations for books:
  - Add new books
  - Edit existing books
  - Delete books
- Image upload per book with live preview
- Pages:
  - Home/Dashboard
  - Books Library
  - About
  - Contact
  - Calendar
- Sidebar navigation with icons (Lucide icons)

## Project Structure

src/
├─ components/ # Reusable UI components (BookForm, BooksList, UploadImage, Sidebar)
├─ services/ # API services (BookService)
├─ pages/ # Route pages (Dashboard, BooksPage, AboutPage, ContactPage, CalendarPage)
├─ App.tsx # Main router and layout
├─ main.tsx # App entry point

## Environment Variables

Create a `.env` file in the root directory with the following:

```bash

VITE_BOOKS_API_URL=http://localhost:3000/api/books
VITE_UPLOAD_API_URL=http://localhost:3000

VITE_BOOKS_API_URL: Base URL for book CRUD operations

VITE_UPLOAD_API_URL: Base URL for image uploads

```

### Installation

Clone the repository:

```bash

git clone <your-repo-url>
cd frontend

```

### Install dependencies

```bash

npm install

```

Start the development server:

```bash

npm run dev

```

The app will be available at [http://localhost:5173/] by default.

### Scripts

```bash

npm run dev — Start the Vite development server with HMR
npm run build — Build the production bundle
npm run preview — Preview the production build

```

### Linting & Formatting

- `ESLint` is configured with recommended TypeScript and React rules.
- `Prettier` is recommended for consistent code formatting.
- `Tech Stack`
- `React` 18+
- `TypeScript`
- `Vite`
- `Tailwind CSS`
- `Lucide` icons
- `Fetch API` or HTTP requests

## Notes

UploadImage component handles image upload with preview.
The Dashboard is currently a mock, showing static data.
The Books library interacts with a backend API (BookService) for CRUD operations.
`.env` variables are used for API URLs to make the app configurable.

## License

MIT
