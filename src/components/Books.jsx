import React, { useState, useEffect } from "react";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    fetch("/books.json") 
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error(err));
  }, []);

  const filterBooks = () => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "all" || book.category === category)
    );
  };

  return (
    <div className="bdy">
      <div className="containe">
        <h2 className="title">Find Books</h2>
        <div className="search-containe">
          <div className="input-wrapper">
            <input
              type="text"
              id="searchInput"
              className="search-input"
              placeholder="Search books..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setSearch("")}
              >
                ✖
              </button>
            )}
          </div>
          <select
            id="categoryFilter"
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="cybersecurity">Cybersecurity</option>
            <option value="programming">Programming</option>
            <option value="AI & ML">AI & ML</option>
            <option value="software development">Software Development</option>
            <option value="database">Database</option>
          </select>
        </div>
      </div>
      <div className="book-list">
        {filterBooks().map((book, index) => (
          <div key={index} className="book-card">
            <a href={`/book?title=${encodeURIComponent(book.title)}`}>
              <img src={book.imageLink} alt={book.title} />
              <h4>{book.title}</h4>
            </a>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
