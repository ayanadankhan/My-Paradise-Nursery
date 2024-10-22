// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Import FontAwesome for the cart icon
import { useSelector } from 'react-redux'; // Import Redux hook

function Header() {
  const cart = useSelector((state) => state.cart.items); // Access cart from Redux store

  return (
    <nav className="navbar navbar-fixed navbar-expand-lg navbar-dark bg-success">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Brand Logo */}
        <Link className="navbar-brand" to="/My-Paradise-Nursery">Paradise Nursery</Link>

        {/* Collapsible Navbar Links (Gallery and Cart) */}
        <div className="d-flex align-items-center">
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/My-Paradise-Nursery/products">Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Cart Icon */}
          <Link className="nav-link text-white position-relative" to="/cart">
            <FaShoppingCart size={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
