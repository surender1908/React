
import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && <p>Total: {total}</p>}
    </div>
  );
};

export default Cart;