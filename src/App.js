
import React, { useState } from 'react';
import  { categories } from './const';
import  { items } from './const';
import CategoryFilter from './CategoryFilter';
import ItemList from './ItemList';
import Cart from './Cart'

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === 'All') {
      setFilteredItems(items); 
    } else {
      const filtered = items.filter((item) => item.category === selectedCategory);
      setFilteredItems(filtered); 
    }
  };

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]); 
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <CategoryFilter categories={categories} onCategoryChange={handleCategoryChange} />
      <ItemList items={filteredItems} onAddToCart={handleAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default App;



