// App.tsx
import React, { useState } from "react";
import { products as initialData } from "./data";
import { Product } from "./types/types";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";

function App() {
    const [data, setData] = useState<Product[]>(initialData);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
    };

    const toggleFavorite = (id: number) => {
        setData((prev) => prev.map((product) => (product.id === id ? { ...product, favorite: !product.favorite } : product)));
    };

    const removeProduct = (id: number) => {
        setData((prev) => prev.filter((product) => product.id !== id));
    };

    // Lógica de filtrado y búsqueda
    const filteredData = data.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen p-4 bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Mi Tienda</h1>

            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <SearchBar onSearch={handleSearch} />
                <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
            </div>

            <ProductList products={filteredData} onToggleFavorite={toggleFavorite} onRemove={removeProduct} />
        </div>
    );
}

export default App;
