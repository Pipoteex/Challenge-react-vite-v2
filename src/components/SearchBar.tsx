// SearchBar.tsx
import React, { useState, ChangeEvent } from "react";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [term, setTerm] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        onSearch(newTerm);
    };

    return <input type="text" value={term} onChange={handleChange} placeholder="Busca un producto..." className="p-2 border border-gray-300 rounded-md focus:outline-none" />;
};

export default SearchBar;
