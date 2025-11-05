// import React from "react";
import { Link } from "react-router-dom";
import { Calendar, LibraryBig, Info, MessageCircle, Home } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 shadow-lg p-6 border border-red-100">
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-rose-600">Books Library</h1>
      </div>

      <nav >
        <ul className="space-y-4">
          <li>
            <Link to="/" className="flex items-center space-x-3 text-gray-700 hover:text-rose-600 transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/books" className="flex items-center space-x-3 text-gray-700 hover:text-rose-600 transition-colors">
              <LibraryBig size={20} />
              <span>Books</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center space-x-3 text-gray-700 hover:text-rose-600 transition-colors">
              <Info size={20} />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center space-x-3 text-gray-700 hover:text-rose-600 transition-colors">
              <MessageCircle size={20} />
              <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/calendar" className="flex items-center space-x-3 text-gray-700 hover:text-rose-600 transition-colors">
              <Calendar size={20} />
              <span>Calendar</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div >
  );
};

export default Sidebar;
