import React,{ useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
export default function Web() {
  useEffect(() => {
    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".conta__left h1", { ...scrollRevealOption, once: true });
    ScrollReveal().reveal(".conta__left .conta__btn", {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".conta__right h4", {
      ...scrollRevealOption,
      delay: 2000,
    });
    ScrollReveal().reveal(".conta__right h2", {
      ...scrollRevealOption,
      delay: 2500,
    });
    ScrollReveal().reveal(".conta__right h3", {
      ...scrollRevealOption,
      delay: 3000,
    });
    ScrollReveal().reveal(".conta__right p", {
      ...scrollRevealOption,
      delay: 3500,
    });

    ScrollReveal().reveal(".conta__right .tent-1", {
      duration: 1000,
      delay: 4000,
    });
    ScrollReveal().reveal(".conta__right .tent-2", {
      duration: 1000,
      delay: 4500,
    });

    ScrollReveal().reveal(".location", {
      ...scrollRevealOption,
      origin: "left",
      delay: 5000,
    });

    ScrollReveal().reveal(".socials span", {
      ...scrollRevealOption,
      origin: "top",
      delay: 5500,
      interval: 500,
    });
  }, []);
  return (
    <div className="web">
      <nav>
        <div className="nav__header">
          <div className="nav__logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <ul className="nav__links" id="nav-links">
          <li>
            <Link to="/web">Home</Link>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
      <div className="conta">
        <div className="conta__left">
          <h1>Your Disgital Key to Every Book</h1>
        </div>
        <div className="conta__right">
          <div className="images">
            <img src="users.jpg" alt="Users Image" className="tent-1" />
            <img src="ai lms.webp" alt="Intellegence" className="tent-2" />
          </div>
          <div className="contnt">
            <h2>Welcome To</h2>
            <h3>LMS Portal</h3>
            <p>
              Our Library Management System is designed to simplify and
              streamline the process of managing books, users, and transactions
              efficiently. Whether you're a librarian, student, or faculty
              member, our system provides an intuitive interface to search,
              borrow, return, and manage books with ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
