
import React, { useState } from 'react';

const CategoryFilter = ({ categories, onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    onCategoryChange(event.target.value);
  };

  return (
    <div className="category-filter">
      <label htmlFor="category">Filter by Category</label>
      <select id="category" value={selectedCategory} onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;