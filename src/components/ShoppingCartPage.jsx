// src/components/ShoppingCartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/cartSlice'; // Use new actions
import { Link } from 'react-router-dom';

function ShoppingCartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="container">
      <div className="row">
        {/* Cart Items Section */}
        <div className="col-lg-8">
          <h1>Your Cart</h1>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          style={{ width: '50px', height: '50px', marginRight: '10px' }}
                        />
                        <div>{item.name}</div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-outline-secondary me-2"
                          onClick={() => dispatch(decreaseQuantity(item))}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary ms-2"
                          onClick={() => dispatch(increaseQuantity(item))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(removeFromCart(index))}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing Section */}
        <div className="col-lg-4 mt-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Total Quantity</span>
                <span>{totalQuantity}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Total Price</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <hr />
              <Link to="/checkout">
                <button className="btn btn-primary w-100">Proceed to Checkout</button>
              </Link>

              <Link to="/My-Paradise-Nursery/products">
                <button className="btn btn-secondary w-100 mt-3 bg-success">Continue Shopping</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
