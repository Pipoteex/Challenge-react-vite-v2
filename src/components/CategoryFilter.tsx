// CategoryFilter.tsx
import React from "react";

interface CategoryFilterProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const categories = ["Todos", "Electrónica", "Ropa"];

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
    return (
        <select value={selectedCategory} onChange={(e) => onCategoryChange(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:outline-none">
            {categories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;
