
import React from 'react';

const ItemList = ({ items, onAddToCart }) => {
  return (
    <div className="item-list">
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name} - {item.price}</span>
            <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;